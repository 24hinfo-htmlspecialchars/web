import { PlacesProvider } from '@/context/placesContext'
import Map from './map'

export default async function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlacesProvider theme="">
      <div className="flex h-screen w-screen overflow-hidden">
        <aside className="dark:bg-black p-4 border-r-2 border-gray-800">
          {children}
        </aside>
        <main className="flex-1 relative">
          <Map />
        </main>
      </div>
    </PlacesProvider>
  );
}
