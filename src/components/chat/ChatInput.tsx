
import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full border-t bg-white p-4">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
            disabled={disabled}
          />
          <button
            type="submit"
            disabled={disabled || !input.trim()}
            className="p-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <SendHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </form>
  );
};
