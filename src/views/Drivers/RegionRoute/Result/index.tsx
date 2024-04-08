import { useMemo } from "react";
import CTable from "../../../../components/CElements/CTable";
import { useQuery } from "react-query";
import fileService from "../../../../services/fileService";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import ImageFrame from "../../../../components/ImageFrame";

const Result = () => {
  const { start, end, currentPage } = useGetQueries();

  const { data, isLoading } = useQuery(['GET_TRIPS', start, end, currentPage], () => {
    return fileService.getTrips({ page: currentPage, perPage: 10, from_location_id: start, to_location_id: end })
  })

  console.log(data);

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "userInfo",
        render: (val: any) => val && (
          <>
            <div className="flex items-center space-x-2 py-2">
              <ImageFrame image={val.image} gender={val.gender} />
              <span>{val.full_name}</span>
            </div>
          </>
        )
      },
      {
        title: "Ketish manzil",
        id: "fromStart",
        render: (val: any) => val && (
          <div>
            <p>{val.city}</p>
            <span>{val.district}</span>
          </div>
        )
      },
      {
        title: "Borish manzil",
        id: "fromEnd",
        render: (val: any) => val && (
          <div>
            <p>{val.city}</p>
            <span>{val.district}</span>
          </div>

        )
      },


      {
        title: "Mashina / raqam",
        id: "carInfo",
        render: (val: any) => val && (
          <>
            <p>{val?.name}</p>
            <span className="text-[var(--gray)]">{val?.number}</span>
          </>
        )
      },
      {
        title: "Tel.raqam",
        id: "phone",
        render: (val: any) => val && (
          <p>+{val}</p>
        )
      },

      {
        title: "Status",
        id: "status",
        render: (val: any) => val && (
          <div
            className={
              val == 'canceled'
                ? "text-[var(--error)]" :
                "text-[var(--green)]"

            }
          >
            {val == 'canceled' ? "Noaktiv" : "Aktiv"}
          </div>
        ),
      },
    ];
  }, []);


  const bodyColumns: any = useMemo(() => {
    const list = data?.data ?? []

    const modifiedList = list.map((li: any) => {
      return {
        ...li,
        userInfo: {
          full_name: li.name,
          gender: li.gender,
          image: li.image
        },
        carInfo: {
          name: li.car,
          number: li.car_number
        },
        fromStart: {
          city: li.from_region_name,
          district: li.from_district_name,
        },
        fromEnd: {
          city: li.to_region_name,
          district: li.to_district_name
        }
      };
    });

    return {
      list: modifiedList,
      ...data
    }
  }, [data])


  return (
    <div className="mt-8">
      <div className="flex justify-between mb-[6px]">
        <p className="text-[var(--gray)] text-base font-medium">Natijalar</p>
        <span className="text-[var(--main)] text-base font-medium">
          {bodyColumns.list.length ?? 0} ta haydovchi
        </span>
      </div>

      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns.list}
        count={bodyColumns?.meta?.pageCount}
        disablePagination={false}
        isResizeble={false}
        isLoading={isLoading}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Result;
