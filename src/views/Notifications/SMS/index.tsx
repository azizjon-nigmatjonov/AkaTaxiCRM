import { useMemo } from "react"
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../components/UI/Header"
import CTabs from "../../../components/CElements/CTab"
import AddButton from "../../../components/UI/Buttons/AddButton"
import CTable from "../../../components/CElements/CTable";
import { useNavigate } from 'react-router-dom'

const tabList = [
  {
    slug: '',
    name: 'Push xabar'
  },
  {
    slug: 'sms_message',
    name: 'SMS xabarnoma'
  },
 
]

const SMSNotification = () => {
  const navigate = useNavigate()

  const breadCrumbItems = useMemo(() => {
    return [
      {
        label: 'Xabarnomalar', link: '/notifications/notification',
      },
      {
        label: 'SMS xabarnoma'
      }
    ]
  }, [])

  const headColumns = useMemo(() => {
    return [
      {
        title: 'Kimga',

      },
      {
        title: 'xabar'
      },
      {
        title: 'Sana'
      },
      {
        title: 'Status'
      }
    ]
  }, [])

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbItems} type="link" progmatic={true} />
      </Header>
      <div className="flex items-center justify-between px-6">
        <CTabs tabList={tabList} />
        <div>
          <AddButton text='Yangi xabar' onClick={() => navigate('/notifications/smsnotification/add_sms')} />
        </div>
      </div>

      <div className="px-6">
        <CTable headColumns={headColumns} bodyColumns={[]} />
      </div>
    </>
  )
}

export default SMSNotification