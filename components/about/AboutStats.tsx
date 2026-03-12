import Image from 'next/image';

const yearsOfExperience = new Date().getFullYear() - 2020;

const stats = [
  { value: '250', label: 'Zadowolonych klientów' },
  { value: String(yearsOfExperience), label: 'Lat doświadczenia' },
  { value: '50k+', label: 'Wykonanych zleceń' },
];

export default function AboutStats() {
  return (
    <section className="relative py-32 px-8 bg-secondary border-y border-gray-800">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          alt=""
          fill
          className="object-cover opacity-20 grayscale"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-6xl lg:text-7xl font-display font-black text-white mb-2 drop-shadow-lg group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="h-1 w-12 bg-primary mx-auto mb-4" aria-hidden="true" />
              <span className="text-gray-300 uppercase tracking-widest text-sm font-semibold block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
