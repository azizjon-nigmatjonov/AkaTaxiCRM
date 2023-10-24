import CProgress from "../../../../components/CElements/CProgress";

interface Props {
  all?: number;
  current?: number
}

const Progress = ({ all = 0, current = 0 }: Props) => {
  return (
    <div>
      <div className="text-[var(--gray))] flex justify-between mb-2">
        <p>Jarayondagilar</p>
        <span>{(current / all) * 100}%</span>
      </div>

      <CProgress percent={(current / all) * 100} />
    </div>
  );
};

export default Progress;
