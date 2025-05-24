import PlaceComp from "./place-comp";
import { getPlace } from "@/features/map/action";
import { Place } from "@/features/map/types";

export default async function PlacePage({ params }: {
	params: Promise<{ id: string }>,
}) {
  const { id } = await params;
	const place: Place = await getPlace(id);

	return (
		<PlaceComp place={place} />
	);
}