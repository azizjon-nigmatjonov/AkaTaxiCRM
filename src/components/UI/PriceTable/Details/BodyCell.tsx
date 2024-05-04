export const BodyCell = ({
  edit = false,
  type = "",
}: {
  edit?: boolean;
  type: string;
  element: any;
}) => {
  if (type === "cell") {
    return (
      <div className="cell">
        <p>Tuman nomi</p>
      </div>
    );
  }

  return (
    <div className="cell flex justify-between">
      {edit ? <input /> : <p>420</p>}
      <p className="text-[var(--gray60)]">300</p>
    </div>
  );
};
