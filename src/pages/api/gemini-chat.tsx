import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { question } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  const geminiRes = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: question }] }],
    }),
  }
);
  const data = await geminiRes.json();
console.log("Gemini response:", JSON.stringify(data, null, 2)); // Log đầy đủ

const answer =
  data?.candidates?.[0]?.content?.parts?.[0]?.text ||
  data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data ||
  "No answer.";

res.status(200).json({ answer });
}