import { EditIcon, ArrowDoubleIcon } from "../../../components/UI/IconGenerator/Svg"
import cls from './style.module.scss';

export const Details = () => {
    return (
        <div className={cls.parent}>
            <p className='text-sm font-medium'>Nomi 1 viloyati</p>
            <div className={cls.edit}>
                <EditIcon fill="black" />
            </div>
            <div className={cls.arrow}>
                <ArrowDoubleIcon />
            </div>
        </div>
    )
}
