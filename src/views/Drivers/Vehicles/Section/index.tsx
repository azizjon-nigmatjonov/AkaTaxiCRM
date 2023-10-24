import CCard from "../../../../components/CElements/CCard";
import Card from "./Card";
import usePageRouter from "../../../../hooks/useObjectRouter";
import SkeletonCard from "./SkeletonCard";

interface Props {
  list: any;
  isLoading?: boolean;
}

const Section = ({ list = [], isLoading = false }: Props) => {
  const { navigateTo } = usePageRouter();

  return (
    <>
      {!isLoading && (
        <div className="grid grid-cols-3 gap-[18px]">
          {list.map((element: any, index: number) => (
            <div
              key={index}
              onClick={() => navigateTo(`/drivers/car/${index}`)}
              className="cursor-pointer"
            >
              <Card element={element} />
            </div>
          ))}
        </div>
      )}
      {isLoading && <SkeletonCard />}
    </>
  );
};

export default Section;
