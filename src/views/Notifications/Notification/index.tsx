import { useMemo } from "react"
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../components/UI/Header"
import CTabs from "../../../components/CElements/CTab"
import AddButton from "../../../components/UI/Buttons/AddButton"
import { useNavigate } from "react-router-dom"
import CTable from "../../../components/CElements/CTable"
import { FetchFunction, headColumns } from "./Logic"

const tabList = [
  {
    slug: 'passengers',
    name: 'Yo’lovchi'
  },
  {
    slug: 'drivers',
    name: 'Haydovchi'
  }
]

const Notification = () => {
  const navigate = useNavigate()
  const { bodyColumns } = FetchFunction()
  const breadCrumbItems = useMemo(() => {
    return [
      {
        label: 'Xabarnomalar', link: '/notifications/notification'
      },
      {
        label: 'Bildirishnomalar'
      }
    ]
  }, [])



  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbItems} type="link" />
      </Header>

      <div className="px-5 flex justify-between mb-5">
        {/* <CTabs tabList={tabList} /> */}
        <div></div>
        <div>
          <AddButton text='Yangi bildirishnoma' onClick={() => navigate('/notifications/notification/add_notification')} />
        </div>
      </div>

      <section className="px-6">
        <CTable headColumns={headColumns} bodyColumns={bodyColumns} />
      </section>
    </>
  )
}

export default Notification