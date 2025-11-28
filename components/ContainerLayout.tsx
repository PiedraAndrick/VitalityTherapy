type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={` mx-auto w-full max-w-full px-2 sm:px-0 lg:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
