import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";

import { FetchFunction } from "./Logic";
import { AdminFormWrapper } from "./Form";
const Form = ({ refetch, id }: { refetch: () => void; id: string }) => {
  const { navigateQuery } = usePageRouter();

  const { rolls, defaultValues } = FetchFunction({
    adminId: id,
  });

  return (
    <CModal
      title={id ? "Ma'lumotni tahrirlash" : "add_new_admin"}
      open={true}
      handleClose={() => navigateQuery({ id: "" })}
      footerActive={false}
    >
      <AdminFormWrapper
        rolls={rolls}
        defaultValues={defaultValues}
        refetch={refetch}
        id={id}
      />
    </CModal>
  );
};

export default Form;
