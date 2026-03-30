import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || "" });

export interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export async function* streamAIChat(messages: Message[]) {
  try {
    const response = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: messages,
      config: {
        systemInstruction: "你是一个专业的英国留学生租房助手。请只回答与英国租房、公寓信息、城市生活相关的问题。如果用户提问与租房无关的问题，请礼貌地拒绝回复，并说明你只能回复租房相关的问题。",
      },
    });

    for await (const chunk of response) {
      yield chunk;
    }
  } catch (error) {
    console.error("AI Stream Error:", error);
    throw error;
  }
}
