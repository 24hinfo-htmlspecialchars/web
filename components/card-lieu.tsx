"use client";

import Image from "next/image";
import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

type Props = {
  images: string[];
  name: string;
  rating: number;
  address: string;
};

export function PlaceCard({ images, name, rating, address }: Props) {
  // Construire le tableau d'items en dehors du JSX
  const carouselItems = [];
  for (let i = 0; i < images.length; i++) {
    console.log(i);
    const src = images[i];
    carouselItems.push(
      <CarouselItem key={i}>
        <div className="relative aspect-video">
          <Image
            src={src}
            alt={`${name} image ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0} // Charge la première image en priorité
          />
        </div>
      </CarouselItem>
    );
  }

  return (
    <Card className="max-w-md overflow-hidden">
      <Carousel className="w-full relative">
        <CarouselContent>{carouselItems}</CarouselContent>

        {images.length > 1 && ( // Affiche les boutons seulement s'il y a plusieurs images
          <>
            <CarouselPrevious
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition"
              aria-label="Previous"
              variant="ghost"
            >
              ‹
            </CarouselPrevious>
            <CarouselNext
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition"
              aria-label="Next"
              variant="ghost"
            >
              ›
            </CarouselNext>
          </>
        )}
      </Carousel>

      <CardContent className="p-4">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-lg">{name}</CardTitle>
        </CardHeader>

        <div className="flex items-center mb-2 gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{address}</p>
      </CardContent>
    </Card>
  );
}
