import Navigation from './components/Navigation';
import SmoothScroll from './components/SmoothScroll';
import Logo from './components/Logo';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SmoothScroll />
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-primary text-white py-32 pt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8 mt-8">
            <Logo size="medium" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            História do Curso de
            <span className="block text-unifacisa-accent">Sistemas de Informação</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Uma trajetória de excelência e inovação desde 2004
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white text-unifacisa-primary px-4 py-2 rounded-full font-semibold">
              Conceito Máximo ENADE
            </span>
            <span className="bg-unifacisa-accent text-white px-4 py-2 rounded-full font-semibold">
              Reconhecimento MEC
            </span>
            <span className="bg-white text-unifacisa-primary px-4 py-2 rounded-full font-semibold">
              100% Empregabilidade
            </span>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="historia" className="py-16 bg-unifacisa-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-unifacisa-primary mb-12">
            Nossa História
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* 1999 - Fundação */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 text-center md:text-right md:pr-8 mb-6 md:mb-0">
                <div className="bg-unifacisa-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto md:ml-auto font-bold text-xl">
                  1999
                </div>
                <h3 className="text-xl font-bold text-unifacisa-primary mt-4">Fundação da Instituição</h3>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md border-l-4 border-unifacisa-primary hover-lift">
                <p className="text-unifacisa-gray-800">
                  O Centro Universitário Unifacisa foi fundado em Campina Grande (PB),
                  consolidando-se como referência em tecnologia, inovação e empreendedorismo
                  no Norte-Nordeste brasileiro.
                </p>
              </div>
            </div>

            {/* 2004 - Início do Curso */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-12">
              <div className="md:w-1/3 text-center md:text-left md:pl-8 mb-6 md:mb-0">
                <div className="bg-unifacisa-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto md:mr-auto font-bold text-xl">
                  2004
                </div>
                <h3 className="text-xl font-bold text-unifacisa-accent mt-4">Início do Curso</h3>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md border-l-4 border-unifacisa-accent hover-lift">
                <p className="text-unifacisa-gray-800">
                  A Unifacisa inaugurou a graduação em Sistemas de Informação,
                  oferta pioneira na região voltada à formação de profissionais
                  capazes de projetar, implementar e gerenciar soluções de TI.
                </p>
              </div>
            </div>

            {/* 2011 - Reconhecimento MEC */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 text-center md:text-right md:pr-8 mb-6 md:mb-0">
                <div className="bg-unifacisa-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto md:ml-auto font-bold text-xl">
                  2011
                </div>
                <h3 className="text-xl font-bold text-unifacisa-primary mt-4">Reconhecimento MEC</h3>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md border-l-4 border-unifacisa-primary hover-lift">
                <p className="text-unifacisa-gray-800">
                  O curso obteve reconhecimento oficial do Ministério da Educação (MEC),
                  conferindo validade nacional ao diploma e consolidando sua qualidade acadêmica.
                </p>
              </div>
            </div>

            {/* 2023 - Atualização Curricular */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-12">
              <div className="md:w-1/3 text-center md:text-left md:pl-8 mb-6 md:mb-0">
                <div className="bg-blue-500 rounded-full text-white w-16 h-16 flex items-center justify-center mx-auto md:mr-auto font-bold text-xl">
                  2023
                </div>
                <h3 className="text-xl font-bold text-blue-500 mt-4">Nova Matriz Curricular</h3>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md border-l-4 border-unifacisa-secondary hover-lift">
                <p className="text-unifacisa-gray-800">
                  Atualização da matriz curricular com 32 competências profissionais
                  distribuídas em níveis básico, intermediário e avançado, além de
                  disciplinas institucionais, estágios supervisionados e TCC.
                </p>
              </div>
            </div>

            {/* 2024-2025 - Destaques Recentes */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 text-center md:text-right md:pr-8 mb-6 md:mb-0">
                <div className="bg-unifacisa-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto md:ml-auto font-bold text-xl">
                  2025
                </div>
                <h3 className="text-xl font-bold text-unifacisa-accent mt-4">Excelência Contínua</h3>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md border-l-4 border-unifacisa-accent hover-lift">
                <p className="text-unifacisa-gray-800">
                  Estudantes conquistam vagas em grandes empresas de tecnologia,
                  mantendo conceito máximo no MEC e posicionando a Unifacisa entre
                  os 5% das melhores instituições de ensino superior do Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-unifacisa-primary mb-12">
            Nossos Diferenciais
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Metodologia */}
            <div className="gradient-primary text-white p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Metodologia Inovadora</h3>
              <p className="opacity-90">
                Metodologia centrada em competências, estruturada em módulos que
                combinam teoria e prática através de projetos integradores.
              </p>
            </div>

            {/* Infraestrutura */}
            <div className="bg-white border-2 border-unifacisa-primary text-unifacisa-primary p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-unifacisa-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Infraestrutura Completa</h3>
              <p className="text-unifacisa-gray-700">
                Laboratórios de informática, data center, ambientes de rede e
                salas equipadas com recursos multimídia de última geração.
              </p>
            </div>

            {/* Corpo Docente */}
            <div className="gradient-secondary text-white p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Corpo Docente Qualificado</h3>
              <p className="opacity-90">
                Mais de 440 professores, entre doutores, mestres e especialistas,
                com vasta experiência no mercado de tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas Section */}
      <section id="estatisticas" className="py-16 bg-unifacisa-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Números que Impressionam
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-unifacisa-accent mb-2">20+</div>
              <p className="text-lg text-white">Anos de Excelência</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-unifacisa-accent mb-2">100%</div>
              <p className="text-lg text-white">Empregabilidade</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-unifacisa-accent mb-2">5%</div>
              <p className="text-lg text-white">Melhores do Brasil</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-unifacisa-accent mb-2">440+</div>
              <p className="text-lg text-white">Professores Qualificados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-unifacisa-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-unifacisa-primary mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-unifacisa-gray-700 mb-8 max-w-2xl mx-auto">
            Junte-se a uma das melhores instituições de ensino superior do Brasil
            e construa seu futuro na tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-unifacisa-primary hover:bg-unifacisa-secondary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Saiba Mais
            </button>
            <button className="bg-white text-unifacisa-primary hover:bg-unifacisa-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300 border-2 border-unifacisa-primary">
              Inscreva-se
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
