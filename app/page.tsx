export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold">
          Igor Santos
        </h1>

        <p className="text-xl mt-4 text-gray-300">
          Desenvolvedor Backend Node.js | AWS Certified Cloud Practitioner
        </p>

        <section className="mt-10">
        <h2 className="text-3xl font-bold mb-2">
          Sobre
        </h2>

        <p className="text-gray-400 leading-8 max-w-3xl">
          Sou estudante de Sistemas de Informação e desenvolvedor backend
          com experiência em Node.js, NestJS e AWS.

          Tenho experiência prática no desenvolvimento de APIs REST,
          arquitetura backend e integração com serviços cloud,
          adquirida durante minha atuação na Compass UOL.

          Busco evoluir constantemente em computação em nuvem,
          microsserviços e desenvolvimento escalável.
        </p>
        </section>

        <div className="mt-10 flex gap-4">
          <a
            href="https://github.com/igorchl"
            target="_blank"
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-gray-600 px-5 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            LinkedIn
          </a>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 p-6 rounded-2xl hover:border-gray-500 transition">
              <h3 className="text-2xl font-semibold">
                API REST com NestJS
              </h3>

              <p className="mt-3 text-gray-400">
                API backend com autenticação JWT e PostgreSQL.
              </p>

              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-gray-900 px-3 py-1 rounded-lg text-sm">
                  NestJS
                </span>

                <span className="bg-gray-900 px-3 py-1 rounded-lg text-sm">
                  PostgreSQL
                </span>

                <span className="bg-gray-900 px-3 py-1 rounded-lg text-sm">
                  JWT
                </span>
              </div>
            </div>

            <div className="border border-gray-800 p-6 rounded-2xl hover:border-gray-500 transition">
              <h3 className="text-2xl font-semibold">
                Upload AWS S3
              </h3>

              <p className="mt-3 text-gray-400">
                Sistema de upload utilizando serviços AWS.
              </p>

              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-gray-900 px-3 py-1 rounded-lg text-sm">
                  AWS
                </span>

                <span className="bg-gray-900 px-3 py-1 rounded-lg text-sm">
                  S3
                </span>

                <span className="bg-gray-900 px-3 py-1 rounded-lg text-sm">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "Node.js",
              "NestJS",
              "AWS",
              "PostgreSQL",
              "Docker",
              "Git",
              "TypeScript",
              "REST APIs",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-gray-700 px-4 py-2 rounded-xl text-gray-300 hover:border-gray-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
