import cls from './style.module.scss';
import { PassengerManIcon, PassangerFemaleIcon } from '../../components/IconGenerator/Svg';
import usePageRouter from '../../hooks/useObjectRouter';

interface Props {
  data: any,
  item?: any,
  clickHandle?: (val: any) => void
}

const Places = ({ data, item, clickHandle = () => { } }: Props) => {
  const { navigateQuery } = usePageRouter();
  let front = data ? data?.slice(0, 1) : []
  let back = data ? data?.slice(1, 6) : []

  const handleClick = () => {
    navigateQuery({ id: item.id })
    clickHandle(item)
  }

  return (
    <div className='max-w-[55px] w-full ' onClick={handleClick}>
      {front.map((val: any) => (
        <div className={cls.front}>
          <div className={`${cls.seat} ${val.gender != 'false' ? val.reserved ? cls.user : cls.driver : cls.empty}`}>
            {val.gender != 'false' ? val.gender == 'm' ? <PassengerManIcon /> : <PassangerFemaleIcon /> : null}
          </div>
        </div>
      ))}
      <div className={cls.back}>
        {back.map((val: any) => (
          <div className={`${cls.seat} ${val.gender != 'false' ? val.reserved ? cls.user : cls.driver : cls.empty}`}>
            {val.gender != 'false' ? val.gender == 'm' ? <PassengerManIcon /> : <PassangerFemaleIcon /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Places