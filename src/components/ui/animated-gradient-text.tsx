import { cn } from "@/lib/utils";

type AnimatedGradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedGradientText = ({ children, className }: AnimatedGradientTextProps) => {
  return (
    <span
      className={cn(
        "animated-gradient bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};

export default AnimatedGradientText;
