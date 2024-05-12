export const BodyCell = ({
  edit = false,
  type = "",
  district,
  column,
}: {
  edit?: boolean;
  type: string;
  district: any;
  column: any;
}) => {
  if (type === "cell") {
    return (
      <div className="cell">
        <p>{district[column.id]}</p>
      </div>
    );
  }

  return (
    <div className="cell flex justify-between">
      {edit ? (
        <input />
      ) : (
        <p>
          {column.render
            ? Array.isArray(column.id)
              ? column.render(column.id.map((data: any) => district[data]))
              : column.render(district[column.id], district)
            : district[column.id]}
        </p>
      )}
      <p className="text-[var(--gray60)]">122</p>
    </div>
  );
};
