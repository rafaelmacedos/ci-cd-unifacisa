import Logo from './Logo';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-unifacisa-primary text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4 bg-white w-24 h-24 rounded-full flex items-center justify-center p-2">
              <Logo size="medium" />
            </div>
            <p className="text-unifacisa-gray-300 mb-4">
              Centro Universitário de referência em tecnologia, inovação e empreendedorismo
              no Norte-Nordeste brasileiro.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-unifacisa-gray-400 hover:text-unifacisa-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-unifacisa-gray-400 hover:text-unifacisa-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-unifacisa-gray-400 hover:text-unifacisa-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-unifacisa-accent">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#historia" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#estatisticas" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Estatísticas
                </a>
              </li>
              <li>
                <a href="#contato" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Vestibular
                </a>
              </li>
              <li>
                <a href="#" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Portal do Aluno
                </a>
              </li>
            </ul>
          </div>

          {/* Cursos */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-unifacisa-accent">Cursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Sistemas de Informação
                </a>
              </li>
              <li>
                <a href="#" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Análise e Desenvolvimento de Sistemas
                </a>
              </li>
              <li>
                <a href="#" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Inteligência Artificial
                </a>
              </li>
              <li>
                <a href="#" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Pós-Graduação
                </a>
              </li>
              <li>
                <a href="#" className="text-unifacisa-gray-300 hover:text-unifacisa-accent transition-colors">
                  Cursos Técnicos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-unifacisa-accent">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-unifacisa-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-unifacisa-gray-300 text-sm">
                    Av. Senador Argemiro de Figueiredo, 1901
                  </p>
                  <p className="text-unifacisa-gray-300 text-sm">
                    José Pinheiro - Campina Grande/PB
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-unifacisa-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-unifacisa-gray-300 text-sm">(83) 2101-8888</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-unifacisa-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-unifacisa-gray-300 text-sm">contato@unifacisa.edu.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-unifacisa-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-unifacisa-gray-400">
                © {currentYear} Unifacisa - Centro Universitário. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-unifacisa-gray-400 hover:text-unifacisa-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-unifacisa-gray-400 hover:text-unifacisa-accent transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-unifacisa-gray-400 hover:text-unifacisa-accent transition-colors">
                Mapa do Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
