
import { useState } from "react";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { LoadingDots } from "@/components/chat/LoadingDots";
import { sendMessage } from "@/services/api";
import { useToast } from "@/hooks/use-toast";

interface Message {
  content: string;
  role: "user" | "assistant";
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    try {
      const userMessage: Message = { content, role: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      const response = await sendMessage([...messages, userMessage]);
      
      const assistantMessage: Message = {
        content: response,
        role: "assistant",
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-chatbox-background">
      <main className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              content={message.content}
              role={message.role}
            />
          ))}
          {isLoading && (
            <div className="w-full py-8 px-4 bg-chatbox-ai">
              <div className="container max-w-4xl flex gap-6">
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <LoadingDots />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default Index;
