import { db } from '@vercel/postgres';

export async function POST(request) {
  const { nimi, viesti, sposti, puhelin, yritys } = await request.json();

  if (!nimi || !viesti) {
    return new Response(
      JSON.stringify({ error: 'Nimi ja viesti are required.' }),
      { status: 400 }
    );
  }

  try {
    const client = await db.connect();
    
    await client.sql`
      CREATE TABLE IF NOT EXISTS Viestit (
        Nimi varchar(100),
        Yritys varchar(100),
        Sposti varchar(100),
        Puhelin varchar(20),
        Viesti varchar(500)
      );
    `;
    
    await client.sql`
      INSERT INTO Viestit (Nimi, Yritys, Sposti, Puhelin, Viesti)
      VALUES (${nimi}, ${yritys}, ${sposti}, ${puhelin}, ${viesti});
    `;
    
    return new Response(
      JSON.stringify({ success: `Message from ${nimi} received and saved!` }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Failed to save message: ${error.message}` }),
      { status: 500 }
    );
  }
}

export async function GET() {
  return new Response('This API only accepts POST requests.', { status: 405 });
}
