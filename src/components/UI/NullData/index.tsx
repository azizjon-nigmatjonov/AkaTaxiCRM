interface Props {
  text?: string;
  classes?: any;
  width?: number;
}

const NullData = ({
  text = "Ma'lumot mavjud emas!",
  classes,
  width = 150,
}: Props) => {
  return (
    <div className={`flex items-center justify-center flex-col ${classes}`}>
      <img
        className="mx-auto mt-10"
        src="/images/no-data.png"
        alt="no data"
        style={{ width: `${width}px` }}
      />
      <p className="font-medium text-2xl mt-2">{text}</p>
    </div>
  );
};

export default NullData;
