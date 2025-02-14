
export const LoadingDots = () => {
  return (
    <div className="flex space-x-2 p-4">
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce-loader" style={{ animationDelay: "0s" }} />
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce-loader" style={{ animationDelay: "0.2s" }} />
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce-loader" style={{ animationDelay: "0.4s" }} />
    </div>
  );
};
