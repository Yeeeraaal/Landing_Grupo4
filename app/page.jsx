import Link from 'next/link'
import { ShieldCheck, AlertTriangle, CheckCircle2, Terminal, HelpCircle, ArrowRight, Star } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
      
      {/* MÓDULO 1 & 2: Claridad del mensaje + Hero + Grunt Test (5 segundos) */}
      <section className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> Grupo 4 - IA para Programación
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          Pega tu código Python generado con IA y <span className="text-blue-500">asegura tu sustentación</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Simula en minutos las preguntas que te hará tu profesor o monitor sobre el código que copiaste o generaste. Evita quedarte en blanco y demuestra que dominas lo que entregas.
        </p>

        {/* Llamada a la Acción (CTA Visible) */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/simulador" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition">
            Simular mi código ahora <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* MÓDULO 3: Elementos del Recorrido - ¿Qué se arriesga? vs ¿Qué resultado da actuar? */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Riesgo de no actuar */}
        <div className="bg-slate-900/60 border border-red-900/40 p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-red-400 font-bold text-xl">
            <AlertTriangle className="w-6 h-6" /> Si entregas sin verificar...
          </div>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex gap-2">❌ <strong>Te quedas en silencio:</strong> Te preguntan por una línea específica de tu código y no sabes responder.</li>
            <li className="flex gap-2">❌ <strong>Dudas de tu capacidad:</strong> Sientes pánico de que descubran que dependiste de ChatGPT o Copilot.</li>
            <li className="flex gap-2">❌ <strong>Pierdes la nota:</strong> Un código que corre pero no sabes defender equivale a una sustentación reprobada.</li>
          </ul>
        </div>

        {/* Resultado de actuar */}
        <div className="bg-slate-900/60 border border-green-900/40 p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-green-400 font-bold text-xl">
            <CheckCircle2 className="w-6 h-6" /> Con PyDefense...
          </div>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex gap-2">✅ <strong>Anticipas las preguntas:</strong> El simulador genera exactamente los cuestionamientos que hará un evaluador.</li>
            <li className="flex gap-2">✅ <strong>Dominas tu propia entrega:</strong> Entiendes el razonamiento tras cada función o algoritmo.</li>
            <li className="flex gap-2">✅ <strong>Sustentas con calma:</strong> Demuestras criterio técnico y total control ante la audiencia.</li>
          </ul>
        </div>
      </section>

      {/* MÓDULO 3: Plan de 3 pasos simples */}
      <section className="space-y-12 text-center">
        <h2 className="text-3xl font-bold">Un plan de 3 pasos para preparar tu sustentación</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold rounded-lg border border-blue-500/30">1</div>
            <h3 className="font-bold text-lg text-white">Pega tu código Python</h3>
            <p className="text-slate-400 text-sm">Copia el fragmento o script que generaste con IA para tu entrega académica o técnica.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold rounded-lg border border-blue-500/30">2</div>
            <h3 className="font-bold text-lg text-white">Responde la simulación</h3>
            <p className="text-slate-400 text-sm">El sistema detecta las partes clave de tu código y simula preguntas de nivel conceptual y técnico.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold rounded-lg border border-blue-500/30">3</div>
            <h3 className="font-bold text-lg text-white">Revisa la retroalimentación</h3>
            <p className="text-slate-400 text-sm">Descubre qué vacíos tienes antes de la presentación real y ajústalos con explicaciones claras.</p>
          </div>
        </div>
      </section>

      {/* MÓDULO 4: Señales de Confianza + Testimonios */}
      <section className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Lo que dicen los estudiantes que ya lo probaron</h2>
          <p className="text-slate-400 text-sm">+50 sustentaciones simuladas con éxito en pruebas universitarias[cite: 5, 12]</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div className="flex gap-1 text-yellow-500"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
            <p className="text-slate-300 text-sm italic">"Copie una solución compleja que me dio ChatGPT para mi entrega de Python. PyDefense me hizo 3 preguntas que literalmente me hizo el monitor en clase."</p>
            <p className="text-xs text-slate-500 font-semibold">— Daniel R., Estudiante de Ingeniería</p>
          </div>
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div className="flex gap-1 text-yellow-500"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
            <p className="text-slate-300 text-sm italic">"Me sirvió mucho para darme cuenta de que no sabía por qué la IA había usado un lambda en vez de un for tradicional."</p>
            <p className="text-xs text-slate-500 font-semibold">— Joseph S., Estudiante de Sistemas</p>
          </div>
        </div>
      </section>

      {/* MÓDULO 4: Pie de página con información secundaria */}
      <footer className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <div>
          © 2026 PyDefense - Entrega 3 (Grupo 4) | Área IA para Programación
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300">Términos</a>
          <a href="#" className="hover:text-slate-300">Privacidad</a>
          <a href="#" className="hover:text-slate-300">Soporte</a>
        </div>
      </footer>

    </main>
  )
}