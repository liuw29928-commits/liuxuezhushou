const API_KEY = import.meta.env.VITE_AIHUBMIX_API_KEY;
const API_URL = "https://aihubmix.com/v1/chat/completions";

export interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export async function* streamAIChat(messages: Message[]) {
  const formattedMessages = [
    {
      role: "system",
      content: "你是一个专业的英国留学生租房助手。请只回答与英国租房、公寓信息、城市生活相关的问题。如果用户提问与租房无关的问题，请礼貌地拒绝回复，并说明你只能回复租房相关的问题。",
    },
    ...messages.map((m) => ({
      role: m.role === "model" ? "assistant" : "user",
      content: m.parts.map((p) => p.text).join(""),
    })),
  ];

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gemini-2.0-flash",
      messages: formattedMessages,
      stream: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk.split("\n").filter((line) => line.startsWith("data: "));

    for (const line of lines) {
      const data = line.slice(6);
      if (data === "[DONE]") return;
      try {
        const json = JSON.parse(data);
        const text = json.choices?.[0]?.delta?.content;
        if (text) yield text;
      } catch {
        // skip malformed chunks
      }
    }
  }
}
