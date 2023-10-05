import CCard from "../../../../../../components/CElements/CCard";

const CardElement = ({
  element,
  direction
}: {
  element: { region: string; district: string };
  direction: string
}) => {
  return (
    <CCard style={{ minHeight: 0, borderRadius: "14px", padding: "14px" }}>
      <div className="flex items-center space-x-2">
        <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-white font-[500] uppercase ${direction === 'go' ? 'bg-[var(--ink)]' : 'bg-[var(--darkerGreen)]'}`}>
          {element.region.substring(0, 2)}
        </div>

        <div>
          <h3 className="font-[600]">{element.region}</h3>
          <p className="text-[var(--gray)] text-[12px] uppercase">
            {element.district}
          </p>
        </div>
      </div>
    </CCard>
  );
};

export default CardElement;
