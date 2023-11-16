import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import SectionHeader from "../../../../components/Sections/Header";

const breadCrumbItems = [
  {
    label: "Haydovchilar ro‘yxati ",
    link: -1,
  },
  {
    label: "Abbos Salimov",
  },
];

const Driver = () => {
  return (
    <>
      <SectionHeader>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </SectionHeader>
    </>
  );
};

export default Driver;
