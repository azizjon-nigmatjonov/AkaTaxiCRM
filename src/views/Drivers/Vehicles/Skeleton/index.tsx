import {Skeleton} from '@mui/material';

const CarSkeleton = () => {
    return (
        <div className='grid grid-cols-4 gap-5 w-full'>
            <div className='space-y-4'>
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            </div>
            <div className='space-y-4'>
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            </div>
            <div className='space-y-4'>
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            </div>
            <div className='space-y-4'>
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            </div>
          
        </div>
    )
}

export default CarSkeleton