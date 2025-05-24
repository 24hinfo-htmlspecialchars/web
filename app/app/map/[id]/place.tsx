'use client'

import Link from "next/link"

export default function Place({ id, searchParams }: {
  id: string,
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="w-200">
      <Link href="/app/map/">Back</Link>
      <p>Place id: {id}</p>
    </div>
  )
}
