import { useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Section from "./Section";
import Form from './Form'

const Vehicles = () => {
  const { navigateQuery } = usePageRouter();

  const list = useMemo(() => {
    return [
      {
        title: "Malibu 2",
        image: "/images/trash/malibu-2.svg",
      },
      {
        title: "Captiva 4",
        image: "/images/trash/captive-4.svg",
      },
    ];
  }, []);

  const list2 = useMemo(() => {
    return [
      {
        title: "Malibu 1",
        image: "/images/trash/malibu-1.svg",
      },
      {
        title: "Orlando",
        image: "/images/trash/orlando.svg",
      },
      {
        title: "Epica",
        image: "/images/trash/epica.svg",
      },
      {
        title: 'Lasetti',
        image: '/images/trash/lasetti.svg'
      }
    ];
  }, []);

  return (
    <>
      <SectionHeader title="Mashinalar ro‘yxati">
        <div className="flex items-center gap-3">
          <AddButton
            text="new_mark"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>

      <div className="space-y-[18px]">
        <Section list={list} title="Premium mashinalar" />
        <Section list={list2} title="Oddiy mashinalar" />
      </div>

      <Form />
    </>
  );
};

export default Vehicles;
