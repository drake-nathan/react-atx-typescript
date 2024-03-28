import { clsx } from "clsx";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Layout = ({
  children,
  className,
  ...rest
}: LayoutProps): React.JSX.Element => {
  return (
    <div className={clsx("w-full rounded border p-4", className)} {...rest}>
      {children}
    </div>
  );
};

export default Layout;
