export default function LandingPageContatos() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div>
              <span className="px-5 py-2 rounded-full bg-indigo-500/20 border border-indigo-400 text-indigo-200 text-sm shadow-lg">
                Ciência • Tecnologia • Astronomia • IA
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                Raylla
                <span className="block text-indigo-400">Vardiero</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Pesquisadora Júnior, estudante de Engenharia da Computação,
                Física e Matemática. Desenvolvendo projetos em robótica,
                inteligência artificial, astronomia e computação científica.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-500 hover:bg-indigo-400 transition-all duration-300 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105">
                Entrar em Contato
              </button>

              <button className="border border-slate-600 hover:border-pink-400 hover:bg-pink-500/10 transition-all duration-300 px-8 py-4 rounded-2xl font-bold hover:scale-105">
                Ver Projetos
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/10 text-center">
                <h3 className="text-3xl font-bold text-indigo-300">Ebook</h3>
                <p className="text-slate-300 text-sm">Meu ebook</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/10 text-center">
                <h3 className="text-3xl font-bold text-pink-300">Pesquisas</h3>
                <p className="text-slate-300 text-sm">Projetos, artigos</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/10 text-center">
                <h3 className="text-3xl font-bold text-cyan-300">Olimpíada</h3>
                <p className="text-slate-300 text-sm">Medalhas</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
              <img src="/minha-foto.jpg" alt="Minha Foto"  className="w-20 h-20 rounded-full object-cover"/>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Meus Contatos
                  </h2>
                  <p className="text-slate-300">
                    Networking acadêmico e tecnológico
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700 hover:border-indigo-400 transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-sm text-slate-400">E-mail</p>
                  <p className="text-lg font-semibold">ravardiero497@gmail.com</p>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700 hover:border-pink-400 transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="text-lg font-semibold">linkedin.com/in/seuperfil</p>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="text-lg font-semibold">github.com/Raylla1610</p>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-sm text-slate-400">Instagram</p>
                  <p className="text-lg font-semibold">raylla.exatas
</p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-white/10 rounded-2xl p-5">
                <p className="text-slate-200 leading-relaxed">
                  “A ciência move o mundo. A tecnologia transforma o futuro.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
