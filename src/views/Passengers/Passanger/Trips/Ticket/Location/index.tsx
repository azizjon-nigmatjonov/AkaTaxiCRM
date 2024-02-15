import cls from './style.module.scss';
import { HorizontalLineIcon, StartIcon, HomeIcon} from '../../../../../../components/IconGenerator/Svg';

const Location = () => {
  return (
    <div className='flex'>
      <div className={cls.card}>
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
      </div>
    </div>
  )
}

export default Location