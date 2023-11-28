// import { useQuery } from "react-query";
import CCard from "../../../components/CElements/CCard";
// import authService from "../../../services/auth/authService";
import CImageUpload from "../../../components/CElements/CImageUpload";

const ProfilePage = () => {
//   const { data: user } = useQuery(
//     ["GET_ADMINS"],
//     () => {
//       return authService.getUserInfo();
//     },
//     {
//       enabled: true,
//     }
//   );

  return (
    <CCard style={{ minHeight: "auto" }}>
      <div>
        <CImageUpload />
      </div>
    </CCard>
  );
};

export default ProfilePage;
