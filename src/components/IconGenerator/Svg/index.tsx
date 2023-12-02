import { ColorConstants } from "../../../constants/website";

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
      stroke-width="2"
      stroke-miterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
      stroke="#858592"
      stroke-width="2"
      stroke-miterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.65004 21.17C9.05004 20.57 8.67004 19.73 8.67004 18.82"
      stroke="#858592"
      stroke-width="2"
      stroke-miterlimit="10"
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
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13.5V4.5"
      stroke={fill}
      stroke-width="2"
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
      stroke-width="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.91748 3.78711C9.23998 5.85711 10.92 7.43961 13.005 7.64961"
      stroke={fill}
      stroke-width="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.25 16.5H15.75"
      stroke={fill}
      stroke-width="1.5"
      stroke-miterlimit="10"
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
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1375 6.85547L13.65 14.408C13.5675 15.5855 13.5 16.5005 11.4075 16.5005H6.59255C4.50005 16.5005 4.43255 15.5855 4.35005 14.408L3.86255 6.85547"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.74756 12.375H10.2451"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.125 9.375H10.875"
      stroke={fill}
      stroke-width="1.5"
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

export const CarIcon = ({ fill = "white" }: { fill?: string }) => (
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
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4925 14.865C16.575 15.7425 15.87 16.5 14.97 16.5H13.56C12.75 16.5 12.6375 16.155 12.495 15.7275L12.345 15.2775C12.135 14.6625 12 14.25 10.92 14.25H7.08005C6.00005 14.25 5.84255 14.715 5.65505 15.2775L5.50505 15.7275C5.36255 16.155 5.25005 16.5 4.44005 16.5H3.03005C2.13005 16.5 1.42505 15.7425 1.50755 14.865L1.92755 10.2975C2.03255 9.1725 2.25005 8.25 4.21505 8.25H13.785C15.75 8.25 15.9675 9.1725 16.0725 10.2975L16.4925 14.865Z"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H2.25"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 6H15"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 2.25V3.75"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.875 3.75H10.125"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 11.25H6.75"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 11.25H13.5"
      stroke={fill}
      stroke-width="1.5"
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
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z"
      stroke={fill}
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z"
      stroke={fill}
      stroke-width="1.5"
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
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.16003 14.56C4.74003 16.18 4.74003 18.82 7.16003 20.43C9.91003 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92003 12.73 7.16003 14.56Z"
      stroke={fill}
      stroke-width="1.5"
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
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.7684 5.125H16.125C16.6934 5.125 17.1975 5.14333 17.6467 5.2075C20.0575 5.47333 20.7084 6.61 20.7084 9.70833V14.2917C20.7084 17.39 20.0575 18.5267 17.6467 18.7925C17.1975 18.8567 16.6934 18.875 16.125 18.875H14.7684"
      stroke="#858592"
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.75 2.83301V21.1663"
      stroke="#858592"
      stroke-width="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1701 12.0003H11.1783"
      stroke="#858592"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.50359 12.0003H7.51182"
      stroke="#858592"
      stroke-width="2"
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
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.99988 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88501 16.5074 8.10751 15.8324 7.05001C14.1149 4.35001 11.6474 2.79001 8.99988 2.79001C6.35238 2.79001 3.88488 4.35001 2.16738 7.05001C1.49238 8.10751 1.49238 9.88501 2.16738 10.9425C3.88488 13.6425 6.35238 15.2025 8.99988 15.2025Z"
      stroke="#858592"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ImageFrame = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7275 6H13.5225C12.57 6 12 5.43 12 4.4775V2.2725C12 1.32 12.57 0.75 13.5225 0.75H15.7275C16.68 0.75 17.25 1.32 17.25 2.2725V4.4775C17.25 5.43 16.68 6 15.7275 6ZM15.8925 3.5175C15.8025 3.4275 15.6825 3.3825 15.5625 3.3825C15.4425 3.3825 15.3225 3.4275 15.2325 3.5175L15.0975 3.6525V1.9725C15.0975 1.71 14.8875 1.5 14.625 1.5C14.3625 1.5 14.1525 1.71 14.1525 1.9725V3.6525L14.0175 3.5175C13.8375 3.3375 13.5375 3.3375 13.3575 3.5175C13.1775 3.6975 13.1775 3.9975 13.3575 4.1775L14.295 5.115C14.3325 5.1525 14.385 5.1825 14.4375 5.205C14.4525 5.2125 14.4675 5.2125 14.4825 5.22C14.52 5.235 14.5575 5.2425 14.6025 5.2425C14.6175 5.2425 14.6325 5.2425 14.6475 5.2425C14.7 5.2425 14.745 5.235 14.7975 5.2125C14.805 5.2125 14.805 5.2125 14.8125 5.2125C14.865 5.19 14.91 5.16 14.9475 5.1225C14.955 5.115 14.955 5.115 14.9625 5.115L15.9 4.1775C16.08 3.9975 16.08 3.6975 15.8925 3.5175Z"
      fill="#858592"
    />
    <path
      d="M6.74984 7.78509C7.73567 7.78509 8.53484 6.98592 8.53484 6.00009C8.53484 5.01426 7.73567 4.21509 6.74984 4.21509C5.76402 4.21509 4.96484 5.01426 4.96484 6.00009C4.96484 6.98592 5.76402 7.78509 6.74984 7.78509Z"
      fill="#858592"
    />
    <path
      d="M15.7275 6H15.375V9.4575L15.2775 9.375C14.6925 8.8725 13.7475 8.8725 13.1625 9.375L10.0425 12.0525C9.4575 12.555 8.5125 12.555 7.9275 12.0525L7.6725 11.8425C7.14 11.3775 6.2925 11.3325 5.6925 11.7375L2.8875 13.62C2.7225 13.2 2.625 12.7125 2.625 12.1425V5.8575C2.625 3.7425 3.7425 2.625 5.8575 2.625H12V2.2725C12 1.9725 12.0525 1.7175 12.1725 1.5H5.8575C3.1275 1.5 1.5 3.1275 1.5 5.8575V12.1425C1.5 12.96 1.6425 13.6725 1.92 14.2725C2.565 15.6975 3.945 16.5 5.8575 16.5H12.1425C14.8725 16.5 16.5 14.8725 16.5 12.1425V5.8275C16.2825 5.9475 16.0275 6 15.7275 6Z"
      fill="#858592"
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

export const PartnersIcon = ({ fill = "#111" }) => (
  <svg width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"
      fill={fill}
    ></path>
  </svg>
);

export const ArrowUp = ({ fill = "#0BD976" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5523 7.1775L8.99977 2.625L4.44727 7.1775"
      stroke={fill}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 15.3749V2.75244"
      stroke={fill}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
