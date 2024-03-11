import { ColorConstants } from "../../../constants/website";

interface ArrowIconProps {
  isOpen: boolean;
}

export const SearchIcon = ({ fill = "#9092A3" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 16.5L15 15"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DotsIcon = ({ fill = "#9092A3" }) => (
  <svg
    width="17"
    height="4"
    viewBox="0 0 17 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6082 2.33784H14.633"
      stroke={fill}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.1958 2.33784H8.21235"
      stroke={fill}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.23682 2.33784H2.25336"
      stroke={fill}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NotificationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.44V9.77"
      stroke="#858592"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
      stroke="#858592"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.65004 21.17C9.05004 20.57 8.67004 19.73 8.67004 18.82"
      stroke="#858592"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

export const ArrowDownFilled = ({ fill = "#858592" }: { fill?: string }) => (
  <svg
    width="15"
    height="8"
    viewBox="0 0 15 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.92 0.18H6.68999H1.07999C0.119992 0.18 -0.360007 1.34 0.319993 2.02L5.49999 7.2C6.32999 8.03 7.67999 8.03 8.50999 7.2L10.48 5.23L13.69 2.02C14.36 1.34 13.88 0.18 12.92 0.18Z"
      fill={fill}
    />
  </svg>
);

export const PlusIcon = ({ fill = "white" }: { fill?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 9H13.5"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13.5V4.5"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EditIcon = ({ fill = "white" }: { fill?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.94501 2.70041L3.78751 9.21791C3.55501 9.46541 3.33001 9.95291 3.28501 10.2904L3.00751 12.7204C2.91001 13.5979 3.54001 14.1979 4.41001 14.0479L6.82501 13.6354C7.16251 13.5754 7.63501 13.3279 7.86751 13.0729L14.025 6.55541C15.09 5.43041 15.57 4.14791 13.9125 2.58041C12.2625 1.02791 11.01 1.57541 9.94501 2.70041Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.91748 3.78711C9.23998 5.85711 10.92 7.43961 13.005 7.64961"
      stroke={fill}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.25 16.5H15.75"
      stroke={fill}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DeleteIcon = ({ fill = "#E82F0F" }: { fill?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1375 6.85547L13.65 14.408C13.5675 15.5855 13.5 16.5005 11.4075 16.5005H6.59255C4.50005 16.5005 4.43255 15.5855 4.35005 14.408L3.86255 6.85547"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.74756 12.375H10.2451"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.125 9.375H10.875"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon = ({
  fill = ColorConstants.black,
}: {
  fill?: string;
  className?: any;
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.48">
      <path
        d="M6 14L14 6"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14L6 6"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const CarIcon = ({ fill = "#667085" }: { fill?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6325 2.1225H6.3675C4.5 2.1225 4.0875 3.0525 3.8475 4.1925L3 8.25H15L14.1525 4.1925C13.9125 3.0525 13.5 2.1225 11.6325 2.1225Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4925 14.865C16.575 15.7425 15.87 16.5 14.97 16.5H13.56C12.75 16.5 12.6375 16.155 12.495 15.7275L12.345 15.2775C12.135 14.6625 12 14.25 10.92 14.25H7.08005C6.00005 14.25 5.84255 14.715 5.65505 15.2775L5.50505 15.7275C5.36255 16.155 5.25005 16.5 4.44005 16.5H3.03005C2.13005 16.5 1.42505 15.7425 1.50755 14.865L1.92755 10.2975C2.03255 9.1725 2.25005 8.25 4.21505 8.25H13.785C15.75 8.25 15.9675 9.1725 16.0725 10.2975L16.4925 14.865Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H2.25"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 6H15"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 2.25V3.75"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.875 3.75H10.125"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 11.25H6.75"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 11.25H13.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

);


export const ExchangeIcon = ({ fill = "#DD431F" }: { fill?: string }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM22.3125 17.625C22.2625 17.7375 22.2 17.8375 22.1125 17.925L18.3125 21.725C18.125 21.9125 17.8875 22 17.65 22C17.4125 22 17.175 21.9125 16.9875 21.725C16.625 21.3625 16.625 20.7625 16.9875 20.4L19.1875 18.2H8.5625C8.05 18.2 7.625 17.775 7.625 17.2625C7.625 16.75 8.05 16.325 8.5625 16.325H21.45C21.575 16.325 21.6875 16.35 21.8125 16.4C22.0375 16.5 22.225 16.675 22.325 16.9125C22.4 17.1375 22.4 17.4 22.3125 17.625ZM21.4375 13.6625H8.5625C8.4375 13.6625 8.3125 13.6375 8.2 13.5875C7.975 13.4875 7.7875 13.3125 7.6875 13.075C7.5875 12.85 7.5875 12.5875 7.6875 12.3625C7.7375 12.25 7.8 12.15 7.8875 12.0625L11.6875 8.2625C12.05 7.9 12.65 7.9 13.0125 8.2625C13.375 8.625 13.375 9.225 13.0125 9.5875L10.825 11.7875H21.45C21.9625 11.7875 22.3875 12.2125 22.3875 12.725C22.3875 13.2375 21.9625 13.6625 21.4375 13.6625Z"
      fill={fill}
    />
  </svg>
);

export const LockIcon = ({ fill = "white" }: { fill?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.75 1.5 13.5 3.5175 13.5 6V7.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SaveIcon = ({ fill = ColorConstants.ink }: { fill?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z" />
  </svg>
);

export const UserIcon = ({ fill = "#858592" }: { fill?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.16003 14.56C4.74003 16.18 4.74003 18.82 7.16003 20.43C9.91003 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92003 12.73 7.16003 14.56Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PasswordIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1017 18.875H7.87502C7.30669 18.875 6.80252 18.8567 6.35335 18.7925C3.94252 18.5267 3.29169 17.39 3.29169 14.2917V9.70833C3.29169 6.61 3.94252 5.47333 6.35335 5.2075C6.80252 5.14333 7.30669 5.125 7.87502 5.125H11.0467"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.7684 5.125H16.125C16.6934 5.125 17.1975 5.14333 17.6467 5.2075C20.0575 5.47333 20.7084 6.61 20.7084 9.70833V14.2917C20.7084 17.39 20.0575 18.5267 17.6467 18.7925C17.1975 18.8567 16.6934 18.875 16.125 18.875H14.7684"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.75 2.83301V21.1663"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1701 12.0003H11.1783"
      stroke="#858592"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.50359 12.0003H7.51182"
      stroke="#858592"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckLine = ({ fill = "white" }: { fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"
      fill={fill}
    ></path>
  </svg>
);

export const WarningIcon = () => (
  <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
      fill={ColorConstants.main}
    ></path>
  </svg>
);

export const PhotoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.89017 20.31 4.00017 22 6.76017 22H17.2402C20.0002 22 21.1002 20.31 21.2302 18.25L21.7502 9.99C21.8902 7.83 20.1702 6 18.0002 6ZM10.5002 7.25H13.5002C13.9102 7.25 14.2502 7.59 14.2502 8C14.2502 8.41 13.9102 8.75 13.5002 8.75H10.5002C10.0902 8.75 9.75017 8.41 9.75017 8C9.75017 7.59 10.0902 7.25 10.5002 7.25ZM12.0002 18.12C10.1402 18.12 8.62017 16.61 8.62017 14.74C8.62017 12.87 10.1302 11.36 12.0002 11.36C13.8702 11.36 15.3802 12.87 15.3802 14.74C15.3802 16.61 13.8602 18.12 12.0002 18.12Z"
      fill="white"
    />
  </svg>
);

export const EyeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6849 9C11.6849 10.485 10.4849 11.685 8.99994 11.685C7.51494 11.685 6.31494 10.485 6.31494 9C6.31494 7.515 7.51494 6.315 8.99994 6.315C10.4849 6.315 11.6849 7.515 11.6849 9Z"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.99988 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88501 16.5074 8.10751 15.8324 7.05001C14.1149 4.35001 11.6474 2.79001 8.99988 2.79001C6.35238 2.79001 3.88488 4.35001 2.16738 7.05001C1.49238 8.10751 1.49238 9.88501 2.16738 10.9425C3.88488 13.6425 6.35238 15.2025 8.99988 15.2025Z"
      stroke="#858592"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ImageFrame = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7275 6H13.5225C12.57 6 12 5.43 12 4.4775V2.2725C12 1.32 12.57 0.75 13.5225 0.75H15.7275C16.68 0.75 17.25 1.32 17.25 2.2725V4.4775C17.25 5.43 16.68 6 15.7275 6ZM15.8925 3.5175C15.8025 3.4275 15.6825 3.3825 15.5625 3.3825C15.4425 3.3825 15.3225 3.4275 15.2325 3.5175L15.0975 3.6525V1.9725C15.0975 1.71 14.8875 1.5 14.625 1.5C14.3625 1.5 14.1525 1.71 14.1525 1.9725V3.6525L14.0175 3.5175C13.8375 3.3375 13.5375 3.3375 13.3575 3.5175C13.1775 3.6975 13.1775 3.9975 13.3575 4.1775L14.295 5.115C14.3325 5.1525 14.385 5.1825 14.4375 5.205C14.4525 5.2125 14.4675 5.2125 14.4825 5.22C14.52 5.235 14.5575 5.2425 14.6025 5.2425C14.6175 5.2425 14.6325 5.2425 14.6475 5.2425C14.7 5.2425 14.745 5.235 14.7975 5.2125C14.805 5.2125 14.805 5.2125 14.8125 5.2125C14.865 5.19 14.91 5.16 14.9475 5.1225C14.955 5.115 14.955 5.115 14.9625 5.115L15.9 4.1775C16.08 3.9975 16.08 3.6975 15.8925 3.5175Z"
      fill="#AAACB9"
    />
    <path
      d="M6.74984 7.78509C7.73567 7.78509 8.53484 6.98592 8.53484 6.00009C8.53484 5.01426 7.73567 4.21509 6.74984 4.21509C5.76402 4.21509 4.96484 5.01426 4.96484 6.00009C4.96484 6.98592 5.76402 7.78509 6.74984 7.78509Z"
      fill="#AAACB9"
    />
    <path
      d="M15.7275 6H15.375V9.4575L15.2775 9.375C14.6925 8.8725 13.7475 8.8725 13.1625 9.375L10.0425 12.0525C9.4575 12.555 8.5125 12.555 7.9275 12.0525L7.6725 11.8425C7.14 11.3775 6.2925 11.3325 5.6925 11.7375L2.8875 13.62C2.7225 13.2 2.625 12.7125 2.625 12.1425V5.8575C2.625 3.7425 3.7425 2.625 5.8575 2.625H12V2.2725C12 1.9725 12.0525 1.7175 12.1725 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.1425C1.5 12.96 1.6425 13.6725 1.92 14.2725C2.565 15.6975 3.945 16.5 5.8575 16.5H12.1425C14.8725 16.5 16.5 14.8725 16.5 12.1425V5.8275C16.2825 5.9475 16.0275 6 15.7275 6Z"
      fill="#AAACB9"
    />
  </svg>
);

export const LogoutIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6 1.5H10.65C8.25 1.5 6.75 3 6.75 5.4V8.4375H11.4375C11.745 8.4375 12 8.6925 12 9C12 9.3075 11.745 9.5625 11.4375 9.5625H6.75V12.6C6.75 15 8.25 16.5 10.65 16.5H12.5925C14.9925 16.5 16.4925 15 16.4925 12.6V5.4C16.5 3 15 1.5 12.6 1.5Z"
      fill="white"
    />
    <path
      d="M3.42008 8.43751L4.97258 6.88501C5.08508 6.77251 5.13758 6.63 5.13758 6.4875C5.13758 6.345 5.08508 6.195 4.97258 6.09C4.75508 5.8725 4.39508 5.8725 4.17758 6.09L1.66508 8.60251C1.44758 8.82001 1.44758 9.18 1.66508 9.3975L4.17758 11.91C4.39508 12.1275 4.75508 12.1275 4.97258 11.91C5.19008 11.6925 5.19008 11.3325 4.97258 11.115L3.42008 9.56251H6.75008V8.43751H3.42008Z"
      fill="white"
    />
  </svg>
);

export const PartnersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="vuesax/linear/format-circle">
      <g id="format-circle">
        <path id="Vector" d="M14.3334 3.56699C14.3334 4.17366 14.0468 4.71366 13.6068 5.06033C13.2868 5.31366 12.8801 5.46699 12.4334 5.46699C11.3801 5.46699 10.5334 4.62033 10.5334 3.56699C10.5334 3.12033 10.6868 2.72033 10.9401 2.39366H10.9468C11.2868 1.95366 11.8268 1.66699 12.4334 1.66699C13.4868 1.66699 14.3334 2.51366 14.3334 3.56699Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path id="Vector_2" d="M5.46675 3.56699C5.46675 4.62033 4.62008 5.46699 3.56675 5.46699C3.12008 5.46699 2.72008 5.31366 2.39341 5.06033C1.95341 4.71366 1.66675 4.17366 1.66675 3.56699C1.66675 2.51366 2.51341 1.66699 3.56675 1.66699C4.17341 1.66699 4.71342 1.95366 5.06008 2.39366C5.31342 2.72033 5.46675 3.12033 5.46675 3.56699Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path id="Vector_3" d="M14.3334 12.4332C14.3334 13.4865 13.4868 14.3332 12.4334 14.3332C11.8268 14.3332 11.2868 14.0465 10.9468 13.6065H10.9401C10.6868 13.2865 10.5334 12.8799 10.5334 12.4332C10.5334 11.3799 11.3801 10.5332 12.4334 10.5332C12.8801 10.5332 13.2801 10.6865 13.6068 10.9399V10.9465C14.0468 11.2865 14.3334 11.8265 14.3334 12.4332Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path id="Vector_4" d="M5.46675 12.4332C5.46675 12.8799 5.31342 13.2799 5.06008 13.6065C4.71342 14.0532 4.17341 14.3332 3.56675 14.3332C2.51341 14.3332 1.66675 13.4865 1.66675 12.4332C1.66675 11.8265 1.95341 11.2865 2.39341 10.9465V10.9399C2.71341 10.6865 3.12008 10.5332 3.56675 10.5332C4.62008 10.5332 5.46675 11.3799 5.46675 12.4332Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path id="Vector_5" d="M14.3334 8.00033C14.3334 9.06699 14.0734 10.0603 13.6067 10.9403C13.2867 10.687 12.8801 10.5337 12.4334 10.5337C11.3801 10.5337 10.5334 11.3803 10.5334 12.4337C10.5334 12.8803 10.6867 13.2803 10.9401 13.607C10.0601 14.0737 9.06675 14.3337 8.00008 14.3337C6.94008 14.3337 5.94008 14.0737 5.06008 13.607C5.31341 13.287 5.46675 12.8803 5.46675 12.4337C5.46675 11.3803 4.62008 10.5337 3.56675 10.5337C3.12008 10.5337 2.72008 10.687 2.39341 10.9403C1.92675 10.0603 1.66675 9.06699 1.66675 8.00033C1.66675 6.94033 1.92675 5.94033 2.39341 5.06033C2.72008 5.31366 3.12008 5.46699 3.56675 5.46699C4.62008 5.46699 5.46675 4.62033 5.46675 3.56699C5.46675 3.12033 5.31341 2.72033 5.06008 2.39366C5.94008 1.92699 6.94008 1.66699 8.00008 1.66699C9.06675 1.66699 10.0601 1.92699 10.9401 2.39366C10.6867 2.71366 10.5334 3.12033 10.5334 3.56699C10.5334 4.62033 11.3801 5.46699 12.4334 5.46699C12.8801 5.46699 13.2801 5.31366 13.6067 5.06033C14.0734 5.94033 14.3334 6.94033 14.3334 8.00033Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </g>
  </svg>

);

export const ArrowUp = ({ fill }: { fill?: any }) => (
  // <svg
  //   width="18"
  //   height="18"
  //   viewBox="0 0 18 18"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <rect opacity="0.1" y="0.5" width="36" height="36" rx="8" fill="#0BD976"/>
  //   <path
  //     d="M13.5523 7.1775L8.99977 2.625L4.44727 7.1775"
  //     stroke={fill}
  //     strokeWidth="2"
  //     strokeMiterlimit="10"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   />
  //   <path
  //     d="M9 15.3749V2.75244"
  //     stroke={fill}
  //     strokeWidth="2"
  //     strokeMiterlimit="10"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   />
  // </svg>

  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
    {fill && <rect opacity="0.1" y="0.5" width="36" height="36" rx="8" fill="#0BD976" />}
    <path d="M22.5523 16.6775L17.9998 12.125L13.4473 16.6775" stroke="#0BD976" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18 24.8754V12.2529" stroke="#0BD976" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const ArrowDown = ({ fill }: { fill?: any }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    {fill && <rect opacity="0.1" x="0.666992" y="0.5" width="36" height="36" rx="8" fill="#E82F0F" />}
    <path d="M13.4477 19.8225L18.0002 24.375L22.5527 19.8225" stroke="#E82F0F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18 11.625L18 24.2475" stroke="#E82F0F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const ManIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z"
      stroke="#0062FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.5 2.5L16 8"
      stroke="#0062FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 2.5H21.5V9"
      stroke="#0062FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WomenIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z"
      stroke="#FF35BA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16V22"
      stroke="#FF35BA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 19H9"
      stroke="#FF35BA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const PassengerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10.0999 10.6497C10.0416 10.6414 9.9666 10.6414 9.89994 10.6497C8.43327 10.5997 7.2666 9.39974 7.2666 7.92474C7.2666 6.41641 8.48327 5.19141 9.99993 5.19141C11.5083 5.19141 12.7333 6.41641 12.7333 7.92474C12.7249 9.39974 11.5666 10.5997 10.0999 10.6497Z" stroke="#858592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.6171 16.1498C14.1338 17.5081 12.1671 18.3331 10.0005 18.3331C7.83379 18.3331 5.86712 17.5081 4.38379 16.1498C4.46712 15.3665 4.96712 14.5998 5.85879 13.9998C8.14212 12.4831 11.8755 12.4831 14.1421 13.9998C15.0338 14.5998 15.5338 15.3665 15.6171 16.1498Z" stroke="#858592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z" stroke="#858592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const DriverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM2.205 11.81C2.55496 13.3124 3.33129 14.6817 4.44071 15.7536C5.55013 16.8254 6.94545 17.554 8.459 17.852C8.266 15.227 7.403 13.652 6.313 12.781C5.269 11.946 3.853 11.623 2.205 11.809V11.81ZM13.687 12.78C12.597 13.653 11.734 15.227 11.541 17.852C13.0547 17.554 14.4501 16.8252 15.5595 15.7531C16.669 14.6811 17.4452 13.3116 17.795 11.809C16.147 11.623 14.731 11.946 13.687 12.781V12.78ZM10 2C8.13617 2.00025 6.33088 2.65102 4.89559 3.84004C3.46029 5.02907 2.48501 6.68176 2.138 8.513L2.095 8.761L4.305 8.319C4.887 8.203 5.44 7.896 6.058 7.479L6.535 7.147C7.332 6.581 8.513 6 10 6C11.388 6 12.509 6.506 13.3 7.034L13.942 7.479C14.482 7.844 14.974 8.124 15.478 8.267L15.695 8.319L17.905 8.761C17.6092 6.87693 16.6503 5.16044 15.2009 3.92084C13.7516 2.68124 11.9071 2.00004 10 2Z" fill="#858592" />
  </svg>
)


export const PassengerVehicleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M1.72537 3.8334C2.39204 0.950065 6.73371 0.950065 7.39204 3.8334C7.78371 5.52507 6.70871 6.9584 5.77537 7.85007C5.09204 8.50007 4.01704 8.49173 3.33371 7.85007C2.40871 6.9584 1.33371 5.52507 1.72537 3.8334Z" stroke="#858592" stroke-width="1.5" />
    <path d="M12.5583 13.8334C13.225 10.9501 17.5917 10.9501 18.2583 13.8334C18.65 15.5251 17.575 16.9584 16.6333 17.8501C15.95 18.5001 14.8667 18.4917 14.1833 17.8501C13.2417 16.9584 12.1667 15.5251 12.5583 13.8334Z" stroke="#858592" stroke-width="1.5" />
    <path d="M10.0004 4.16699H12.2337C13.7754 4.16699 14.4921 6.07533 13.3337 7.09199L6.6754 12.917C5.51707 13.9253 6.23373 15.8337 7.76707 15.8337H10.0004" stroke="#858592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.57209 4.58366H4.58172" stroke="#858592" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.4051 14.5837H15.4147" stroke="#858592" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)


export const DriverVehicleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M14.3502 1.66699H7.46695C7.13362 1.66699 6.81693 1.78366 6.5586 1.98366L4.73359 3.442C4.00026 4.02533 4.00026 5.13365 4.73359 5.71698L6.5586 7.17531C6.81693 7.38365 7.14195 7.49198 7.46695 7.49198H14.3502C15.1586 7.49198 15.8086 6.84198 15.8086 6.03365V3.11698C15.8086 2.31698 15.1586 1.66699 14.3502 1.66699Z" stroke="#858592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.66634 10H12.5497C12.883 10 13.1997 10.1167 13.458 10.3167L15.283 11.775C16.0164 12.3583 16.0164 13.4667 15.283 14.05L13.458 15.5083C13.1997 15.7167 12.8747 15.825 12.5497 15.825H5.66634C4.85801 15.825 4.20801 15.175 4.20801 14.3667V11.45C4.20801 10.65 4.85801 10 5.66634 10Z" stroke="#858592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 10V7.5" stroke="#858592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 18.333V15.833" stroke="#858592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.5 18.333H12.5" stroke="#858592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const StartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
    <path d="M12.0133 8.71967L11.2 7.90634C11.0067 7.73967 10.8933 7.49301 10.8867 7.21967C10.8733 6.91967 10.9933 6.61967 11.2133 6.39967L12.0133 5.59967C12.7067 4.90634 12.9667 4.23967 12.7467 3.71301C12.5333 3.19301 11.8733 2.90634 10.9 2.90634H3.93333V2.33301C3.93333 2.05967 3.70667 1.83301 3.43333 1.83301C3.16 1.83301 2.93333 2.05967 2.93333 2.33301V14.6663C2.93333 14.9397 3.16 15.1663 3.43333 15.1663C3.70667 15.1663 3.93333 14.9397 3.93333 14.6663V11.413H10.9C11.86 11.413 12.5067 11.1197 12.7267 10.593C12.9467 10.0663 12.6933 9.40634 12.0133 8.71967Z" fill="#AAACB9" />
  </svg>
)

export const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
    <path d="M14.6667 14.6668H14V7.15348C14 6.74014 13.8133 6.35348 13.4867 6.10014L12.6667 5.46014L12.6533 3.82681C12.6533 3.46014 12.3533 3.16681 11.9867 3.16681H9.71334L8.82001 2.47348C8.34001 2.09348 7.66001 2.09348 7.18001 2.47348L2.51334 6.10014C2.18668 6.35348 2.00001 6.74014 2.00001 7.14681L1.96668 14.6668H1.33334C1.06001 14.6668 0.833344 14.8935 0.833344 15.1668C0.833344 15.4401 1.06001 15.6668 1.33334 15.6668H14.6667C14.94 15.6668 15.1667 15.4401 15.1667 15.1668C15.1667 14.8935 14.94 14.6668 14.6667 14.6668ZM4.33334 9.00014V8.00014C4.33334 7.63348 4.63334 7.33348 5.00001 7.33348H6.33334C6.70001 7.33348 7.00001 7.63348 7.00001 8.00014V9.00014C7.00001 9.36681 6.70001 9.66681 6.33334 9.66681H5.00001C4.63334 9.66681 4.33334 9.36681 4.33334 9.00014ZM9.66668 14.6668H6.33334V12.8335C6.33334 12.2801 6.78001 11.8335 7.33334 11.8335H8.66668C9.22001 11.8335 9.66668 12.2801 9.66668 12.8335V14.6668ZM11.6667 9.00014C11.6667 9.36681 11.3667 9.66681 11 9.66681H9.66668C9.30001 9.66681 9.00001 9.36681 9.00001 9.00014V8.00014C9.00001 7.63348 9.30001 7.33348 9.66668 7.33348H11C11.3667 7.33348 11.6667 7.63348 11.6667 8.00014V9.00014Z" fill="#AAACB9" />
  </svg>
)

export const HorizontalLineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="116" height="7" viewBox="0 0 116 7" fill="none">
    <line x1="4.5" y1="3.5" x2="111.5" y2="3.5" stroke="#151515" stroke-linecap="round" stroke-dasharray="2 2" />
    <circle cx="3.5" cy="3.5" r="2.5" fill="white" stroke="#FF5B01" />
    <circle cx="112.5" cy="3.5" r="2.5" fill="white" stroke="#FF5B01" />
  </svg>
)

export const FlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path d="M17.91 11.2199H14.82V4.0199C14.82 2.3399 13.91 1.9999 12.8 3.2599L12 4.1699L5.23001 11.8699C4.30001 12.9199 4.69001 13.7799 6.09001 13.7799H9.18001V20.9799C9.18001 22.6599 10.09 22.9999 11.2 21.7399L12 20.8299L18.77 13.1299C19.7 12.0799 19.31 11.2199 17.91 11.2199Z" fill="#FFBA09" />
  </svg>
)

export const PassengerManIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
    <path d="M1.74165 12.3337H10.2C10.9 12.3337 11.425 11.5754 11.1333 10.8754C10.3166 8.65872 8.39164 7.02539 5.94165 7.02539C3.49164 7.02539 1.56665 8.65872 0.749979 10.8754C0.574978 11.5754 1.04165 12.3337 1.74165 12.3337Z" fill="white" />
    <path d="M8.91665 3.58366C8.91665 5.21699 7.63331 6.50033 5.99998 6.50033C4.36665 6.50033 3.08331 5.21699 3.08331 3.58366C3.08331 1.95033 4.36665 0.666992 5.99998 0.666992C7.63331 0.666992 8.91665 1.95033 8.91665 3.58366Z" fill="white" />
  </svg>
)

export const PassangerFemaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
    <path d="M3.95839 6.26699C4.83339 6.44199 5.53339 6.50033 6.00006 6.50033C6.46672 6.50033 7.16672 6.44199 7.98339 6.26699C8.80006 6.09199 8.97506 5.62533 8.85839 5.33366C8.74172 4.86699 8.45006 3.64199 8.10006 2.35866C7.75006 1.07533 6.70006 0.666992 6.00006 0.666992C5.30006 0.666992 4.25006 1.07533 3.84172 2.35866C3.49172 3.64199 3.20006 4.92533 3.08339 5.39199C3.02506 5.68366 3.14172 6.09199 3.95839 6.26699Z" fill="white" />
    <path d="M10.2584 7.02539H1.7417C1.0417 7.02539 0.516697 7.78372 0.808363 8.48372C1.62503 10.7004 3.60836 12.3337 6.00003 12.3337C8.3917 12.3337 10.375 10.7004 11.1917 8.48372C11.425 7.78372 10.9584 7.02539 10.2584 7.02539Z" fill="white" />
  </svg>
)

export const FlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
    <g clip-path="url(#clip0_3974_43579)">
      <path d="M0 4H8V6.00039H0V4Z" fill="#1EB53A" />
      <path d="M0 0H8V2.00039H0V0Z" fill="#0099B5" />
      <path d="M0 1.91992H8V4.08086H0V1.91992Z" fill="#CE1126" />
      <path d="M0 2.03906H8V3.96094H0V2.03906Z" fill="white" />
      <path d="M1.49377 1.6793C1.847 1.6793 2.13335 1.35715 2.13335 0.959766C2.13335 0.56238 1.847 0.240234 1.49377 0.240234C1.14054 0.240234 0.854187 0.56238 0.854187 0.959766C0.854187 1.35715 1.14054 1.6793 1.49377 1.6793Z" fill="white" />
      <path d="M1.70623 1.6793C2.05947 1.6793 2.34582 1.35715 2.34582 0.959766C2.34582 0.56238 2.05947 0.240234 1.70623 0.240234C1.353 0.240234 1.06665 0.56238 1.06665 0.959766C1.06665 1.35715 1.353 1.6793 1.70623 1.6793Z" fill="#0099B5" />
      <path d="M2.90107 1.3916L2.86053 1.5284L2.9224 1.5524" fill="white" />
      <path d="M2.90106 1.3916L2.94159 1.5284L2.87972 1.5524" fill="white" />
      <path d="M3.02158 1.49519L2.89412 1.48363L2.89716 1.56315" fill="white" />
      <path d="M3.02041 1.49309L2.92281 1.57738L2.88028 1.51061" fill="white" />
      <path d="M2.78171 1.49309L2.87932 1.57738L2.92184 1.51061" fill="white" />
      <path d="M2.78061 1.49519L2.90806 1.48363L2.90502 1.56315" fill="white" />
      <path d="M2.97781 1.65272L2.93566 1.51464L2.87503 1.5326" fill="white" />
      <path d="M2.97709 1.65392L2.87237 1.56542L2.90724 1.50771" fill="white" />
      <path d="M2.82654 1.65027L2.93041 1.57016L2.89057 1.50771" fill="white" />
      <path d="M2.82715 1.65149L2.86278 1.5145L2.9271 1.53886" fill="white" />
      <path d="M2.90107 0.81543L2.86053 0.95223L2.9224 0.97623" fill="white" />
      <path d="M2.90106 0.81543L2.94159 0.95223L2.87972 0.97623" fill="white" />
      <path d="M3.02158 0.919015L2.89412 0.907455L2.89716 0.986977" fill="white" />
      <path d="M3.02041 0.916922L2.92281 1.0012L2.88028 0.934441" fill="white" />
      <path d="M2.78171 0.916922L2.87932 1.0012L2.92184 0.934441" fill="white" />
      <path d="M2.78061 0.919015L2.90806 0.907455L2.90502 0.986977" fill="white" />
      <path d="M2.97781 1.07655L2.93566 0.938468L2.87503 0.956427" fill="white" />
      <path d="M2.97709 1.07775L2.87237 0.989249L2.90724 0.931539" fill="white" />
      <path d="M2.82654 1.0741L2.93041 0.99399L2.89057 0.931539" fill="white" />
      <path d="M2.82715 1.07531L2.86278 0.938326L2.9271 0.962689" fill="white" />
      <path d="M2.90107 0.239258L2.86053 0.376058L2.9224 0.400058" fill="white" />
      <path d="M2.90106 0.239258L2.94159 0.376058L2.87972 0.400058" fill="white" />
      <path d="M3.02158 0.342843L2.89412 0.331283L2.89716 0.410805" fill="white" />
      <path d="M3.02041 0.34075L2.92281 0.425033L2.88028 0.358269" fill="white" />
      <path d="M2.78171 0.34075L2.87932 0.425033L2.92184 0.358269" fill="white" />
      <path d="M2.78061 0.342843L2.90806 0.331283L2.90502 0.410805" fill="white" />
      <path d="M2.97781 0.500374L2.93566 0.362296L2.87503 0.380255" fill="white" />
      <path d="M2.97709 0.501579L2.87237 0.413077L2.90724 0.355367" fill="white" />
      <path d="M2.82654 0.497928L2.93041 0.417818L2.89057 0.355367" fill="white" />
      <path d="M2.82715 0.499142L2.86278 0.362154L2.9271 0.386517" fill="white" />
      <path d="M3.41309 1.3916L3.37256 1.5284L3.43443 1.5524" fill="white" />
      <path d="M3.41308 1.3916L3.45361 1.5284L3.39175 1.5524" fill="white" />
      <path d="M3.5336 1.49519L3.40615 1.48363L3.40919 1.56315" fill="white" />
      <path d="M3.53244 1.49309L3.43483 1.57738L3.39231 1.51061" fill="white" />
      <path d="M3.29373 1.49309L3.39134 1.57738L3.43386 1.51061" fill="white" />
      <path d="M3.29263 1.49519L3.42009 1.48363L3.41705 1.56315" fill="white" />
      <path d="M3.48983 1.65272L3.44769 1.51464L3.38705 1.5326" fill="white" />
      <path d="M3.48911 1.65392L3.38439 1.56542L3.41926 1.50771" fill="white" />
      <path d="M3.33856 1.65027L3.44243 1.57016L3.40259 1.50771" fill="white" />
      <path d="M3.33917 1.65149L3.3748 1.5145L3.43912 1.53886" fill="white" />
      <path d="M3.41309 0.81543L3.37256 0.95223L3.43443 0.97623" fill="white" />
      <path d="M3.41308 0.81543L3.45361 0.95223L3.39175 0.97623" fill="white" />
      <path d="M3.5336 0.919015L3.40615 0.907455L3.40919 0.986977" fill="white" />
      <path d="M3.53244 0.916922L3.43483 1.0012L3.39231 0.934441" fill="white" />
      <path d="M3.29373 0.916922L3.39134 1.0012L3.43386 0.934441" fill="white" />
      <path d="M3.29263 0.919015L3.42009 0.907455L3.41705 0.986977" fill="white" />
      <path d="M3.48983 1.07655L3.44769 0.938468L3.38705 0.956427" fill="white" />
      <path d="M3.48911 1.07775L3.38439 0.989249L3.41926 0.931539" fill="white" />
      <path d="M3.33856 1.0741L3.44243 0.99399L3.40259 0.931539" fill="white" />
      <path d="M3.33917 1.07531L3.3748 0.938326L3.43912 0.962689" fill="white" />
      <path d="M3.41309 0.239258L3.37256 0.376058L3.43443 0.400058" fill="white" />
      <path d="M3.41308 0.239258L3.45361 0.376058L3.39175 0.400058" fill="white" />
      <path d="M3.5336 0.342843L3.40615 0.331283L3.40919 0.410805" fill="white" />
      <path d="M3.53244 0.34075L3.43483 0.425033L3.39231 0.358269" fill="white" />
      <path d="M3.29373 0.34075L3.39134 0.425033L3.43386 0.358269" fill="white" />
      <path d="M3.29263 0.342843L3.42009 0.331283L3.41705 0.410805" fill="white" />
      <path d="M3.48983 0.500374L3.44769 0.362296L3.38705 0.380255" fill="white" />
      <path d="M3.48911 0.501579L3.38439 0.413077L3.41926 0.355367" fill="white" />
      <path d="M3.33856 0.497928L3.44243 0.417818L3.40259 0.355367" fill="white" />
      <path d="M3.33917 0.499142L3.3748 0.362154L3.43912 0.386517" fill="white" />
      <path d="M3.92505 1.3916L3.88452 1.5284L3.94639 1.5524" fill="white" />
      <path d="M3.92504 1.3916L3.96558 1.5284L3.90371 1.5524" fill="white" />
      <path d="M4.04557 1.49519L3.91811 1.48363L3.92115 1.56315" fill="white" />
      <path d="M4.0444 1.49309L3.9468 1.57738L3.90427 1.51061" fill="white" />
      <path d="M3.8057 1.49309L3.9033 1.57738L3.94583 1.51061" fill="white" />
      <path d="M3.80459 1.49519L3.93205 1.48363L3.92901 1.56315" fill="white" />
      <path d="M4.0018 1.65272L3.95965 1.51464L3.89902 1.5326" fill="white" />
      <path d="M4.00107 1.65392L3.89636 1.56542L3.93122 1.50771" fill="white" />
      <path d="M3.85052 1.65027L3.95439 1.57016L3.91455 1.50771" fill="white" />
      <path d="M3.85114 1.65149L3.88677 1.5145L3.95108 1.53886" fill="white" />
      <path d="M3.92505 0.81543L3.88452 0.95223L3.94639 0.97623" fill="white" />
      <path d="M3.92504 0.81543L3.96558 0.95223L3.90371 0.97623" fill="white" />
      <path d="M4.04557 0.919015L3.91811 0.907455L3.92115 0.986977" fill="white" />
      <path d="M4.0444 0.916922L3.9468 1.0012L3.90427 0.934441" fill="white" />
      <path d="M3.8057 0.916922L3.9033 1.0012L3.94583 0.934441" fill="white" />
      <path d="M3.80459 0.919015L3.93205 0.907455L3.92901 0.986977" fill="white" />
      <path d="M4.0018 1.07655L3.95965 0.938468L3.89902 0.956427" fill="white" />
      <path d="M4.00107 1.07775L3.89636 0.989249L3.93122 0.931539" fill="white" />
      <path d="M3.85052 1.0741L3.95439 0.99399L3.91455 0.931539" fill="white" />
      <path d="M3.85114 1.07531L3.88677 0.938326L3.95108 0.962689" fill="white" />
      <path d="M3.92505 0.239258L3.88452 0.376058L3.94639 0.400058" fill="white" />
      <path d="M3.92504 0.239258L3.96558 0.376058L3.90371 0.400058" fill="white" />
      <path d="M4.04557 0.342843L3.91811 0.331283L3.92115 0.410805" fill="white" />
      <path d="M4.0444 0.34075L3.9468 0.425033L3.90427 0.358269" fill="white" />
      <path d="M3.8057 0.34075L3.9033 0.425033L3.94583 0.358269" fill="white" />
      <path d="M3.80459 0.342843L3.93205 0.331283L3.92901 0.410805" fill="white" />
      <path d="M4.0018 0.500374L3.95965 0.362296L3.89902 0.380255" fill="white" />
      <path d="M4.00107 0.501579L3.89636 0.413077L3.93122 0.355367" fill="white" />
      <path d="M3.85052 0.497928L3.95439 0.417818L3.91455 0.355367" fill="white" />
      <path d="M3.85114 0.499142L3.88677 0.362154L3.95108 0.386517" fill="white" />
      <path d="M1.87708 1.3916L1.83655 1.5284L1.89841 1.5524" fill="white" />
      <path d="M1.87707 1.3916L1.9176 1.5284L1.85574 1.5524" fill="white" />
      <path d="M1.99759 1.49519L1.87013 1.48363L1.87317 1.56315" fill="white" />
      <path d="M1.99643 1.49309L1.89882 1.57738L1.8563 1.51061" fill="white" />
      <path d="M1.75772 1.49309L1.85533 1.57738L1.89785 1.51061" fill="white" />
      <path d="M1.75662 1.49519L1.88408 1.48363L1.88104 1.56315" fill="white" />
      <path d="M1.95382 1.65272L1.91168 1.51464L1.85104 1.5326" fill="white" />
      <path d="M1.9531 1.65392L1.84838 1.56542L1.88325 1.50771" fill="white" />
      <path d="M1.80255 1.65027L1.90642 1.57016L1.86658 1.50771" fill="white" />
      <path d="M1.80316 1.65149L1.83879 1.5145L1.90311 1.53886" fill="white" />
      <path d="M2.38911 1.3916L2.34857 1.5284L2.41044 1.5524" fill="white" />
      <path d="M2.38909 1.3916L2.42963 1.5284L2.36776 1.5524" fill="white" />
      <path d="M2.50962 1.49519L2.38216 1.48363L2.3852 1.56315" fill="white" />
      <path d="M2.50845 1.49309L2.41085 1.57738L2.36832 1.51061" fill="white" />
      <path d="M2.26975 1.49309L2.36735 1.57738L2.40988 1.51061" fill="white" />
      <path d="M2.26864 1.49519L2.3961 1.48363L2.39306 1.56315" fill="white" />
      <path d="M2.46585 1.65272L2.4237 1.51464L2.36307 1.5326" fill="white" />
      <path d="M2.46512 1.65392L2.36041 1.56542L2.39527 1.50771" fill="white" />
      <path d="M2.31457 1.65027L2.41844 1.57016L2.3786 1.50771" fill="white" />
      <path d="M2.31519 1.65149L2.35082 1.5145L2.41513 1.53886" fill="white" />
      <path d="M2.38911 0.81543L2.34857 0.95223L2.41044 0.97623" fill="white" />
      <path d="M2.38909 0.81543L2.42963 0.95223L2.36776 0.97623" fill="white" />
      <path d="M2.50962 0.919015L2.38216 0.907455L2.3852 0.986977" fill="white" />
      <path d="M2.50845 0.916922L2.41085 1.0012L2.36832 0.934441" fill="white" />
      <path d="M2.26975 0.916922L2.36735 1.0012L2.40988 0.934441" fill="white" />
      <path d="M2.26864 0.919015L2.3961 0.907455L2.39306 0.986977" fill="white" />
      <path d="M2.46585 1.07655L2.4237 0.938468L2.36307 0.956427" fill="white" />
      <path d="M2.46512 1.07775L2.36041 0.989249L2.39527 0.931539" fill="white" />
      <path d="M2.31457 1.0741L2.41844 0.99399L2.3786 0.931539" fill="white" />
      <path d="M2.31519 1.07531L2.35082 0.938326L2.41513 0.962689" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_3974_43579">
        <rect width="8" height="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4.50667 14.6663H11.4933C13.3333 14.6663 14.0667 13.5397 14.1533 12.1663L14.5 6.65967C14.5933 5.21967 13.4467 3.99967 12 3.99967C11.5933 3.99967 11.22 3.76634 11.0333 3.40634L10.5533 2.43967C10.2467 1.83301 9.44667 1.33301 8.76667 1.33301H7.24C6.55333 1.33301 5.75333 1.83301 5.44667 2.43967L4.96667 3.40634C4.78 3.76634 4.40667 3.99967 4 3.99967C2.55333 3.99967 1.40667 5.21967 1.5 6.65967L1.84667 12.1663C1.92667 13.5397 2.66667 14.6663 4.50667 14.6663Z" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7 5.33301H9" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 12.0003C9.19333 12.0003 10.1667 11.027 10.1667 9.83366C10.1667 8.64033 9.19333 7.66699 8 7.66699C6.80667 7.66699 5.83333 8.64033 5.83333 9.83366C5.83333 11.027 6.80667 12.0003 8 12.0003Z" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const InfoIcon = ({ fill = '#858592', size = 20 }: { fill?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path d="M10 1.6665C5.40833 1.6665 1.66666 5.40817 1.66666 9.99984C1.66666 14.5915 5.40833 18.3332 10 18.3332C14.5917 18.3332 18.3333 14.5915 18.3333 9.99984C18.3333 5.40817 14.5917 1.6665 10 1.6665ZM9.375 6.6665C9.375 6.32484 9.65833 6.0415 10 6.0415C10.3417 6.0415 10.625 6.32484 10.625 6.6665V10.8332C10.625 11.1748 10.3417 11.4582 10 11.4582C9.65833 11.4582 9.375 11.1748 9.375 10.8332V6.6665ZM10.7667 13.6498C10.725 13.7582 10.6667 13.8415 10.5917 13.9248C10.5083 13.9998 10.4167 14.0582 10.3167 14.0998C10.2167 14.1415 10.1083 14.1665 10 14.1665C9.89166 14.1665 9.78333 14.1415 9.68333 14.0998C9.58333 14.0582 9.49166 13.9998 9.40833 13.9248C9.33333 13.8415 9.275 13.7582 9.23333 13.6498C9.19166 13.5498 9.16666 13.4415 9.16666 13.3332C9.16666 13.2248 9.19166 13.1165 9.23333 13.0165C9.275 12.9165 9.33333 12.8248 9.40833 12.7415C9.49166 12.6665 9.58333 12.6082 9.68333 12.5665C9.88333 12.4832 10.1167 12.4832 10.3167 12.5665C10.4167 12.6082 10.5083 12.6665 10.5917 12.7415C10.6667 12.8248 10.725 12.9165 10.7667 13.0165C10.8083 13.1165 10.8333 13.2248 10.8333 13.3332C10.8333 13.4415 10.8083 13.5498 10.7667 13.6498Z" fill={fill} />
  </svg>
)

export const InfoErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
    <path d="M14.5067 11.113L10.24 3.43301C9.66667 2.39967 8.87333 1.83301 8 1.83301C7.12667 1.83301 6.33333 2.39967 5.76 3.43301L1.49333 11.113C0.953334 12.093 0.893334 13.033 1.32667 13.773C1.76 14.513 2.61333 14.9197 3.73333 14.9197H12.2667C13.3867 14.9197 14.24 14.513 14.6733 13.773C15.1067 13.033 15.0467 12.0863 14.5067 11.113ZM7.5 6.49967C7.5 6.22634 7.72667 5.99967 8 5.99967C8.27333 5.99967 8.5 6.22634 8.5 6.49967V9.83301C8.5 10.1063 8.27333 10.333 8 10.333C7.72667 10.333 7.5 10.1063 7.5 9.83301V6.49967ZM8.47333 12.3063C8.44 12.333 8.40667 12.3597 8.37333 12.3863C8.33333 12.413 8.29333 12.433 8.25333 12.4463C8.21333 12.4663 8.17333 12.4797 8.12667 12.4863C8.08667 12.493 8.04 12.4997 8 12.4997C7.96 12.4997 7.91333 12.493 7.86667 12.4863C7.82667 12.4797 7.78667 12.4663 7.74667 12.4463C7.70667 12.433 7.66667 12.413 7.62667 12.3863C7.59333 12.3597 7.56 12.333 7.52667 12.3063C7.40667 12.1797 7.33333 12.0063 7.33333 11.833C7.33333 11.6597 7.40667 11.4863 7.52667 11.3597C7.56 11.333 7.59333 11.3063 7.62667 11.2797C7.66667 11.253 7.70667 11.233 7.74667 11.2197C7.78667 11.1997 7.82667 11.1863 7.86667 11.1797C7.95333 11.1597 8.04667 11.1597 8.12667 11.1797C8.17333 11.1863 8.21333 11.1997 8.25333 11.2197C8.29333 11.233 8.33333 11.253 8.37333 11.2797C8.40667 11.3063 8.44 11.333 8.47333 11.3597C8.59333 11.4863 8.66667 11.6597 8.66667 11.833C8.66667 12.0063 8.59333 12.1797 8.47333 12.3063Z" fill="#E82F0F" />
  </svg>
)

export const ArrowIcon: React.FC<ArrowIconProps> = ({ isOpen }) => (
  <svg style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="vuesax/bold/arrow-down">
      <g id="arrow-down">
        <path id="Vector" d="M7.79316 5.95312H11.9465C12.1396 5.95312 12.2404 6.18851 12.1046 6.32791C12.1043 6.32823 12.104 6.32855 12.1037 6.32887L9.96628 8.46624L8.65295 9.77957C8.29487 10.1376 7.71146 10.1376 7.35339 9.77957L3.90005 6.32624C3.76078 6.18696 3.85993 5.95312 4.05317 5.95312H7.79316Z" fill="#98A2B3" stroke="#98A2B3" />
      </g>
    </g>
  </svg>

)

export const IncreaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="130" height="66" viewBox="0 0 130 66" fill="none">
    <path d="M129 1C108.204 2.73299 106.916 44.2218 86.3333 49C69.3602 52.9402 60.7655 30.5738 43.6667 33C25.1204 35.6316 19.1855 58.9382 1 65H129V1Z" fill="#ECFDF3" />
    <path d="M129 1C108.204 2.73299 106.916 44.2218 86.3333 49C69.3602 52.9402 60.7655 30.5738 43.6667 33C25.1204 35.6316 19.1855 58.9382 1 65H129V1Z" fill="url(#paint0_linear_4561_48119)" />
    <path d="M1 65C19.1855 58.9382 25.1204 35.6316 43.6667 33C60.7655 30.5738 69.3602 52.9402 86.3333 49C106.916 44.2218 108.204 2.73299 129 1" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_4561_48119" x1="65" y1="1" x2="65" y2="65" gradientUnits="userSpaceOnUse">
        <stop offset="0.641167" stop-color="white" stop-opacity="0" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
    </defs>
  </svg>
)

export const DecreaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="130" height="66" viewBox="0 0 130 66" fill="none">
    <path d="M1 1C21.7959 2.73299 23.0837 44.2218 43.6667 49C60.6398 52.9402 69.2345 30.5738 86.3333 33C104.88 35.6316 110.815 58.9382 129 65H1V1Z" fill="#FEF3F2" />
    <path d="M1 1C21.7959 2.73299 23.0837 44.2218 43.6667 49C60.6398 52.9402 69.2345 30.5738 86.3333 33C104.88 35.6316 110.815 58.9382 129 65H1V1Z" fill="url(#paint0_linear_4561_48147)" />
    <path d="M129 65C110.815 58.9382 104.88 35.6316 86.3333 33C69.2345 30.5738 60.6398 52.9402 43.6667 49C23.0837 44.2218 21.7959 2.73299 0.999996 1" stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_4561_48147" x1="65" y1="1" x2="65" y2="65" gradientUnits="userSpaceOnUse">
        <stop offset="0.641167" stop-color="white" stop-opacity="0" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
    </defs>
  </svg>
)

export const BallanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
    <path d="M16.5 9.5V13.25C16.5 15.5 15 17 12.75 17H5.25C3 17 1.5 15.5 1.5 13.25V9.5C1.5 7.46 2.73 6.035 4.6425 5.795C4.8375 5.765 5.04 5.75 5.25 5.75H12.75C12.945 5.75 13.1325 5.75749 13.3125 5.78749C15.2475 6.01249 16.5 7.445 16.5 9.5Z" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.3136 5.7875C13.1336 5.7575 12.9461 5.75001 12.7511 5.75001H5.25105C5.04105 5.75001 4.83855 5.76501 4.64355 5.79501C4.74855 5.58501 4.89855 5.39001 5.07855 5.21001L7.51606 2.765C8.54356 1.745 10.2086 1.745 11.2361 2.765L12.5486 4.09251C13.0286 4.56501 13.2836 5.165 13.3136 5.7875Z" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.5 9.875H14.25C13.425 9.875 12.75 10.55 12.75 11.375C12.75 12.2 13.425 12.875 14.25 12.875H16.5" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const TaxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path d="M14.9585 9.875C14.9585 8.84 15.7985 8 16.8335 8V7.25C16.8335 4.25 16.0835 3.5 13.0835 3.5H5.5835C2.5835 3.5 1.8335 4.25 1.8335 7.25V7.625C2.8685 7.625 3.7085 8.465 3.7085 9.5C3.7085 10.535 2.8685 11.375 1.8335 11.375V11.75C1.8335 14.75 2.5835 15.5 5.5835 15.5H13.0835C16.0835 15.5 16.8335 14.75 16.8335 11.75C15.7985 11.75 14.9585 10.91 14.9585 9.875Z" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.0835 11.5625L11.5835 7.0625" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.5794 11.5625H11.5861" stroke="#DD431F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.07938 7.4375H7.08611" stroke="#DD431F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const SallaryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path d="M7.7915 10.8122C7.7915 11.5397 8.35401 12.1247 9.04401 12.1247H10.454C11.054 12.1247 11.5415 11.6147 11.5415 10.9772C11.5415 10.2947 11.2415 10.0472 10.799 9.88969L8.5415 9.10218C8.099 8.94468 7.79901 8.70469 7.79901 8.01469C7.79901 7.38469 8.2865 6.86719 8.8865 6.86719H10.2965C10.9865 6.86719 11.549 7.45219 11.549 8.17969" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.6665 6.125V12.875" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.1665 9.5C17.1665 13.64 13.8065 17 9.6665 17C5.5265 17 2.1665 13.64 2.1665 9.5C2.1665 5.36 5.5265 2 9.6665 2" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.4165 2.75V5.75H16.4165" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.1665 2L13.4165 5.75" stroke="#DD431F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)


export const UserTagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4197C12.63 22.1897 11.36 22.1897 10.58 21.4197L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z" stroke="#039855" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.9999 9.99982C13.2868 9.99982 14.33 8.95662 14.33 7.6698C14.33 6.38298 13.2868 5.33984 11.9999 5.33984C10.7131 5.33984 9.66992 6.38298 9.66992 7.6698C9.66992 8.95662 10.7131 9.99982 11.9999 9.99982Z" stroke="#039855" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 15.6594C16 13.8594 14.21 12.3994 12 12.3994C9.79 12.3994 8 13.8594 8 15.6594" stroke="#039855" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)



export const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20.6198 8.7C19.5798 4.07 15.5398 2 11.9998 2C11.9998 2 11.9998 2 11.9897 2C8.45975 2 4.42975 4.07 3.37975 8.69C2.19975 13.85 5.35975 18.22 8.21975 20.98C9.27975 22 10.6398 22.51 11.9998 22.51C13.3597 22.51 14.7198 22 15.7698 20.98C18.6298 18.22 21.7898 13.86 20.6198 8.7ZM15.2797 9.53L11.2797 13.53C11.1298 13.68 10.9398 13.75 10.7498 13.75C10.5598 13.75 10.3698 13.68 10.2198 13.53L8.71975 12.03C8.42975 11.74 8.42975 11.26 8.71975 10.97C9.00975 10.68 9.48975 10.68 9.77975 10.97L10.7498 11.94L14.2198 8.47C14.5098 8.18 14.9897 8.18 15.2797 8.47C15.5697 8.76 15.5697 9.24 15.2797 9.53Z" fill="#151515" />
  </svg>
)


