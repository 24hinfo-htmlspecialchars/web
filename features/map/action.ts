'use server'

import { Place } from "./types"

import { fetchPlaces } from "@/services/places"

export async function getPlaces(): Promise<Place[]> {
  return await fetchPlaces()
}

export async function getPlace(id: string): Promise<Place> {
  const places = await fetchPlaces()
  const place = places.find((place) => place.id === id)
  if (!place) {
    throw new Error(`Place with id ${id} not found`)
  }
  return place
}