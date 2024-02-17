import cls from './style.module.scss';

const Result = ({ status }: { status?: any }) => {
  const classes = [cls.main, `${status == 'done' ? 'bg-[var(--green)]': status == 'canceled_by_driver' ? 'bg-[var(--error)]': status == 'canceled_by_client' ? 'bg-[var(--gray)]' : 'bg-[var(--black)]' }`].join(' ')

 
  return (
    <div className={classes}>
      <p>{status == 'canceled' ? 'Bekor qilindi!' : 'Yakunlandi!'}</p>
    </div>
  )
}

export default Result