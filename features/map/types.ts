export type Place = {
  id: string;
  theme: string;
  name: string;
  description: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  audio: string;
  images: string[];
}