export const CircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#EAEAEB" />
    <circle cx="12" cy="12" r="7.5" fill="#151515" />
  </svg>
)

export const CloseModalIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.315 0C4.62737 0 0 4.62737 0 10.315C0 16.0026 4.62737 20.63 10.315 20.63C16.0026 20.63 20.63 16.0026 20.63 10.315C20.63 4.62737 16.0026 0 10.315 0ZM14.0497 12.928C14.1265 13.0009 14.1879 13.0885 14.2303 13.1855C14.2727 13.2826 14.2952 13.3872 14.2966 13.4931C14.298 13.599 14.2781 13.7041 14.2382 13.8022C14.1983 13.9003 14.1392 13.9894 14.0643 14.0643C13.9894 14.1392 13.9003 14.1983 13.8022 14.2382C13.7041 14.2781 13.599 14.298 13.4931 14.2966C13.3872 14.2952 13.2826 14.2727 13.1855 14.2303C13.0885 14.1879 13.0009 14.1265 12.928 14.0497L10.315 11.4373L7.70203 14.0497C7.55202 14.1922 7.35226 14.2705 7.14536 14.2679C6.93846 14.2652 6.74077 14.1819 6.59446 14.0355C6.44814 13.8892 6.36477 13.6915 6.36212 13.4846C6.35947 13.2777 6.43775 13.078 6.58028 12.928L9.19275 10.315L6.58028 7.70203C6.43775 7.55202 6.35947 7.35226 6.36212 7.14536C6.36477 6.93846 6.44814 6.74077 6.59446 6.59446C6.74077 6.44814 6.93846 6.36477 7.14536 6.36212C7.35226 6.35947 7.55202 6.43775 7.70203 6.58028L10.315 9.19275L12.928 6.58028C13.078 6.43775 13.2777 6.35947 13.4846 6.36212C13.6915 6.36477 13.8892 6.44814 14.0355 6.59446C14.1819 6.74077 14.2652 6.93846 14.2679 7.14536C14.2705 7.35226 14.1922 7.55202 14.0497 7.70203L11.4373 10.315L14.0497 12.928Z" fill="#5C5C5C" />
  </svg>


)


export const Empty = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_5451_11610)">
      <rect width="24" height="24" rx="6" fill="#EAEAEB" />
    </g>
    <defs>
      <clipPath id="clip0_5451_11610">
        <rect width="24" height="24" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const PessenerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_4234_5465)">
      <rect width="24" height="24" rx="6" fill="#151515" />
      <path d="M7.74165 17.8333H16.2C16.9 17.8333 17.425 17.075 17.1333 16.375C16.3166 14.1583 14.3916 12.525 11.9416 12.525C9.49164 12.525 7.56665 14.1583 6.74998 16.375C6.57498 17.075 7.04165 17.8333 7.74165 17.8333Z" fill="white" />
      <path d="M14.9166 9.08332C14.9166 10.7167 13.6333 12 12 12C10.3666 12 9.08331 10.7167 9.08331 9.08332C9.08331 7.44999 10.3666 6.16666 12 6.16666C13.6333 6.16666 14.9166 7.44999 14.9166 9.08332Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_4234_5465">
        <rect width="24" height="24" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>

)