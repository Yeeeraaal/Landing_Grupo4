import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { codigo } = await req.json()

    // Lógica para analizar el código Python recibido
    // Aquí puedes conectar la API Key de OpenAI / Anthropic / Gemini si lo deseas
    
    const preguntasSimuladas = [
      {
        pregunta: "¿Por qué decidiste usar esta estructura de datos específica en tu solución?",
        contexto: "Líneas de declaración principales"
      },
      {
        pregunta: "¿Qué pasaría con la ejecución de tu función si el argumento de entrada es nulo (None) o está vacío?",
        contexto: "Manejo de excepciones o retornos"
      },
      {
        pregunta: "¿Cuál es la complejidad temporal (Big O) del bucle o lógica principal que generaste?",
        contexto: "Rendimiento y eficiencia del código"
      }
    ]

    return NextResponse.json({ preguntas: preguntasSimuladas })
  } catch (error) {
    return NextResponse.json({ error: 'Error procesando el código' }, { status: 500 })
  }
}