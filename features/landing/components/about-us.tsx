import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
}

export const About = ({
  title = "À Propos",
  description = "Derrière Lyon & Lumière se trouve une équipe passionnée, dédiée à transformer chaque visite en une expérience lumineuse inoubliable. " +
    "Nos experts combinent savoir-faire, innovation et créativité pour vous offrir le meilleur de Lyon, au rythme de ses éclats et de ses histoires.",
  mainImage = {
    src: "/landing/about/1.jpg",
    alt: "Portraits dynamiques de notre équipe fondatrice engagée",
  },
  secondaryImage = {
    src: "/landing/about/2.jpg",
    alt: "Moments de collaboration et d’innovation au cœur de notre startup",
  },
  breakout = {
    src: "/logo.svg",
    alt: "Logo Lyon & Lumières symbolisant innovation et patrimoine",
    title: "Une expertise lumineuse au service de votre découverte",
    description:
      "Lyon & Lumières vous propose une plateforme innovante qui allie technologie et culture pour révéler la magie nocturne de la ville. ",
    buttonText: "Explorez notre univers",
    buttonUrl: "/app",
  },
}: About3Props = {}) => {
  return (
    <section id='about' className="pb-32">
      <div className="container px-4 lg:px-16">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12 invert-0 dark:invert"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a
                  href={breakout.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
