import cls from "./style.module.scss";

const PageFallback = () => {
  return (
    <div className={cls.fallbackPage}>
      Loading...
    </div>
  );
};

export default PageFallback;
