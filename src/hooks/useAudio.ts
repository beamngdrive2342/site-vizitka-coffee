import { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";

export const useAudio = () => {
  const { ambientAudio, setAmbientAudio } = useAppContext();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2433/2433-84.wav");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.08;
    }

    if (ambientAudio) {
      audioRef.current.play().catch(() => {
        setAmbientAudio(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [ambientAudio, setAmbientAudio]);
};
