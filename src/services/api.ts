
interface Message {
  content: string;
  role: "user" | "assistant";
}

export const sendMessage = async (messages: Message[]): Promise<string> => {
  try {
    const response = await fetch("https://api.blackbox.ai/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        model: "deepseek-ai/DeepSeek-V3",
        max_tokens: "1024",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
