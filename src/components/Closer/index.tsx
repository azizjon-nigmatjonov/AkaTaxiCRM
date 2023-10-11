export const Closer = ({
  handleClose = () => {},
}: {
  handleClose: () => void;
}) => {
    return <div onClick={() => handleClose()} className="w-[100vw] h-[100vh] fixed top-0 left-0 z-[90]"></div>
}
