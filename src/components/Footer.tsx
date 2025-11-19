import { Lightbulb, Instagram, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
  scrollToSection: (id: string) => void;
}

export function Footer({ isDark, scrollToSection }: FooterProps) {
  return (
    <footer className={`${isDark ? 'bg-zinc-900 border-t border-zinc-800' : 'bg-gray-100 border-t border-gray-200'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-2 rounded-lg">
                <Lightbulb className="w-6 h-6 text-black" />
              </div>
              <span className={isDark ? 'text-white' : 'text-black'}>
                Lumina 
              </span>
            </div>
            <p className={`mb-4 max-w-md ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Iluminando negócios locais e conectando comunidades. 
              Especialistas em dar visibilidade a comércios que merecem destaque.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className={`p-2 rounded-lg ${
                  isDark 
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-yellow-400' 
                    : 'bg-white hover:bg-gray-50 text-red-500'
                } transition-colors`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg ${
                  isDark 
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-yellow-400' 
                    : 'bg-white hover:bg-gray-50 text-red-500'
                } transition-colors`}
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@luminacomunicacao.com"
                className={`p-2 rounded-lg ${
                  isDark 
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-yellow-400' 
                    : 'bg-white hover:bg-gray-50 text-red-500'
                } transition-colors`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-red-500'} transition-colors`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-red-500'} transition-colors`}
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('comercios')}
                  className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-red-500'} transition-colors`}
                >
                  Comércios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-red-500'} transition-colors`}
                >
                  Serviços
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Contato
            </h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>São Paulo, SP</li>
              <li>(11) 9 9999-9999</li>
              <li>luminaofiicial@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t ${isDark ? 'border-zinc-800' : 'border-gray-200'} text-center`}>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Lumina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
