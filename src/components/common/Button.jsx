import { twMerge } from "tailwind-merge";

function Button({ children, className }) {
  return (
    <button
      className={twMerge(
        "py-2.5 px-4 rounded-full text-sm font-medium bg-primary transition duration-200 hover:translate-x-1 scale-90 lg:scale-100",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;