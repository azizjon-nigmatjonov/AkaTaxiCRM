import cls from './style.module.scss';

const Result = ({ status }: { status?: any }) => {
  const classes = [cls.main, `${status == 'done' ? 'bg-[var(--green)] text-white': status == 'canceled_by_driver' ? 'bg-[var(--error)] text-white': status == 'canceled_by_client' ? 'bg-[var(--gray)] text-white' : 'bg-white text-red-500' }`].join(' ')

 
  return (
    <div className={classes}>
      <p>{status == 'canceled' ? 'Topilmadi !' : status == 'done' ? 'Yakunlandi!': 'Bekor qilindi!'}</p>
    </div>
  )
}

export default Result