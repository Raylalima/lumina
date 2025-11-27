import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ContactSectionProps {
  isDark: boolean;
}

export function ContactSection({ isDark }: ContactSectionProps) {
  return (
    <section id="contato" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-xl mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Entre em Contato
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Vamos iluminar seu negócio juntos. Fale com nossa equipe!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className={`mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isDark 
                    ? 'bg-yellow-400/10 text-yellow-400' 
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className={`mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Telefone
                  </p>
                  <p className={isDark ? 'text-white' : 'text-black'}>
                    (11) 9 9999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isDark 
                    ? 'bg-yellow-400/10 text-yellow-400' 
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className={`mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Email
                  </p>
                  <p className={isDark ? 'text-white' : 'text-black'}>
                    luminaofiicial@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isDark 
                    ? 'bg-yellow-400/10 text-yellow-400' 
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className={`mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Endereço
                  </p>
                  <p className={isDark ? 'text-white' : 'text-black'}>
                    São Paulo, SP<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className={`mt-8 p-6 rounded-xl ${
              isDark ? 'bg-gradient-to-br from-yellow-400/10 to-red-500/10 border border-yellow-400/20' : 'bg-gradient-to-br from-red-50 to-yellow-50'
            }`}>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                Horário de Atendimento:<br />
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-xl ${
            isDark ? 'bg-zinc-900' : 'bg-gray-50'
          }`}>
            <form className="space-y-4">
              <div>
                <label className={`block mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Nome
                </label>
                <Input
                  placeholder="Seu nome"
                  className={isDark ? 'bg-black border-zinc-800 text-white' : ''}
                />
              </div>

              <div>
                <label className={`block mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className={isDark ? 'bg-black border-zinc-800 text-white' : ''}
                />
              </div>

              <div>
                <label className={`block mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Telefone
                </label>
                <Input
                  placeholder="(11) 9 9999-9999"
                  className={isDark ? 'bg-black border-zinc-800 text-white' : ''}
                />
              </div>

              <div>
                <label className={`block mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Mensagem
                </label>
                <Textarea
                  placeholder="Como podemos ajudar seu negócio?"
                  rows={5}
                  className={isDark ? 'bg-black border-zinc-800 text-white' : ''}
                />
              </div>

              <Button
                type="submit"
                className={`w-full ${
                  isDark 
                    ? 'bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-black' 
                    : 'bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 text-white'
                }`}
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
