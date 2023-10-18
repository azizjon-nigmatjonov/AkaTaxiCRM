const Header = ({ current }: { current?: any }) => {
  return (
    <div className="flex items-center justify-between">
      <div>{current.driver.name}</div>
      <div>{current.passenger.name}</div>
    </div>
  );
};

export default Header;
