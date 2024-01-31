const Header = () => {
  return (
    <div className="flex justify-between h-[60px] items-center px-5">
      <p className="text-[var(--error)] font-medium">1 Mart, 2021 - 31 Mart, 2021</p>

      <div className="flex space-x-[30px] font-medium">
        <p className="flex items-center">
          Yangi haydovchilar
          <div className="w-[8px] h-[8px] bg-[var(--darkerGreen)] rounded-full ml-1"></div>
        </p>
        <p className="flex items-center">

          Yangi yo‘lovchilar
          <div className="w-[8px] h-[8px] bg-[var(--error)] rounded-full ml-1"></div>
        </p>
        <p className="flex items-center">
          Yangi marshrutlar
          <div className="w-[8px] h-[8px] bg-[var(--blue)] rounded-full ml-1"></div>
        </p>
      </div>
    </div>
  );
};

export default Header;
