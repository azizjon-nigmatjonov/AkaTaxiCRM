import { useState } from "react";
import { PopoverDelete } from "../../../../../components/CElements/CTable/Details/Actions/EditDelete/PopOver";
import {
  CloseIcon,
  DeleteIcon,
  EyeIcon,
} from "../../../../../components/UI/IconGenerator/Svg";
import { PermissionCreate } from "../PermissionCreate";
import usePageRouter from "../../../../../hooks/useObjectRouter";
import { useTranslation } from "react-i18next";

export const ListIem = ({
  route,
  handleClose = () => {},
  deleteRoute = () => {},
  deletePermission = () => {},
}: {
  route: any;
  handleClose: () => void;
  deleteRoute: (id: number) => void;
  deletePermission: (id: number) => void;
}) => {
  const { navigateTo } = usePageRouter();
  const [openPopover, setOpenPopover] = useState(false);
  const { t } = useTranslation()

  const closePopover = (status: string, id: number) => {
    if (status === "delete") {
      deleteRoute(id);
    }
    setOpenPopover(false);
  };

  return (
    <div className="flex space-x-10 py-20px border-t border-[var(--gray20)]">
      <div className="w-[360px] relative">
        <div className="w-[360px] flex items-center justify-between">
          <p className="">{route.name}</p>
          <div className="flex items-center space-x-5">
            <button onClick={() => navigateTo(`/${route.path}?fromRoutes=/admins/routes`)}>
              <EyeIcon fill="var(--primary)" />
            </button>
            <button onClick={() => setOpenPopover(true)}>
              <DeleteIcon />
            </button>
          </div>
        </div>

        {openPopover && (
          <PopoverDelete
            title={`${route.name}`}
            text="Routeni ochirmoqchimsiz!"
            classes="top-[30px] left-auto right-0"
            closePopover={(status) => {
              closePopover(status, route.id);
            }}
          />
        )}
      </div>
      <div className="w-[1px] h-[30px] bg-[var(--gray30)] common-shadow"></div>
      <div className="w-full">
        <div className="flex gap-5 flex-wrap">
          {route.permissions?.map((permission: any) => (
            <div className="border border-[var(--gray20)] h-[40px] px-16px whitespace-nopwrap rounded-[8px] common-shadow min-w-[120px] flex items-center justify-between space-x-5">
              <span>{t(permission.label)}</span>

              <button
                onClick={() => deletePermission(permission.id)}
                className="border border-[var(--gray30)] rounded-full w-[20px] h-[20px] flex items-center justify-center cursor-pointer"
              >
                <CloseIcon />
              </button>
            </div>
          ))}

          <PermissionCreate
            list={route.permissions}
            handleClose={handleClose}
            id={route.id}
            route={route}
            path={route.path}
          />
        </div>
      </div>
    </div>
  );
};
