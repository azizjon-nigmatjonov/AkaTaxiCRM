import cls from "./style.module.scss";
import { useEffect, useMemo, useState } from "react";
import IconGenerator from "../../IconGenerator";
// import usePageRouter from "../../../hooks/useObjectRouter";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowIcon } from "../../IconGenerator/Svg";
import UserInfo from "../../../components/Header/UserInfo";



const SidebarSection = () => {
  // const { checkPath } = usePageRouter();

  const { t } = useTranslation();
  const routes = useSelector((state: any) => state.website.routes);

  const List = useMemo(() => {
    return routes ?? [];
  }, [routes]);

  console.log(List);




  const [activeIndex, setActiveIndex] = useState(() => {
    const storedIndex = localStorage.getItem('activeAccordionIndex');
    return storedIndex !== null ? parseInt(storedIndex) : -1;
  })
  const [activePage, setActivePage] = useState<string | null>(null);


  useEffect(() => {
    localStorage.setItem('activeAccordionIndex', String(activeIndex))

  }, [activeIndex]);


  const toggleAccordion = (index: any) => {
    setActiveIndex(prevIndex => prevIndex === index ? -1 : index);
  };


  useEffect(() => {
    const savedActivePage = localStorage.getItem('activePage');
    if (savedActivePage) {
      setActivePage(savedActivePage);
    }

  }, [])

  const handleItemClick = (element: any) => {
    setActivePage(element.path)
    localStorage.setItem('activePage', element.path);
  }






  return (
    <div className={cls.section}>



      <div className="mt-[10px] flex flex-col justify-between side">
        <div>
          {Object.entries(List)?.map(([key, value]: [string, any], index) => {

            const visibleSidebarItems: any = (value as any).filter((el: any) => el.sidebar)

            const isLastItem = index === Object.entries(List).length - 1;

            return visibleSidebarItems.length > 1 ? (

              <div className="ml-[15px]">
                <button
                  className={`accordion  ${activeIndex === index ? 'active' : ''} flex justify-between items-center max-w-[280px]`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-3">
                    <IconGenerator icon={(value as any[])[0].icon} />
                    <span className="text-[var(--black)] font-medium">{t(key)}</span>
                  </div>
                  <div>
                    <ArrowIcon isOpen={activeIndex === index} />
                  </div>
                </button>
                <div className={`panel  ${activeIndex === index ? 'show' : ''}`}>
                  {Object.values(value as keyof typeof value)?.map((el: any, i, arr) => {
                    const isLastItem = i === arr.length - 1;

                    // console.log(el.path);


                    if (el.title && el.title.trim() !== '') {
                      return (
                        el.sidebar && (
                          <>
                            <NavLink key={el.id} to={el.path} className={`${i < 100 ? 'steps__item steps__item--active' : 'steps__item'} flex items-center steps`}>
                              <p onClick={() => handleItemClick(el)} className={`${isLastItem ? 'mb-2' : ''} flex gap-2 capitalize menu_link cursor-pointer text-sm font-medium text-[#151515] ${el.path === activePage ? 'active' : ''}`}>
                                <IconGenerator icon={el.icon} />
                                <span>{el.title}</span>
                              </p>
                            </NavLink>
                          </>
                        )
                      )
                    } else {
                      return null
                    }
                  })}
                </div>
                {!isLastItem && <div className="accordion-line"></div>}
              </div>
            ) : <NavLink to={visibleSidebarItems[0].path}>

              <div className={`flex items-center ml-10 gap-3 mt-4 mb-4 capitalize`}>
                <IconGenerator icon={visibleSidebarItems[0].icon} /> {t(key)}
              </div>
              <div className="accordion-line"></div>
            </NavLink>
          })}
          {/* <div className="mt-5">
          <NavLink to="/views/Drivers/Map">map</NavLink>
          </div> */}
        </div>
        <div className="ml-8 mb-8 ">
          <UserInfo />
        </div>

      </div>


    </div>
  );
};

export default SidebarSection;
