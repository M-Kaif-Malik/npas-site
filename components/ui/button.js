import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-[#A16EFF] text-white hover:bg-[#8B5CF6] shadow-lg",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-[#A16EFF] bg-transparent text-[#A16EFF] hover:bg-[#A16EFF] hover:text-white",
    secondary: "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]",
    ghost: "hover:bg-[#2A2A2A] hover:text-white text-gray-400",
    link: "text-[#A16EFF] underline-offset-4 hover:underline",
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };

