import { mailIcon, mapPinIcon, phoneIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";

export default function page() {
  return (
    <section className="container flex flex-col max-lg:gap-10 lg:flex-row justify-between py-20 ">
      <div className="lg:w-[520px] w-full sm:w-3/4">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">
          Request a Tailored Quote for Your Pet
        </h2>
        <p className="pt-6 w-3/4">
          After submitting your request, our team will carefully review the
          details and provide you with a customized quote promptly.
        </p>
        <div className="flex flex-col gap-6 pt-10">
          {contact.map((c, idx) => (
            <Link
              href={c.slug}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary flex gap-4 items-center hover:underline"
            >
              <Image src={c.icon} alt="icon" width={24} height={24} /> {c.title}
            </Link>
          ))}
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

const contact = [
  {
    title: "movemypetnigeria@gmail.com",
    slug: "mailto:movemypetnigeria@gmail.com",
    icon: mailIcon,
  },
  {
    title: "+234 8180281937",
    slug: "tel:+2348180281937",
    icon: phoneIcon,
  },
  {
    title: "Muritala Muhammed International Airport Lagos",
    slug: "https://maps.app.goo.gl/B126UEBsCoeyvk2D9",
    icon: mapPinIcon,
  },
];
