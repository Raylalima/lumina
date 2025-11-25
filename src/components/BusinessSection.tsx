import { MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Business {
  name: string;
  category: string;
  location: string;
  rating: number;
  image: string;
}

interface BusinessSectionProps {
  isDark: boolean;
}

const businesses = [
  {
    name: 'Café Aconchego',
    category: 'Padaria',
    location: 'Cidade Júlia',
    rating: 4.8,
    image: "/img/padaria.png",
  },
  {
    name: 'Tha Closet',
    category: 'Roupas Femininas',
    location: 'Avenida Ângelo Cristianini',
    rating: 4.9,
    image: '/img/roupas.png',
  },
  {
    name: 'Luara',
    category: 'Perfumaria',
    location: 'Alvarenga',
    rating: 4.7,
    image: '/img/perfumaria.png',
  },
  {
    name: 'La Belleza',
    category: 'Salão de beleza',
    location: 'Cidade Júlia',
    rating: 5.0,
    image: '/img/salao.png',
  },
  {
    name: 'Realce Doces e Salgados',
    category: 'Doceria',
    location: 'Vila Missionária',
    rating: 4.6,
    image: '/img/docinho.png',
  },
  {
    name: 'Delícias Padaria',
    category: 'Mercado',
    location: 'Parque Primavera',
    rating: 4.5,
    image: '/img/padoca.png',
  },
];

export function BusinessSection({ isDark }: BusinessSectionProps) {
  return (
    <section
      id="comercios"
      className={`py-20 transition-colors duration-300 ${isDark ? 'bg-zinc-900' : 'bg-gray-50'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Comércios em Destaque
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
          >
            Conheça os negócios locais que estão transformando suas comunidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <div
              key={business.name}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                transition-all hover:-translate-y-1 group 
                ${isDark ? 'bg-zinc-800' : 'bg-white'}`}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={business.image}
                  alt={`Foto do comércio ${business.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full flex items-center gap-1
                    ${isDark ? 'bg-yellow-500 text-black' : 'bg-yellow-400 text-black'}`}
                >
                  <Star className="w-4 h-4 fill-yellow-500" />
                  <span>{business.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {business.name}
                </h3>

                <p className={`mb-3 ${isDark ? 'text-yellow-400' : 'text-red-500'}`}>
                  {business.category}
                </p>

                <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-4 h-4" />
                  <span>{business.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
