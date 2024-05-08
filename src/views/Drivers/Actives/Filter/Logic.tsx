import usePageRouter from "../../../../hooks/useObjectRouter";

export const CustomFunctions = () => {
  const { navigateQuery } = usePageRouter();
  const handleRegion = (evt: any) => {
    navigateQuery({ region_id: evt });
  };

  const handleGender = (evt: any) => {
    navigateQuery({ gender: evt });
  };

  const handleCarModel = (evt: any) => {
    navigateQuery({ car_model_id: evt });
  };

  return { handleRegion, handleGender, handleCarModel };
};
