interface Props {
  standart?: number;
  comfort?: number;
  bussniss?: number;
  arr: any;
}

const Header = ({ arr = [] }: Props) => {
  return (
    <div className={`grid grid-cols-3 bg-white p-3 border-b`}>
      {Object.values(arr).map(
        (item: any) =>
          item.name && (
            <p
              key={item.slug}
              className="text-xs font-medium text-[#475467] flex items-center gap-2"
            >
              {item.name}{" "}
              <span className="bg-[var(--lineGray)] h-6 w-6 grid place-items-center items-center rounded-full text-[var(--black)]">
                {item?.data?.length}
              </span>
            </p>
          )
      )}
    </div>
  );
};

export default Header;
