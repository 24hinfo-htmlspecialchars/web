import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export const Features = () => {
  return (
    <section id='features' className="py-32 px-4 lg:px-16">
      <div className="container flex flex-col gap-16">
        <div className="lg:max-w-3xl mx-auto text-center">
          <h2 className="mb-3 font-semibold text-3xl md:text-5xl lg:mb-6">
            {" "}
            Les catégories{" "}
          </h2>{" "}
          <p className="mb-8 text-muted-foreground lg:text-lg">
            {" "}
            Lyon, ville au riche héritage et au souffle moderne, offre une
            palette unique d&apos;expériences. Chaque catégorie révèle une part
            de son âme : histoire, art, saveurs ou culture vibrante. Explorez
            ses quartiers, laissez-vous surprendre par ses lumières et vibrez au
            rythme d&apos;une ville qui allie tradition et innovation. Lyon vous
            invite à découvrir sa richesse sous toutes ses facettes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Lumières Urbaines */}
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="/landing/features/1.jpg"
                alt="Fête des Lumières et éclairage architectural à Lyon"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Lumières Urbaines
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Plongez au cœur de la Fête des Lumières, vivez la magie des
                installations qui illuminent la ville et découvrez les secrets
                de l’éclairage architectural lyonnais. Balades nocturnes et
                parcours lumineux vous invitent à une expérience sensorielle
                unique.
              </p>
              <div className="w-fit pt-4">
                <InteractiveHoverButton>
                  <a href="/app/map?theme=urbaines">Voir les lieux</a>
                </InteractiveHoverButton>
              </div>
            </div>
          </div>

          {/* Lumières du Cinéma */}
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Lumières du Cinéma
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Rendez hommage aux frères Lumière, pionniers du 7ème art, et
                explorez le riche patrimoine filmique lyonnais. Découvrez les
                lieux de tournage, musées et anecdotes qui ont façonné
                l'histoire du cinéma.
              </p>
              <div className="w-fit pt-4">
                <InteractiveHoverButton>
                  <a href="/app/map?theme=cinema">Voir les lieux</a>
                </InteractiveHoverButton>
              </div>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="/landing/features/2.jpg"
                alt="Hommage aux frères Lumière et patrimoine cinématographique lyonnais"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Lumières Symboliques */}
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="/landing/features/3.jpg"
                alt="Innovation, transmission et culture à Lyon"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Lumières Symboliques
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Explorez les lumières de la connaissance, de la transmission et
                de l'innovation. Plongez dans la culture lyonnaise, ses lieux
                d'échanges, ses initiatives créatives et son esprit
                avant-gardiste.
              </p>
              <div className="w-fit pt-4">
                <InteractiveHoverButton>
                  <a href="/app/map?theme=symboliques">Voir les lieux</a>
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
