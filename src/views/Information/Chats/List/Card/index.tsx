import CCard from "../../../../../components/CElements/CCard";

const Card = ({ element, handleClick = () => {} }:  { element: any, handleClick?: (val?: any) => void }) => {
  return (
    <CCard classes="min-h-[0] p-4 cursor-pointer">
      <div className="flex items-center" onClick={() => handleClick(element.id)}>
        <div>img</div>
        <div className="ml-3">
          <h3 className="text-[var(--black)] font-[600]">{element.name}</h3>
          <p className="text-[var(--black)] mt-2">{element.text}</p>
        </div>
      </div>
    </CCard>
  );
};

export default Card;
