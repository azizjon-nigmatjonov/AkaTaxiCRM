import CProgress from "../../../../components/CElements/CProgress";

interface Props {
  all?: number;
  current?: number
}

const Progress = ({ all = 0, current = 0 }: Props) => {


  if (all === 0 || current === 0) {
    return (
      <div>
        <div className="text-[var(--gray))] flex justify-between mb-2">
          <p>Jarayondagilar</p>
          <span>0%</span>
        </div>
        <CProgress percent={0} />
      </div>
    )

  }


  return (
    <div>
      <div className="text-[var(--gray))] flex justify-between mb-2">
        <p>Jarayondagilar</p>
        <span>{((current / all) * 100).toFixed(0)}%</span>
      </div>

      <CProgress percent={(current / all) * 100} />
    </div>
  );
};

export default Progress;
