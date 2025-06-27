// api/send.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { chat_id, text } = req.body;

  const botToken = '7450969594:AAHi7YegqrvmddpqgrZq_J5-5lOGlrCs0L0';

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id, text }),
    });

    const result = await telegramResponse.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
