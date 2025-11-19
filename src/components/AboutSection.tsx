import { Lightbulb, Target, Users, TrendingUp } from 'lucide-react';

interface AboutSectionProps {
  isDark: boolean;
}

export function AboutSection({ isDark }: AboutSectionProps) {
  const features = [
    {
      icon: Lightbulb,
      title: 'Visibilidade',
      description: 'Iluminamos seu negócio para que mais clientes possam encontrá-lo',
    },
    {
      icon: Target,
      title: 'Foco Local',
      description: 'Estratégias personalizadas para o seu mercado regional',
    },
    {
      icon: Users,
      title: 'Conexão',
      description: 'Conectamos comércios com a comunidade ao redor',
    },
    {
      icon: TrendingUp,
      title: 'Crescimento',
      description: 'Ajudamos seu negócio a crescer de forma sustentável',
    },
  ];

  return (
    <section id="sobre" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Sobre a Lumina
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Somos especialistas em dar visibilidade a comércios locais que merecem ser descobertos.
            Nossa missão é iluminar negócios que fazem a diferença na comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl text-center ${
                  isDark ? 'bg-zinc-900' : 'bg-gray-50'
                } hover:shadow-lg transition-all`}
              >
                <div className={`inline-flex p-4 rounded-lg mb-4 ${
                  isDark 
                    ? 'bg-gradient-to-br from-yellow-400 to-red-500' 
                    : 'bg-gradient-to-br from-red-500 to-yellow-400'
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {feature.title}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
