import { PlaceCard } from "@/components/card-lieu";
import { Header } from "@/components/layout/header";
import { fetchPlaces } from "@/services/places";

export default async function Home() {
  const allPlaces = await fetchPlaces();
  const popularPlaces = allPlaces.slice(1, 5);

  return (
    <>
      <Header />

      <div className="p-8 space-y-12">
        {/* Section populaire */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Les plus visités</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {popularPlaces.map((place, index) => (
              <div key={index} className="min-w-[300px] flex-shrink-0">
                <PlaceCard
                  images={place.images}
                  name={place.name}
                  address={place.address}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <hr className="my-8 border-gray-300" />

        {/* Section générale */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Tous les lieux</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPlaces.map((place, index) => (
              <PlaceCard
                key={index}
                images={place.images}
                name={place.name}
                address={place.address}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
