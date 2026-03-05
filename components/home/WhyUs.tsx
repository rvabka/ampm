import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

const WAREHOUSE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAjnGNobQjAB5xo3-fWhhiMNiPi1TSDWDlM6NVAtI2DmQ2FTYsgts_aAcxhXCC43B9uQyhCk3TRGNMHDlAxx-zd3gYzJ9FTB9TxCb05D43Tk4CI9Hr86gac7l9bdroNk0VqFH2M2YbU0r2zHirMS_6AYStrU7XE6gXCz4-HLRZKlYFd_74ttQlODYxNkzIv3xzf5pu9RJgWAgo2dYQPHESXi4gbhoQGDnvwKNYYelBV0QD4iOyaQl2PkQ4bCpCGLkN_tVQF-PxO_N8y';

const TRUCK_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDu99yzUmdBfQYvXDB19ud9ScudrdBraRGgHuA06-A3YdFcFoY6LiGROBaR5nl2qFWQq310KhZ7h4zOs6syDoDskyPEbPTbN1v3cYan0plolfpVmUaT-QSV0jaVYORrQeNBhwSriUh8-uIrYaE5LtSme9N31bjey_hVVkRz8H5MTRSOTX3XnfS0mcK8TDf-2ZmfEUdxuKl6ZXoN7UCfEhiI8Mz85ZAGWF6hANDP_JC6N-wjPkJX7sfieMXlAVH2m1oP3fImV-pjWU09';

export default function WhyUs() {
  return (
    <section className="pt-32 pb-20 px-8" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-secondary" aria-hidden="true" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                Dlaczego my
              </span>
            </div>

            <h2
              id="why-us-heading"
              className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-secondary"
            >
              AM PM Sp. z o.o. to <br />
              <span className="text-primary">Twój partner w logistyce.</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-secondary">
                  <ShieldCheck className="text-primary" size={24} aria-hidden="true" />
                  Terminowość i bezpieczeństwo
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Gwarantujemy terminową realizację zleceń oraz najwyższy poziom
                  bezpieczeństwa ładunków dzięki stałemu monitoringowi, sprawdzonym
                  przewoźnikom i dedykowanemu spedytorowi na każdym etapie.
                </p>
              </div>

              <Link
                href="/kontakt"
                className="inline-block px-8 py-3 border-2 border-secondary rounded-full font-medium hover:bg-secondary hover:text-white transition text-secondary"
              >
                Skontaktuj się z nami
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
            <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-3xl h-[400px]">
              <Image
                src="/image9.webp"
                alt="Transport krajowy i międzynarodowy – AMPM Sp. z o.o."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-primary uppercase mb-1 block">
                  Spedycja
                </span>
                <h4 className="text-white font-bold text-xl">
                  Organizacja Transportu
                </h4>
              </div>
            </div>

            <div className="col-span-1 h-[190px] relative group overflow-hidden rounded-3xl">
              <Image
                src="/image7.webp"
                alt="Ciężarówka AMPM w trasie – transport krajowy i międzynarodowy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-6">
                <h4 className="text-white font-bold text-lg">
                  Transport Międzynarodowy
                </h4>
              </div>
            </div>

            <div className="col-span-1 h-[190px] relative overflow-hidden rounded-3xl bg-secondary flex items-center justify-center border border-gray-700">
              <div className="text-center p-6">
                <span
                  className="text-4xl font-bold text-primary block mb-2"
                  aria-label="Cała Unia Europejska"
                >
                  UE
                </span>
                <span className="text-sm text-gray-300">Zasięg operacyjny</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
