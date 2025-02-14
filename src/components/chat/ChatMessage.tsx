
import { cn } from "@/lib/utils";
import { User, Bot } from "lucide-react";

interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
}

export const ChatMessage = ({ content, role }: ChatMessageProps) => {
  const isUser = role === "user";
  
  return (
    <div className={cn(
      "w-full py-8 px-4 flex animate-fade-in",
      isUser ? "bg-chatbox-user" : "bg-chatbox-ai"
    )}>
      <div className="container max-w-4xl flex gap-6">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
          isUser ? "bg-gray-300" : "bg-teal-500"
        )}>
          {isUser ? <User className="w-5 h-5 text-gray-700" /> : <Bot className="w-5 h-5 text-white" />}
        </div>
        <div className="flex-1 space-y-2">
          <p className="font-medium text-sm text-gray-500">
            {isUser ? "You" : "Assistant"}
          </p>
          <div className="prose prose-sm max-w-none">
            <p className="whitespace-pre-wrap">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
