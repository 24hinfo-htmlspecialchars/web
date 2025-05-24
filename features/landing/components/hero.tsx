import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";


export const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="grid items-center gap-8 bg-muted-2 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              Lyon & Lumières
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Découvrez Lyon comme vous ne l&apos;avez jamais vue : une balade nocturne immersive entre installations lumineuses, récits captivants et histoires secrètes.
              Explorez, écoutez, et créez votre propre parcours lumineux au fil des rues, des monuments et des légendes.            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <a href="/app">
                <InteractiveHoverButton className="px-6 py-4">
                  Commencer l&apos;aventure
                </InteractiveHoverButton>
              </a>
            </div>
          </div>
          <img
            src="/landing/hero.jpg"
            alt="hero"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
