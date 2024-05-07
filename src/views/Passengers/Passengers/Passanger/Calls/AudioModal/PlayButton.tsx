import { IconButton } from "@mui/material";

interface Props {
  handleClick: any;
  children: any;
}

export default function PlayButton({
  handleClick = () => {},
  children,
}: Props) {
  const customizatio = {
    color: "red",
    "&": {
      borderRadius: "50%",
      height: "48px",
      width: "48px",
      border: `1px solid #2E90FA`,

      "&:hover, &.Mui-focusVisible": {
        backgroundColor: "#2E90FA11",
      },
    },
  };

  return (
    <IconButton
      aria-label="delete"
      size="large"
      sx={customizatio}
      className="bg-[#2E90FA11]"
      onClick={() => handleClick()}
    >
      {children}
    </IconButton>
  );
}
