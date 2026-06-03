import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

const TOTAL_FRAMES = 120;

export const CenterStreamVideo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  
  const { scrollProgress } = useScrollProgress();
  
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  // Preload frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      
      img.onerror = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

  // Update target frame based on scroll progress
  useEffect(() => {
    targetFrameRef.current = scrollProgress * (TOTAL_FRAMES - 1);
  }, [scrollProgress]);

  // Adjust canvas size to match layout bounding rect & Device Pixel Ratio
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const timer = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [imagesLoaded]);

  // Animation cycle with LERP scrubbing
  useEffect(() => {
    if (!imagesLoaded) return;
    
    let rafId: number;
    
    const drawCoverImage = (
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      w: number,
      h: number
    ) => {
      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;
      if (imgW === 0 || imgH === 0) return;
      
      const imgRatio = imgW / imgH;
      const canvasRatio = w / h;
      
      let drawW = w;
      let drawH = h;
      let offsetX = 0;
      let offsetY = 0;
      
      if (canvasRatio > imgRatio) {
        drawH = w / imgRatio;
        offsetY = (h - drawH) / 2;
      } else {
        drawW = h * imgRatio;
        offsetX = (w - drawW) / 2;
      }
      
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    };

    const render = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.12; // LERP coefficient
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }
      
      const frameIndex = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(currentFrameRef.current))
      );
      
      const img = imagesRef.current[frameIndex];
      const canvas = canvasRef.current;
      
      if (canvas && img && img.complete) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawCoverImage(ctx, img, canvas.width, canvas.height);
        }
      }
      
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    
    return () => cancelAnimationFrame(rafId);
  }, [imagesLoaded]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center overflow-hidden transition-opacity duration-1000 mix-blend-multiply dark:mix-blend-screen opacity-[0.6] md:opacity-[0.35] dark:md:opacity-[0.25]">
      
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover filter contrast-[1.1] grayscale-[0.2] transition-opacity duration-500"
        style={{
          opacity: imagesLoaded ? 1 : 0,
        }}
      />
      
      {!imagesLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-primary/80 backdrop-blur-[2px] z-20 pointer-events-none">
          <div className="w-8 h-8 rounded-full border-2 border-text-primary/10 border-t-accent-blue animate-spin mb-2" />
          <span className="font-mono text-[8px] tracking-[0.2em] text-text-primary/60 uppercase">
            LOADING {loadProgress}%
          </span>
        </div>
      )}

      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-bg-primary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-bg-primary to-transparent" />
    </div>
  );
};
