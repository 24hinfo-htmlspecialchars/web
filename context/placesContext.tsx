'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { fetchPlaces } from '@/services/places';
import { Place } from '@/features/map/types';

type PlacesContextType = {
	places: Place[];
	visiblePlaces: Place[];
	setVisiblePlaces: (ids: Place[]) => void;
	loading: boolean;
};

const PlacesContext = createContext<PlacesContextType | null>(null);

export function usePlaces() {
	const ctx = useContext(PlacesContext);
	if (!ctx) throw new Error('usePlaces must be used inside <PlacesProvider>');
	return ctx;
}

export function PlacesProvider({ children }: { children: React.ReactNode }) {
	const [places, setPlaceIds] = useState<Place[]>([]);
	const [visiblePlaces, setVisiblePlaces] = useState<Place[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPlaces().then(ids => {
			setPlaceIds(ids);
			setLoading(false);
		});
	}, []);

	return (
		<PlacesContext.Provider value={{ places, visiblePlaces, setVisiblePlaces, loading }}>
			{children}
		</PlacesContext.Provider>
	);
}
