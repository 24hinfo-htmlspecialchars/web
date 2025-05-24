

export const Features = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-16 px-4 lg:px-16">
        <div className="lg:max-w-3xl mx-auto text-center">
          <h2 className="mb-3 font-semibold text-3xl md:text-5xl lg:mb-6">
            {" "}
            Les catégories{" "}
          </h2>{" "}
          <p className="mb-8 text-muted-foreground lg:text-lg">
            {" "}
            Lyon, ville au riche héritage et au souffle moderne, offre une
            palette unique d&apos;expériences. Chaque catégorie révèle une part de
            son âme : histoire, art, saveurs ou culture vibrante. Explorez ses
            quartiers, laissez-vous surprendre par ses lumières et vibrez au
            rythme d&apos;une ville qui allie tradition et innovation. Lyon vous
            invite à découvrir sa richesse sous toutes ses facettes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="Feature 1"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Feature 1
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                imperdiet magna nec massa consectetur, id interdum ante congue.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Feature 2
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                imperdiet magna nec massa consectetur, id interdum ante congue.
              </p>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-2.svg"
                alt="Feature 2"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="Feature 1"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Feature 3
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                imperdiet magna nec massa consectetur, id interdum ante congue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
