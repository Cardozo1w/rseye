import { NextResponse } from "next/server";

export async function OPTIONS() {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  
  export async function POST(req) {
    console.log('Headers:', req.headers);
    console.log('Request Method:', req.method);
  
    try {
      const body = await req.json();
      console.log('Body:', body);
      return NextResponse.json({ message: 'Funciona correctamente' });
    } catch (error) {
      console.error('Error leyendo el cuerpo:', error);
      return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
  }
  