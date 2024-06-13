import {Skeleton} from '@mui/material';

const CarSkeleton = () => {
    return (
        <div className='grid grid-cols-3 gap-x-5 w-full'>
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
            {/* <div className='space-y-4'>
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            <Skeleton variant="rectangular" style={{width:'100%'}}  height={120} />
            </div> */}
          
        </div>
    )
}

export default CarSkeleton