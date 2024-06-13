export const Closer = ({
  handleClose = () => {},
  classes = ""
}: {
  handleClose: () => void;
  classes?: string
}) => {
    return <div onClick={() => handleClose()} className={`w-[100vw]  h-[100vh] fixed top-0 left-0 z-[90 ${classes}`}></div>
}
