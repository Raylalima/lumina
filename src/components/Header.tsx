import { Moon, Sun, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  scrollToSection: (id: string) => void;
}

export function Header({ isDark, toggleTheme, scrollToSection }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 ${isDark ? 'bg-black' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-2 rounded-lg">
              <Lightbulb className="w-6 h-6 text-black" />
            </div>
            <span className={`${isDark ? 'text-white' : 'text-black'}`}>
              Lumina 
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`${isDark ? 'text-white hover:text-yellow-400' : 'text-black hover:text-red-500'} transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className={`${isDark ? 'text-white hover:text-yellow-400' : 'text-black hover:text-red-500'} transition-colors`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('comercios')}
              className={`${isDark ? 'text-white hover:text-yellow-400' : 'text-black hover:text-red-500'} transition-colors`}
            >
              Comércios
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className={`${isDark ? 'text-white hover:text-yellow-400' : 'text-black hover:text-red-500'} transition-colors`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className={`${isDark ? 'text-white hover:text-yellow-400' : 'text-black hover:text-red-500'} transition-colors`}
            >
              Contato
            </button>
          </nav>

          {/* Theme Toggle */}
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className={`${isDark ? 'border-yellow-400 hover:bg-yellow-400/10' : 'border-red-500 hover:bg-red-500/10'}`}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-red-500" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
