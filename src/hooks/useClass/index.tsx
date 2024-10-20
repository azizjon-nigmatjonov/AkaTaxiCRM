import { useQuery } from "react-query";
import carService from "../../services/cars";

export const useClass = () => {
  const { data: classes } = useQuery(["GET_CLASS_LIST_"], () => {
    return carService.getCarClasses();
  });
  
  return { classList: classes?.data, classData: classes?.data }
};
