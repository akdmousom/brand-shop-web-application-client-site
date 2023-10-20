
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError()

    
    return (
        <div className='text-xl md:text-2xl font-bold text-gray-800 grid justify-center items-center h-[80vh]'>
            <div className='grid justify-center text-center items-center gap-4'>
            <div>
            {
                err?.status === 404 ? <h1>{err?.status} Not Found</h1> : <h1>{err?.error?.message}</h1> 
            }
            </div>

           <Link to={'/'}> <button className='btn text-center btn-secondary'>Back To Home</button></Link>
 
            </div>
        </div>
    );
};

export default ErrorPage;