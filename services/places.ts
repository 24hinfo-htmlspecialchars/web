import { ImageLieu } from './../node_modules/.prisma/client/index.d';
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

function transformLieuToPlace(lieu: RawLieu & { images?: { url: string }[] }): Place {
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
    images: (lieu.images || []).map(img => img.url),
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

    const allImages = await prisma.ImageLieu.findMany({
			select: {
				url: true,
				lieuId: true,
			},
		});

    const imagesByLieu: Record<string, string[]> = {};
    for (const { url, lieuId } of allImages) {
      if (!imagesByLieu[lieuId]) imagesByLieu[lieuId] = [];
      imagesByLieu[lieuId].push(url);
    }

    return lieux.map(lieu =>
      transformLieuToPlace({
        ...lieu,
        images: imagesByLieu[lieu.lieu_id] || []
      })
    );

  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
};
