import {
  Crown,
  Palette,
  Globe,
  Headset,
} from "lucide-react";

import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  const services = [
    {
      icon: <Crown size={32} />,
      title: "Luxury Number Plates", 
      description:
        "Discover an exclusive collection of premium registration plates carefully selected for collectors, investors, and luxury vehicle owners.",
    },
    {
      icon: <Palette size={32} />,
      title: "Custom Plate Design",
      description:
        "Create personalized registration plates with premium finishes and modern craftsmanship tailored to your unique identity.",
    },
    {
      icon: <Globe size={32} />,
      title: "Worldwide Delivery",
      description:
        "Fast, secure, and insured worldwide shipping with premium packaging to ensure every plate reaches you safely.",
    },
    {
      icon: <Headset size={32} />,
      title: "Premium Support",
      description:
        "Dedicated VIP customer support from enquiry to delivery, ensuring a smooth and trusted buying experience.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#090909] py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px]" />

      {/* Container */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[6px] text-yellow-400">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
            Luxury Services
            <br />
            Crafted For Premium Buyers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            We provide premium number plate solutions with
            world-class quality, luxury presentation, and
            professional customer experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}