import cls from './style.module.scss';
import { HorizontalLineIcon, StartIcon, HomeIcon } from '../../../../../../components/IconGenerator/Svg';
import { FormatTime } from '../../../../../../utils/formatTime';



const Location = ({ data: { price, to_district, to_region, from_district, from_region, id, date } }: { data: any }) => {

  return (
    <div className={cls.card}>
      <div className='flex items-center justify-between'>
        <div>
          <span>Sana</span>
          <p>{FormatTime(date)}</p>
        </div>
        <div>
          <span>ID</span>
          <p>{id}</p>
        </div>
        <div>
          <span>Summa</span>
          <p className={cls.price}>{price} so‘m</p>
        </div>
      </div>

      <div className='flex items-center justify-between mt-7'>
        <div>
          <StartIcon />
          <p className={cls.regionName}>{from_region}</p>
          <span>{from_district}</span>
        </div>
        <div>
          <HorizontalLineIcon />
        </div>
        <div className='flex flex-col items-end'>
          <HomeIcon />
          <p className={cls.regionName}>{to_region}</p>
          <span>{to_district}</span>
        </div>
      </div>
    </div>
  )
}

export default Location

{/* <div className={cls.card}>
        <div className='flex items-center justify-between'>
          <div>
            <span>Sana</span>
            <p>31-dekabr. 2023</p>
          </div>
          <div>
            <span>ID</span>
            <p>AB421847329BYP</p>
          </div>
          <div>
            <span>Summa</span>
            <p className={cls.price}>250,000 so‘m</p>
          </div>
        </div>

        <div className='flex items-center justify-between mt-7'>
          <div>
            <StartIcon />
            <p className={cls.regionName}>Toshkent</p>
            <span>Mirzo Ulug’bek t.</span>
          </div>
          <div>
            <HorizontalLineIcon />
          </div>
          <div className='flex flex-col items-end'>
            <HomeIcon />
            <p className={cls.regionName}>Qashqadaryo</p>
            <span>Shaxrisabz sh.</span>
          </div>
        </div>
      </div> */}