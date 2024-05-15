import {
  EditIcon,
  ArrowDoubleIcon,
} from "../../../components/UI/IconGenerator/Svg";

export const Column = () => {
  return (
    <div className="border-r border-[var(--gray20)]">
      <div className="header bg-[var(--gray25)] h-[44px] px-5 flex items-center">
        <p className="text-12px text-[var(--gray60)]">Viloyatlar</p>
      </div>
      <ul>
        <li className="h-[50px] flex items-center px-5">
          <p>Nomi 1 viloyati</p>

          <button>
            <EditIcon fill="black" />
          </button>
          <button>
            <ArrowDoubleIcon />
          </button>
        </li>
      </ul>
    </div>
  );
};
