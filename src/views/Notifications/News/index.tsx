import AddButton from "../../../components/UI/Buttons/AddButton"
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../components/UI/Header"
import { useMemo } from "react"
import CTable from "../../../components/CElements/CTable"
import { useNavigate } from "react-router-dom"

const NewsNotification = () => {
  const navigate = useNavigate()

  const headColumns = useMemo(() => {
    return [
      {
        title: 'xabar'
      },
      {
        title: 'sana'
      }
    ]
  }, [])

  const breadCrumbsItems = useMemo(() => {
    return [
      {
        label: 'Xabarnomalar',
        link: '/notifications/news_notification'
      },
      {
        label: 'Yangiliklar'
      }
    ]
  }, [])


  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbsItems} progmatic={true} type='link' />
      </Header>
      <div className="px-6 flex justify-end">
        <div>
          <AddButton text='Yangi bildirishnoma' onClick={()=> navigate('/notifications/new_notification/add_news')} />
        </div>

      </div>

      <div className="px-6 mt-6">
        <CTable headColumns={headColumns} bodyColumns={[]} />
      </div>
    </>
  )
}

export default NewsNotification