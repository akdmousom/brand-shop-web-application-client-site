import { useContext } from "react";
import { userContext } from "../../Utils/AuthContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';



const PrivetRouter = ({children}) => {

    const {userInfo, loading} = useContext(userContext);

    const location = useLocation();

    if (loading) {

        return (
            <div className="flex max-w-[1200px] mx-auto justify-center  min-h-screen ">
                <span className="loading loading-ring text-warning loading-lg"></span>
            </div>
        )
        
    }

    if (!userInfo) {

        return <Navigate state={location.pathname} to={'/login'}></Navigate>

        
    }


    return children
};

PrivetRouter.propTypes = {
    children : PropTypes.object.isRequired
}

export default PrivetRouter;