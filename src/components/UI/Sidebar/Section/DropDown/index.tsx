import { useTranslation } from "react-i18next";
import IconGenerator from "../../../../../components/UI/IconGenerator";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";

interface Props {
  title: any;
  value: any;
  sidebarCounts: any;
  clearFilter: () => void;
}

export const DropDown = ({
  value,
  title,
  sidebarCounts = {},
  clearFilter = () => {},
}: Props) => {
  const { t } = useTranslation();
  return (
    <div className="mt-[-40px]">
      <div className="absolute left-[60px] group-hover:block hidden w-auto z-[99]">
        <div className="relative">
          <div className="absolute left-[-7px] top-[15px] w-[15px] h-[15px] rotate-[45deg] bg-white border border-[var(--gray20)] z-[33] card-shadow"></div>
          <div className="relative z-[99] bg-white card-shadow rounded-[12px] border border-[var(--gray20)] pt-2">
            <div className={`flex items-center space-x-3 ml-5 mb-2`}>
              <span className="text-[var(--black)] font-[600]">{t(title)}</span>
            </div>
            <div className={`panel show`}>
              {Object.values(value as keyof typeof value)?.map(
                (el: any, i, arr) => {
                  const isLastItem = i === arr.length - 1;

                  if (el.title && el.title.trim() !== "") {
                    return (
                      el.sidebar && (
                        <>
                          <NavLink
                            key={el.id}
                            to={el.path}
                            className={`${
                              i < 100
                                ? "steps__item steps__item--active"
                                : "steps__item"
                            } menu_link2 flex items-center steps ${
                              location.pathname.startsWith(el.path)
                                ? "active"
                                : ""
                            }`}
                          >
                            <p
                              onClick={() => clearFilter()}
                              className={`${
                                isLastItem ? "mb-2" : ""
                              } flex justify-between capitalize menu_link cursor-pointer text-sm font-medium text-[#151515] whitespace-nowrap pr-3`}
                            >
                              <div className="flex space-x-2">
                                <IconGenerator icon={el.icon} />
                                <span>{el.title}</span>
                              </div>
                              {el.path in sidebarCounts ? (
                                <Badge
                                  badgeContent={sidebarCounts[el.path]}
                                  color="primary"
                                ></Badge>
                              ) : (
                                ""
                              )}
                            </p>
                          </NavLink>
                        </>
                      )
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OneDropdown = ({
  title = "",
  icon = "",
  path = "/",
  sidebarCounts = {},
  clearFilter = () => {},
}: {
  title: string;
  icon: string;
  path: string;
  clearFilter: () => void;
  sidebarCounts: any;
}) => {
  return (
    <div className="absolute left-[60px] group-hover:block hidden bg-white whitespace-nowrap common-shadow rounded-[12px] z-[99] p-2">
      <div className="overflow-hidden">
        <NavLink to={path} className={`menu_link2 flex items-center steps`}>
          <p
            className={`flex justify-between capitalize menu_link cursor-pointer text-sm font-medium text-[#151515] whitespace-nowrap pr-10`}
            onClick={() => clearFilter()}
          >
            <div className="flex space-x-2">
              <IconGenerator icon={icon} />
              <span>{title}</span>
            </div>
            {path in sidebarCounts ? (
              <Badge badgeContent={sidebarCounts[path]} color="primary"></Badge>
            ) : (
              ""
            )}
          </p>
        </NavLink>
      </div>
    </div>
  );
};
