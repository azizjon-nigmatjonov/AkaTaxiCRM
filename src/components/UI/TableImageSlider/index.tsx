export const TableImageSlider = ({ list = [] }: { list: any }) => {
  return list.map((item: any, index: number) => (
    <div
      key={index}
      className="w-[40px] h-[40px] border-2 border-[var(--gray20)] rounded-full"
    >
      <div className="w-[40px] h-[40px]">
        <img
          className="w-full h-full rounded-full object-cover"
          src={item.image}
          alt={item.full_name}
        />
      </div>
    </div>
  ));
};
