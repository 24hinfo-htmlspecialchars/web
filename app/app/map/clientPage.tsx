'use client'

import { usePlaces } from '@/context/placesContext'
import Link from 'next/link'

export default function ClientPage() {
  const { visiblePlaces } = usePlaces()

  console.log('Visible Places:', visiblePlaces)

  return (
    <div className="p-4 w-80">
      <h2>Visible IDs:</h2>
      <ul>
        {visiblePlaces.map(place => <li key={place.id}><Link href={`/app/map/${place.id}`}>{place.name}</Link></li>)}
      </ul>
    </div>
  )
}