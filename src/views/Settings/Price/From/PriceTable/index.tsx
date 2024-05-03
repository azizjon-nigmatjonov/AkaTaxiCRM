import { EditIcon } from "../../../../../components/UI/IconGenerator/Svg";
import "./style.scss";

export const PriceTable = () => {
  return (
    <div
      className={`price-table bg-white rounded-[12px] border border-[var(--border)] common-shadow overflow-hidden`}
    >
      <div className="header">
        <div className="row">
          <div className="cell">
            <p>Viloyat</p>
          </div>
          <div className="cell">
            <p>Tumanlar</p>
          </div>
          <div className="cell collapsed">
            <div className="cell__wrapper">
              <p>Yo'l yo'lakay</p>
              <button className="flex space-x-1 bg-[var(--gray50)] px-6px py-2px rounded-full group">
                <span className="group-hover:text-[var(--gray90)] text-[var(--gray60)]">250</span>{" "}
                <EditIcon fill="var(--gray60)" />
              </button>
            </div>
            <div className="cell__wrapper">
              <button className="flex space-x-1 bg-[var(--primary50)] px-6px py-2px rounded-full">
                <span className="text-[var(--primary)]">KM</span>{" "}
                <EditIcon fill="var(--primary)" />
              </button>
              <p className="text-[var(--gray40)]">Summa</p>
            </div>
          </div>
  
        </div>
      </div>
      {/* <div className="body">
        <div className="left">
          <div className="cell">
          <p>Andijon</p>
          </div>
        </div>
        <div className="right">
          <div className="row">
            <div className="cell">
                <p>Tuman nomi</p>
            </div>
            <div className="cell flex justify-between">
                <p>420</p>
                <p className="text-[var(--gray60)]">300</p>
            </div>
            <div className="cell flex justify-between">
                <p>420</p>
                <p className="text-[var(--gray60)]">300</p>
            </div>
            <div className="cell flex justify-between">
                <p>420</p>
                <p className="text-[var(--gray60)]">300</p>
            </div>
            <div className="cell flex justify-between">
                <p>420</p>
                <p className="text-[var(--gray60)]">300</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
