'use client'

import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import { usePlaces } from '@/context/placesContext'
import { useEffect, useRef } from 'react'

export default function Map() {
	const { places, setVisiblePlaces, loading } = usePlaces()

	const mapContainer = useRef<HTMLDivElement>(null)
	const mapRef = useRef<maplibregl.Map | null>(null)

	useEffect(() => {
		if (!mapContainer.current || mapRef.current || loading) return

		const map = new maplibregl.Map({
			container: mapContainer.current,
			style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
			center: [4.8357, 45.7640],
			zoom: 12
		})

		mapRef.current = map

		const features = places
			.filter(p => p.location.longitude !== undefined && p.location.latitude !== undefined)
			.map(p => ({
				type: "Feature" as const,
				properties: {
					id: p.id || null
				},
				geometry: {
					type: "Point" as const,
					coordinates: [p.location.longitude, p.location.latitude]
				}
			}))

		map.on('load', () => {
			map.addSource('pois', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features
				}
			})

			map.addLayer({
				id: 'poi-glow',
				type: 'circle',
				source: 'pois',
				paint: {
					'circle-radius': 10,
					'circle-color': '#ffffcc',
					'circle-opacity': 0.85,
					'circle-blur': 0.8
				}
			})

			updateVisiblePlaces()
		})

		const updateVisiblePlaces = () => {
			const bounds = map.getBounds()

			const visible = places.filter(p => {
				if (!p.location.longitude || !p.location.latitude) return false
				return bounds.contains([p.location.longitude, p.location.latitude])
			})

      console.log('Visible Places:', visible)
			setVisiblePlaces(visible)
		}

		map.on('moveend', updateVisiblePlaces)

		return () => {
			map.remove()
			mapRef.current = null
		}
	}, [loading, places, setVisiblePlaces])

	return (
		<div
			ref={mapContainer}
			className="absolute top-0 left-0 w-full h-full bg-gray-900"
		/>
	)
}
