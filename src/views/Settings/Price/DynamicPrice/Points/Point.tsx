import { ColorConstants } from "../../../../../constants/website";

const PointSelector = ({ step, element = {} }: { step: string; element: any }) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-[18px] border border-[var(--lightGray)] flex items-center p-[14px] space-x-2">
        <div
          className="w-[32px] h-[32px] rounded-full font-medium text-white flex items-center justify-center uppercase"
          style={{
            background: step === "first" ? ColorConstants.darkerGreen : ColorConstants.ink,
          }}
        >
          {element.label.substring(0,2)}
        </div>
        <span className="font-medium">{element.label}</span>
      </div>
    </div>
  );
};

export default PointSelector;
