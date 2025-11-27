import { Megaphone, Camera, Globe, BarChart } from 'lucide-react';

interface ServicesSectionProps {
  isDark: boolean;
}

export function ServicesSection({ isDark }: ServicesSectionProps) {
  const services = [
    {
      icon: Megaphone,
      title: 'Marketing Digital',
      description: 'Estratégias personalizadas para aumentar sua presença online e atrair mais clientes',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Camera,
      title: 'Produção de Conteúdo',
      description: 'Fotos, vídeos e materiais visuais que destacam o melhor do seu negócio',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: Globe,
      title: 'Presença Digital',
      description: 'Criação e gerenciamento de perfis em redes sociais e Google Meu Negócio',
      color: 'from-yellow-400 to-red-500',
    },
    {
      icon: BarChart,
      title: 'Análise de Resultados',
      description: 'Acompanhamento e relatórios para medir o crescimento do seu negócio',
      color: 'from-red-600 to-yellow-500',
    },
  ];

  return (
    <section id="servicos" className={`py-20 ${isDark ? 'bg-zinc-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-xl mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Nossos Serviços
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Soluções completas para dar visibilidade ao seu comércio local
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-xl ${
                  isDark ? 'bg-black border border-zinc-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div className={`inline-flex p-4 rounded-lg mb-4 bg-gradient-to-br ${service.color}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                  {service.title}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
