import "./style.scss";
import companyLogo from "/images/website/no-data.png";

const EmptyDataComponent = ({ title = "Ma'lumot mavjud emas", isVisible }: { title?: string; isVisible?: boolean }) => {
  if (!isVisible) return null;

  return (
    <div className="EmptyDataComponent">
      <div className="block">
        <div className="icon">
          <img src={companyLogo} alt="img" />
        </div>
        <p className="text text-[var(--black)]">{title}</p>
      </div>
    </div>
  );
};

export default EmptyDataComponent;
