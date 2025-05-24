import Place from "./place";

export default async function PlacePage({ params, searchParams }: {
	params: Promise<{ id: string }>,
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { id } = await params;
  const searchParamsObj = await searchParams;

	return (
		<Place id={id} searchParams={searchParamsObj} />
	);
}
