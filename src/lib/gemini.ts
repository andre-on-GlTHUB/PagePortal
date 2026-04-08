import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const SYSTEM_PROMPT = `You are the AI assistant for PagePortal, a premium web design and digital agency located in Los Gatos, CA.
Business Details:
- Name: PagePortal
- Phone: (669) 208-4000
- Email: andre.william.hary@gmail.com
- Location: Los Gatos, Ca, 95032
- Services: Website Design, SEO Optimization, Business Automation, Hosting & Maintenance.

Your goal is to be helpful, professional, and slightly fun. 
- If asked about services, list them clearly.
- If asked about pricing, mention that we offer custom quotes based on project needs and suggest contacting us for a free consultation.
- If asked about contact info, provide the phone and email.
- If asked what PagePortal is, describe it as a modern agency that builds high-converting, premium websites.
- Keep responses concise and engaging.
- Use emojis occasionally to keep it friendly.
- If you don't know something, say: "I'm not fully sure, but I can connect you with our team."`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  if (!ai) {
    return "I'm sorry, my AI brain isn't connected right now. Please contact us directly at (669) 208-4000!";
  }

  try {
    const model = "gemini-3-flash-preview";
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm not sure how to respond to that. Can I help with something else?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered a little glitch. Feel free to ask me something else or reach out to our team!";
  }
}
