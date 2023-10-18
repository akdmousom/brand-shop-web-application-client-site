import { useContext } from "react";
import { userContext } from "../../Utils/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivetRouter = ({children}) => {

    const {user} = useContext(userContext);

    const navigate = useNavigate()

    if (!user) {

        navigate('/login')

        
    }


    return children
};

export default PrivetRouter;