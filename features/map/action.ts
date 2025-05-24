'use server'

import { Place } from "./types"

import { fetchPlaces } from "@/services/places"

export async function getPlaces(): Promise<Place[]> {
  return await fetchPlaces()
}