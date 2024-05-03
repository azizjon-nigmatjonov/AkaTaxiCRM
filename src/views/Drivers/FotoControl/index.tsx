import { useCallback, useMemo } from "react"
import { useQuery } from "react-query"
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../components/UI/Header"
import SectionHeader from "../../../components/UI/Sections/Header"
import usePageRouter from '../../../hooks/useObjectRouter'
import CTable from "../../../components/CElements/CTable"
import ImageFrame from "../../../components/UI/ImageFrame"
// import Date from "./Date"
import driverService from "../../../services/drivers";
import { useGetQueries } from "../../../hooks/useGetQueries"
import { DangerNotification } from "../../../components/UI/IconGenerator/Svg"

const FotoControl = () => {
  const { currentPage, page, q, start, end } = useGetQueries()
  const { navigateQuery, navigateTo } = usePageRouter()

  const { data: fotoControl, isLoading } = useQuery(['FOTO_CONTROL', page, q, start, end], () => {
    return driverService.getFotoContols({ page, q, perPage: 10, create_at: start && end && JSON.stringify([start, end]) })
  })

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Haydovchi", link: '/drivers/main' },
      { label: 'Foto nazorat' }
    ]
  }, [])

  const headColumns = useMemo(() => {
    return [
      {
        title: 'ism familiya', id: 'userInfo', render: (obj: any) => {
          return obj?.full_name ? (
            <div className="flex items-center gap-3">
              <ImageFrame image={obj.image} gender={obj.gender} />
              <div>
                <p>{obj.full_name}</p>
              </div>
            </div>
          ) : (
            ""
          );
        },
      },
      { title: 'viloyat', id: 'region_name' },
      {
        title: "mashina \ raqam", id: 'carInfo', render: (val: any) => val && (
          <div>
            <p >{val.car_name}</p>
            <p className="text-[#858592]">{val.car_number}</p>
          </div>
        )
      },
      {
        title: 'tel.raqam', id: 'phone', render: (val: any) => val && (
          <p>+{val}</p>
        )
      },
      { title: 'muddat', id: 'created_at' },
      {
        title: 'Status',
        id: 'status',
        render: (val: any) => val && (
          <div className="flex items-center justify-center">
            {val == 'created' ? <DangerNotification /> : <p className="text-red-500">-</p>}
          </div>
        )
      },

      {
        title: '',
        id: 'actions',
        permission: ["learn_more", "edit", "delete"]
      }
    ]
  }, [])

  const bodyColumns: any = useMemo(() => {
    if (!fotoControl?.data) return [];

    let list: any = fotoControl

    return {
      list: list.data?.map((val: any) => {
        return {
          ...val,
          carInfo: {
            car_name: val.car_name,
            car_number: val.car_number
          },
          userInfo: {
            image: val.user_image,
            gender: val.gender,
            full_name: val.full_name
          }
        }
      }),
      ...list
    }

  }, [fotoControl])

  const handlerActions = useCallback((_: any, element: any) => {
    navigateTo(`/drivers/fotocontroluser?id=${element.id}`)
  }, [])

  const handleSearch = (evt: string) => {
    navigateQuery({ q: evt })
  }

  return (
    <>
      <Header sticky={true} >
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
      </Header>

      <div className="px-6">
        <SectionHeader handleSearch={handleSearch}>
          {/* <Date /> */}
        </SectionHeader>

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns?.list}
          count={bodyColumns?.meta?.pageCount}
          handleActions={handlerActions}
          isLoading={isLoading}
          currentPage={currentPage}
        />
      </div>



    </>
  )
}

export default FotoControl