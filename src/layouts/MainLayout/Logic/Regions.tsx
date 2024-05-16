import { memo, useEffect } from "react";
import regionService from "../../../services/regions";
// import { regionActions } from "../../../store/regions";
// import { useDispatch } from "react-redux";

export const RegionData = memo(({ regions }: { regions: any }) => {

    if (!regions?.length) return ""
  
    // const dispatch = useDispatch();
    const GetDisctricts = (array: any) => {
      if (!array) return;
      // const arr = array;
  
    //   const GetVillage = (val: any) => {
    //     if (!val) return [];
    //     const arr = val;
    //     regionService.getVillage().then((response) => {
    //       const villages = response.data ?? [];
    //       for (let l = 0; l < arr.length; l++) {
    //         for (let i = 0; i < arr?.[l].list.length; i++) {
    //           for (let j = 0; j < villages.length; j++) {
    //             if (villages[j].district_id == arr?.[l].list[i].id) {
    //               arr?.[l].list[i].village.push(villages[j]);
    //             }
    //           }
    //         }
    //       }
    //       dispatch(regionActions.setRegions(arr ?? []));
    //     });
    //   };
  
    //   regionService.getDistrict().then((response) => {
    //     const list = response?.data ?? [];
    //     for (let i = 0; i < arr.length; i++) {
    //       for (let j = 0; j < list.length; j++) {
    //         list[j].checked = false;
    //         list[j].village = [];
    //         if (list[j].region_id == arr[i].id) {
    //           arr[i].list.push(list[j]);
    //         }
    //       }
    //     }
    //     GetVillage(arr);
    //     // dispatch(regionActions.setRegions(arr ?? []));
    //   });
    };
  
    const GetRegions = () => {
      regionService.getList().then((regions) => {
        GetDisctricts(
          regions?.data?.map((el: any) => {
            return {
              ...el,
              list: [],
            };
          }) ?? []
        );
      });
    };
  
    useEffect(() => {
      if (!regions?.length) GetRegions();
    }, [regions]);
  
    return "";
  });
  