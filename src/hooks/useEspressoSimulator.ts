import { useState, useEffect } from "react";
import { CoffeeBlend } from "../types";

export const useEspressoSimulator = (selectedBlend: CoffeeBlend) => {
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionProgress, setExtractionProgress] = useState(0);
  const [simulatedPressure, setSimulatedPressure] = useState(0);
  const [simulatedWeight, setSimulatedWeight] = useState(0);
  const [simulatedTDS, setSimulatedTDS] = useState(0);
  const [flowState, setFlowState] = useState<"idle" | "preinfusion" | "extraction" | "blonde" | "complete">("idle");

  useEffect(() => {
    let interval: any;
    if (isExtracting) {
      setFlowState("preinfusion");
      setSimulatedPressure(0);
      setSimulatedWeight(0);
      setSimulatedTDS(0);
      setExtractionProgress(0);

      const duration = 12000; // Accelerated simulator
      const step = 100;
      let elapsed = 0;

      interval = setInterval(() => {
        elapsed += step;
        const ratio = Math.min(elapsed / duration, 1);
        setExtractionProgress(ratio);

        if (elapsed < 2000) {
          // Pre-infusion
          setFlowState("preinfusion");
          setSimulatedPressure(1.6 + (elapsed / 2000) * 1.4);
          setSimulatedWeight(0);
          setSimulatedTDS(0);
        } else if (elapsed < 10000) {
          // Main Extraction at 9 Bar
          setFlowState("extraction");
          const jitter = Math.sin(elapsed / 120) * 0.15;
          setSimulatedPressure(9.0 + jitter);
          const activeRatio = (elapsed - 2000) / 8000;
          const targetWeight = parseFloat(selectedBlend.yieldOutput);
          setSimulatedWeight(Math.min(targetWeight * Math.pow(activeRatio, 1.1), targetWeight));
          setSimulatedTDS(4.5 + Math.log10(1 + activeRatio * 9) * 5.1);
        } else if (elapsed < 12000) {
          // Blonding Finish stage
          setFlowState("blonde");
          const stageRatio = (elapsed - 10000) / 2000;
          setSimulatedPressure(9 - stageRatio * 4.5);
          setSimulatedWeight(parseFloat(selectedBlend.yieldOutput));
          setSimulatedTDS(Math.min(9.5 + stageRatio * 0.4, 10.1));
        } else {
          // Complete
          setFlowState("complete");
          setSimulatedPressure(0);
          setSimulatedWeight(parseFloat(selectedBlend.yieldOutput));
          setSimulatedTDS(Math.round((9.5 + Math.random() * 0.7) * 10) / 10);
          setIsExtracting(false);
          clearInterval(interval);
        }
      }, step);
    }
    return () => clearInterval(interval);
  }, [isExtracting, selectedBlend]);

  const triggerExtraction = () => {
    setIsExtracting(true);
  };

  const resetSimulator = () => {
    setFlowState("idle");
    setIsExtracting(false);
    setExtractionProgress(0);
    setSimulatedPressure(0);
    setSimulatedWeight(0);
    setSimulatedTDS(0);
  };

  return {
    isExtracting,
    extractionProgress,
    simulatedPressure,
    simulatedWeight,
    simulatedTDS,
    flowState,
    triggerExtraction,
    resetSimulator
  };
};
