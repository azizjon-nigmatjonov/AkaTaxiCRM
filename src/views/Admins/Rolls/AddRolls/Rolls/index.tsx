interface Props {
  text: string;
  children?: any;
}

const Rolls = ({ text, children }: Props) => {
  return (
    <div className="flex items-start gap-8 py-6">
      <p className="text-sm text-[var(--gray70)] font-medium w-[280px]">{text}</p>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Rolls;
