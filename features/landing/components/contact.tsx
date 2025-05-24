import { Mail, MapPin, Phone } from "lucide-react";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
}

export const Contact = ({
  title = "Contactez-nous",
  description = "Notre équipe dédiée à l'expérience client est à votre écoute pour répondre à toutes vos questions et vous accompagner avec efficacité.",
  emailLabel = "Adresse Email",
  emailDescription = "Nous nous engageons à vous apporter une réponse personnalisée sous 24 heures ouvrées.",
  email = "contact@notreentreprise.com",
  officeLabel = "Notre Bureau",
  officeDescription = "Venez échanger avec nos experts dans un cadre convivial et professionnel.",
  officeAddress = "42 Avenue de l'Innovation, 69000 Lyon",
  phoneLabel = "Téléphone",
  phoneDescription = "Notre service client est disponible du lundi au vendredi, de 9h00 à 18h00, pour vous accompagner au mieux.",
  phone = "+33 4 72 00 00 00",
}: Contact7Props) => {
  return (
    <section className="bg-background">
    <div className="container px-4 lg:px-16">
        <div className="mb-14">
          <h1 className="mt-2 mb-3 text-3xl font-semibold text-balance md:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3 text-muted-foreground">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="mb-3 text-muted-foreground">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="mb-3 text-muted-foreground">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
