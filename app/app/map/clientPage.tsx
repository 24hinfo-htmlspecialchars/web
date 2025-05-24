'use client'

import { usePlaces } from '@/context/placesContext'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

export default function ClientPage() {
  const { visiblePlaces } = usePlaces()

  return (
    <div className="w-80">
      <h2>Liste des lieux visibles</h2>
      <div className="flex flex-col gap-2">
        {visiblePlaces.map(place => <Card key={place.id}>
          
          <Link href={`/app/map/${place.id}`}>{place.name}</Link>
        
        </Card>)}
      </div>
    </div>
  )
}