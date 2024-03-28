import { clsx } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded border px-2 py-1 hover:bg-gray-700 active:bg-slate-600",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
