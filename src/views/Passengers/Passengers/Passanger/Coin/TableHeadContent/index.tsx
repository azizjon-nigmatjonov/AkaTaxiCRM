interface Props {
  title: string;
  text: string;
}

export const TableHeadContent = ({ title, text }: Props) => {
  return (
    <>
      <h2 className="text-[var(--gray90)] text-lg font-[600]">{title}</h2>
      <p className="text-[var(--gray60)] mt-2px">{text}</p>
    </>
  );
};
