const SMS = ({
  element = {},
  left = false,
}: {
  element?: any;
  left?: boolean;
}) => {
  return (
    <div className={`relative inline-bloc`}>
      {/* <div className="border border-[var(--lineGray)] w-[30px] h-[30px] rounded-full flex items-center justify-center absolute left-[-15px] top-[8px] bg-white">
        {curr == 2 ? (
          <img className="w-full h-full" src={""} alt={"img"} />
        ) : (
          <UserIcon />
        )}
      </div> */}
      {!left && <span className="mr-3 text-[var(--gray)]">08:00</span>}
      <div
        className={`bg-white border border-[var(--lineGray)] rounded-[14px] px-5 py-3 inline-block  ${
          left ? "bg-white" : "bg-[#E2E2EA]"
        }`}
      >
        {element.text}
      </div>
      {left && <span className="ml-3 text-[var(--gray)]">08:00</span>}
    </div>
  );
};

export default SMS;
