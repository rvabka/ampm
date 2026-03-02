import Image from "next/image";
import { Truck, Bus, Snowflake, Info, type LucideIcon } from "lucide-react";

const FLEET_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDu99yzUmdBfQYvXDB19ud9ScudrdBraRGgHuA06-A3YdFcFoY6LiGROBaR5nl2qFWQq310KhZ7h4zOs6syDoDskyPEbPTbN1v3cYan0plolfpVmUaT-QSV0jaVYORrQeNBhwSriUh8-uIrYaE5LtSme9N31bjey_hVVkRz8H5MTRSOTX3XnfS0mcK8TDf-2ZmfEUdxuKl6ZXoN7UCfEhiI8Mz85ZAGWF6hANDP_JC6N-wjPkJX7sfieMXlAVH2m1oP3fImV-pjWU09";

const fleetItems: {
  icon: LucideIcon;
  title: string;
  description: string;
  specs: string[];
  featured: boolean;
}[] = [
  {
    icon: Truck,
    title: "Zestawy 13,6 m (firanka/plandeka)",
    description: "Standardowe naczepy do ładunków ogólnych na trasach krajowych i europejskich.",
    specs: ["Ładowność: do 24 000 kg", "Obj: 90 m³"],
    featured: true,
  },
  {
    icon: Bus,
    title: "Busy do 3,5 t",
    description:
      "Szybkie pojazdy dostawcze na potrzeby transportu ekspresowego – idealne dla mniejszych przesyłek.",
    specs: ["Ładowność: do 1 200 kg"],
    featured: false,
  },
  {
    icon: Snowflake,
    title: "Chłodnie",
    description: "Pojazdy z kontrolowaną temperaturą do przewozu towarów wrażliwych na zmiany termiczne.",
    specs: ["Kontrolowana temperatura"],
    featured: false,
  },
];

export default function Fleet() {
  return (
    <section
      className="py-20 px-8 bg-white relative overflow-hidden"
      aria-labelledby="fleet-heading"
    >
      
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 -skew-x-12 transform translate-x-20 z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <h2
            id="fleet-heading"
            className="text-4xl font-display font-bold text-text-light mb-4"
          >
            Jakich pojazdów szukamy?
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Zapraszamy do współpracy przewoźników posiadających różne typy pojazdów —
            od busów po zestawy ciężarowe i chłodnie. Dopasowujemy flotę do specyfiki
            każdego zlecenia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <Image
              src={FLEET_IMG}
              alt="Nowoczesna biała ciężarówka AMPM Spedition klasy EURO 6"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Zestawy Ciężarowe
                  </h3>
                  <p className="text-white/70">Transport krajowy i UE</p>
                </div>
                <button
                  className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition text-white"
                  aria-label="Więcej informacji o ciągnikach siodłowych"
                >
                  <Info size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
            {fleetItems.map((item) => (
              <div
                key={item.title}
                className={`p-6 rounded-2xl flex items-start gap-4 hover:shadow-lg transition cursor-pointer group ${
                  item.featured
                    ? "bg-gray-50 border border-transparent hover:border-gray-300"
                    : "bg-white border border-gray-100"
                }`}
              >
                <div
                  className={`p-3 rounded-xl shrink-0 transition-colors ${
                    item.featured
                      ? "bg-secondary text-white group-hover:bg-primary"
                      : "bg-gray-100 text-gray-600 group-hover:text-primary"
                  }`}
                >
                  <item.icon size={28} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-secondary">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-600">
                    {item.specs.map((spec) => (
                      <span
                        key={spec}
                        className={`px-2 py-1 rounded border ${
                          item.featured
                            ? "bg-white border-gray-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
