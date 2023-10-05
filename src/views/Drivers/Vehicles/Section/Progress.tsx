import CProgress from "../../../../components/CElements/CProgress";

const Progress = () => {
  return (
    <div>
      <div className="text-[var(--gray))] flex justify-between mb-2">
        <p>Jarayondagilar</p>
        <span>12%</span>
      </div>

      <CProgress />
    </div>
  );
};

export default Progress;
