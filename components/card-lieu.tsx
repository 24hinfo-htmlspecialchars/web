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

type Props = {
  images: string[];
  name: string;
  address: string;
};

export function PlaceCard({ images, name, address }: Props) {
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
            priority={i === 0}
          />
        </div>
      </CarouselItem>
    );
  }

  return (
    <Card className="max-w-md overflow-hidden">
      <Carousel className="w-full relative">
        <CarouselContent>{carouselItems}</CarouselContent>

        {images.length > 1 && (
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

        <p className="text-sm text-muted-foreground line-clamp-2">{address}</p>
      </CardContent>
    </Card>
  );
}
