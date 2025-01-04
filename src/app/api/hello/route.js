import { db } from '@vercel/postgres';

export async function GET() {
  if (req.method === 'POST') {
    const { nimi, viesti, sposti, puhelin, yritys } = req.body; // Extract name and message from the request body

    if (!nimi || !viesti ) {
      res.status(400).json({ error: 'Nimi ja viesti are required.' });
      return;
    }

    // Process the data (e.g., save to database, send an email, etc.)
    res.status(200).json({ success: `Message from ${nimi} received!` });
  } else {
    // Only allow POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
