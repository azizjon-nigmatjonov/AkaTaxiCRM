import { useEffect, useMemo, useState } from "react";
import IconGenerator from "../../IconGenerator";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowIcon } from "../../IconGenerator/Svg";
import cls from "./style.module.scss";

const SidebarSection = () => {
  const location = useLocation();

  const { t } = useTranslation();
  const routes = useSelector((state: any) => state.website.routes);

  const List = useMemo(() => {
    return routes ?? [];
  }, [routes]);

  const [activeIndex, setActiveIndex] = useState(() => {
    const storedIndex = localStorage.getItem("activeAccordionIndex");
    return storedIndex !== null ? parseInt(storedIndex) : -1;
  });

  useEffect(() => {
    localStorage.setItem("activeAccordionIndex", String(activeIndex));
  }, [activeIndex]);

  const toggleAccordion = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={cls.section}>
      <div className="flex flex-col justify-between w-full">
        <div>
          {Object.entries(List)?.map(([key, value]: [string, any], index) => {
            const visibleSidebarItems: any = (value as any).filter(
              (el: any) => el.sidebar
            );

            const isLastItem = index === Object.entries(List).length - 1;

            return visibleSidebarItems.length > 1 ? (
              <div>
                <button
                  className={`accordion ${
                    activeIndex === index ? "active" : ""
                  } flex justify-between items-center w-full`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center space-x-3">
                    <IconGenerator icon={(value as any[])[0].icon} />
                    <span className="text-[var(--black)] font-medium">
                      {t(key)}
                    </span>
                  </div>
                  <div>
                    <ArrowIcon isOpen={activeIndex === index} />
                  </div>
                </button>

                <div
                  className={`panel  ${activeIndex === index ? "show" : ""}`}
                >
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
                                  className={`${
                                    isLastItem ? "mb-2" : ""
                                  } flex gap-2 capitalize menu_link cursor-pointer text-sm font-medium text-[#151515] `}
                                >
                                  <IconGenerator icon={el.icon} />
                                  <span>{el.title}</span>
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

                {!isLastItem && <div className="accordion-line"></div>}
              </div>
            ) : (
              <div className="menus">
                <NavLink
                  to={visibleSidebarItems[0].path}
                  className={`menu_link3 w-full h-[40px] flex items-center gap-x-3 pl-3 capitalize`}
                >
                  <IconGenerator icon={visibleSidebarItems[0].icon} /> {t(key)}
                </NavLink>
                <div className="accordion-line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
