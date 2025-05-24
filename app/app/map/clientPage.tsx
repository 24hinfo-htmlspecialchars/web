'use client'

import { usePlaces } from '@/context/placesContext'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Building2, Clapperboard, Star } from 'lucide-react'

function getThemeIcon(theme: string) {
	switch (theme.toLowerCase()) {
		case 'urbaines':
      return <span className="text-xl text-gray-500"><Building2 /></span>
    case 'cinéma':
      return <span className="text-xl text-gray-500"><Clapperboard /></span>
    case 'symbolique':
      return <span className="text-xl text-gray-500"><Star /></span>
    default:
      return null
	}
}

export default function ClientPage() {
	const { visiblePlaces } = usePlaces()

	return (
		<div className="w-full px-4 h-screen flex flex-col">
			<h2 className="text-xl font-bold mb-4">Liste des lieux visibles</h2>

			{/* Zone scrollable verticale avec une hauteur calculée */}
			<div className="flex flex-col gap-4 overflow-y-auto flex-1 pb-4 pr-1">
				{visiblePlaces.map(place => (
					<Card
						key={place.id}
						className="flex flex-row hover:shadow-lg transition-shadow"
					>
						{place.images.length > 0 && (
							<div className="relative w-32 h-32 flex-shrink-0">
								<Image
									src={place.images[0]}
									alt={place.name}
									fill
									className="object-cover"
								/>
							</div>
						)}

						<div className="flex flex-col justify-between p-3 flex-1">
							<CardTitle className="text-base font-semibold">
								{place.name}
							</CardTitle>
							{getThemeIcon(place.theme)}
							<CardContent className="p-0 pt-1">
								<Link
									href={`/app/map/${place.id}`}
									className="text-sm text-blue-600 hover:underline mt-2 inline-block"
								>
									Voir plus →
								</Link>
							</CardContent>
						</div>
					</Card>
				))}
			</div>
		</div>
	)
}
