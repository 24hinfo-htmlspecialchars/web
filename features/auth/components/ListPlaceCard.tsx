"use client";

import { PlaceCard } from "@/components/card-lieu";
import * as React from "react";

type Place = {
  images: string[];
  name: string;
  rating: number;
  address: string;
};

type Props = {
  places: Place[];
};

export function PlaceList({ places }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {places.map((place, index) => (
        <PlaceCard
          key={index}
          images={place.images}
          name={place.name}
          rating={place.rating}
          address={place.address}
        />
      ))}
    </div>
  );
}
