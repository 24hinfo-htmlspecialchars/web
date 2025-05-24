'use server'

import { Place } from "@/features/map/types"
import { prisma } from "@/prisma/prisma"

type RawLieu = {
  lieu_id: string;
  label: string;
  adresse: string;
  latitude: string;
  longitude: string;
  theme: { label: string };
  audio?: { url: string } | null;
  paragraphes?: { description_md: string }[];
  liens?: { lien: string }[];
}

function transformLieuToPlace(lieu: RawLieu): Place {
  return {
    id: lieu.lieu_id,
    theme: lieu.theme.label,
    name: lieu.label,
    description: lieu.paragraphes?.[0]?.description_md || "",
    address: lieu.adresse,
    location: {
      latitude: parseFloat(lieu.latitude),
      longitude: parseFloat(lieu.longitude),
    },
    audio: lieu.audio?.url || "",
    images: (lieu.liens || []).map(img => img.lien),
  }
}

export const fetchPlaces = async (): Promise<Place[]> => {
  try {
    const lieux = await prisma.lieu.findMany({
      include: {
        theme: true,
        audio: true,
        paragraphes: true,
        liens: true,
      },
    });
    return lieux.map(transformLieuToPlace);
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
}