import { NextResponse } from 'next/server';
import { createClient } from '@/src/utils/supabase/client';

export async function POST(request: Request) {

  const supabase = createClient();

  // Obtener el token de autenticación del encabezado de la solicitud
  // const token = request.headers.get('Authorization')?.replace('Bearer ', '');

  // // Verificar el token y obtener el usuario
  // const { data: { user }, error: authError } = await supabase.auth.getUser(token);

  // // Si el usuario no está autenticado o hubo un error en la verificación
  // if (authError || !user) {
  //   return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  // }

  // Obtener los datos enviados en la solicitud POST
  const { name, address, phone } = await request.json();

  // Insertion in the Supabase table 'companies'.
  if (!name || !address || !phone) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Insertion in the Supabase table 'companies'.
  const { data, error } = await supabase
    .from('companies')
    .insert([
      {
        name,
        address,
        phone
      }
    ])
    .select();

  // Error handling
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Respond with the inserted data
  return NextResponse.json({ data }, { status: 200 });
}
