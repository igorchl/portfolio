export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="max-w-4xl mx-auto">

        {/* HERO */}
        <section>
          <h1 className="text-6xl font-bold tracking-tight">
            Igor Santos
          </h1>

          <p className="text-xl mt-5 text-gray-300">
            Desenvolvedor Backend Node.js | AWS Certified Cloud Practitioner
          </p>

          <p className="mt-3 text-gray-500">
            Node.js • NestJS • AWS • REST APIs
          </p>
        </section>

        {/* SOBRE */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-5">
            Sobre
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            Sou estudante de Sistemas de Informação e desenvolvedor backend
            com experiência em Node.js, NestJS e AWS.

            Tenho experiência prática no desenvolvimento de APIs REST,
            arquitetura backend e integração com serviços cloud,
            adquirida durante minha atuação na Compass UOL.

            Busco evoluir constantemente em computação em nuvem,
            desenvolvimento backend e arquitetura escalável.
          </p>
        </section>

        {/* BOTÕES */}
        <div className="mt-10 flex gap-4">
          <a
            href="https://github.com/igorchl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/igor-de-sousa-santos-9b940331a/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-900 transition duration-300"
          >
            LinkedIn
          </a>
        </div>

        {/* PROJETO PRINCIPAL */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">
            Projeto Principal
          </h2>

          <a
            href="https://github.com/igorchl/Physical-Store-Project-2"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-800 rounded-3xl p-8 hover:border-gray-500 hover:-translate-y-1 transition duration-300"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-4xl font-bold">
                Physical Store System
              </h3>

              <span className="text-sm text-gray-500">
                Backend Project
              </span>
            </div>

            <p className="mt-6 text-gray-400 leading-8 text-lg">
              Sistema backend para gerenciamento de loja física
              desenvolvido com NestJS e TypeORM.

              O projeto inclui CRUD completo de produtos,
              documentação com Swagger, integração com banco SQLite,
              testes automatizados e arquitetura modular seguindo
              boas práticas de desenvolvimento backend.
            </p>

            {/* TECHS */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Node.js",
                "NestJS",
                "TypeScript",
                "SQLite",
                "TypeORM",
                "Swagger",
                "Jest",
                "REST API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* FEATURES */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-5">
                Features
              </h4>

              <div className="grid md:grid-cols-2 gap-4 text-gray-400">
                <div>✓ CRUD de Produtos</div>
                <div>✓ Swagger Documentation</div>
                <div>✓ SQLite Database</div>
                <div>✓ TypeORM Integration</div>
                <div>✓ REST APIs</div>
                <div>✓ Arquitetura Modular</div>
                <div>✓ Testes com Jest</div>
                <div>✓ Estrutura escalável com NestJS</div>
              </div>
            </div>

            <p className="mt-10 text-sm text-gray-500">
              Clique para visualizar o repositório no GitHub →
            </p>
          </a>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">
            Experiência
          </h2>

          <a
            href="/compass-certificado.png"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-800 rounded-2xl p-6 hover:border-gray-500 hover:-translate-y-1 transition duration-300"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-2xl font-semibold">
                Compass UOL
              </h3>

              <span className="text-sm text-gray-500">
                Backend & Cloud Journey
              </span>
            </div>

            <p className="mt-5 text-gray-400 leading-8">
              Experiência prática em desenvolvimento backend,
              APIs REST e computação em nuvem utilizando AWS.

              Atuação em projetos com foco em Node.js,
              arquitetura backend, boas práticas de desenvolvimento
              e integração com serviços cloud.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Node.js",
                "AWS",
                "REST APIs",
                "Backend",
                "Cloud",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Clique para visualizar o certificado →
            </p>
          </a>
        </section>

        {/* SKILLS */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "Node.js",
              "NestJS",
              "AWS",
              "TypeScript",
              "SQLite",
              "TypeORM",
              "Swagger",
              "Git",
              "REST APIs",
              "Jest",
              "Cloud Computing",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-gray-700 px-5 py-3 rounded-xl text-gray-300 hover:border-gray-400 hover:bg-gray-900 transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* CERTIFICAÇÕES */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">
            Certificações
          </h2>

          <a
            href="https://www.credly.com/badges/5970ea01-9a97-4420-82df-17d37da7bf01/linked_in?t=swcu6n"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-800 rounded-2xl p-6 hover:border-gray-500 hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-2xl font-semibold">
              AWS Certified Cloud Practitioner
            </h3>

            <p className="mt-4 text-gray-400 leading-8">
              Certificação focada em fundamentos de computação em nuvem,
              serviços AWS, arquitetura cloud e boas práticas.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "AWS",
                "Cloud Computing",
                "Cloud Architecture",
              ].map((cert) => (
                <span
                  key={cert}
                  className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl text-sm text-gray-300"
                >
                  {cert}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Clique para visualizar a certificação →
            </p>
          </a>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-gray-800 pt-8 text-gray-500 text-sm flex justify-between flex-wrap gap-4">
          <p>© 2025 Igor Santos</p>

          <p>Backend Developer • Node.js • AWS</p>
        </footer>

      </section>
    </main>
  );
}