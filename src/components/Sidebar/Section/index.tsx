import cls from "./style.module.scss";
import { useMemo } from "react";
import IconGenerator from "../../IconGenerator";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarSection = () => {
  const { checkPath } = usePageRouter();
  const { t } = useTranslation();
  const routes = useSelector((state: any) => state.website.routes);

  const List = useMemo(() => {
    return routes ?? [];
  }, [routes]);

  return (
    <div className={cls.section}>
      {Object.entries(List)?.map(([key, value]) => (
        <div key={key} className={cls.menu}>
          <h3 className={`${cls.title} text-[var(--gray)]`}>{t(key)}</h3>

          {Object.values(value as keyof typeof value)?.map(
            (element: any) =>
              element.sidebar && (
                <NavLink
                  key={element.id}
                  to={element.path}
                  style={{
                    color: checkPath(element.path)
                      ? "var(--main)"
                      : "var(--black)",
                  }}
                  className={`${cls.menu__link} hover:bg-[var(--lineGray)] relative`}
                >
                  <IconGenerator
                    icon={element?.icon}
                    fill={checkPath(element.path, "icon")}
                  />
                  <p>{t(element.title)}</p>

                  {checkPath(element.path) && (
                    <div className="bg-[var(--main)] w-[6px] h-[32px] rounded-[10px] absolute left-[-3px]"></div>
                  )}
                </NavLink>
              )
          )}
        </div>
      ))}
    </div>
  );
}

export default SidebarSection;
