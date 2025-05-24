'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { fetchPlaces } from '@/services/places';
import { Place } from '@/features/map/types';

type PlacesContextType = {
	places: Place[];
	visiblePlaces: Place[];
	setVisiblePlaces: (places: Place[]) => void;
	loading: boolean;
};

const PlacesContext = createContext<PlacesContextType | null>(null);

export function usePlaces() {
	const ctx = useContext(PlacesContext);
	if (!ctx) throw new Error('usePlaces must be used inside <PlacesProvider>');
	return ctx;
}

export function PlacesProvider({ children, theme }: { children: React.ReactNode, theme: string }) {
	const [places, setPlaces] = useState<Place[]>([]);
	const [visiblePlaces, setVisiblePlaces] = useState<Place[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPlaces().then(allPlaces => {
			const filtered = theme ? allPlaces.filter(place => place.theme === theme) : allPlaces;
			setPlaces(filtered);
			setVisiblePlaces(filtered);
			setLoading(false);
		});
	}, [theme]);

	return (
		<PlacesContext.Provider value={{ places, visiblePlaces, setVisiblePlaces, loading }}>
			{children}
		</PlacesContext.Provider>
	);
}
