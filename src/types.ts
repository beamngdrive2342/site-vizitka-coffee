export interface CoffeeBlend {
  id: string;
  name: string;
  tagline: string;
  roastLevel: string;
  origin: string;
  altitude: string;
  process: string;
  dosage: string;
  yieldOutput: string;
  extractionTime: string;
  notes: string[];
  description: string;
  image: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  detail: string;
}

export interface OriginCountry {
  name: string;
  region: string;
  harvestSeason: string;
  tasteProfile: string;
  altitudeRange: string;
}
