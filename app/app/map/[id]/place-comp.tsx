'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { Place } from "@/features/map/types"
import { marked } from "marked"
import DOMPurify from "dompurify"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"

export default function PlaceComp({ place }: { place: Place }) {
  const [htmlDescription, setHtmlDescription] = useState<string>("")

  useEffect(() => {
    async function convertMarkdown() {
      const rawHtml = await marked.parse(place.description || "")
      const cleanHtml = DOMPurify.sanitize(rawHtml)
      setHtmlDescription(cleanHtml)
    }

    convertMarkdown()
  }, [place.description])

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 h-screen overflow-y-auto">
      <div className="text-sm mb-1">
        <Link href="/app/map/" className="inline-block text-muted-foreground hover:text-primary transition underline">
          ← Retour à la carte
        </Link>
      </div>

      <div className="flex flex-col md:flex-row bg-background border rounded-lg shadow-sm overflow-hidden">
        {/* Carousel */}
        <div className="md:w-2/3 w-full bg-muted">
          <Carousel className="w-full h-full" plugins={[Autoplay({delay: 2000,}),
      ]}>
            <CarouselContent>
              {place.images?.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[4/3] w-full relative">
                    <img
                      src={img}
                      alt={`Image ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Info */}
        <div className="md:w-1/3 w-full p-6 relative flex flex-col justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 border hover:bg-muted"
          >
            <Heart className="h-5 w-5 text-primary" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold">{place.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">{place.address}</p>
            <p className="text-sm text-muted-foreground mt-8">
              {place.description?.slice(0, 250).replace("#", "")}
              {place.description && place.description.length > 250 ? "…" : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Description Markdown */}
      <div
        className="prose prose-sm max-w-none text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: htmlDescription }}
      />
    </div>
  )
}
