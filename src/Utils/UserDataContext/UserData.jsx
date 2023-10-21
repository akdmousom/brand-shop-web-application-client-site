import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const UserDataContext = createContext(null);
const UserData = ({children}) => {

    const [userData, setUserData] = useState([]);
    const [cartLength, setCartLength] = useState(null);
    const [waitFetch, setWaitFetch] = useState(true)

    useEffect(()=> {
        const get = async () => {

            const response = await fetch('https://brand-shop-backend-hia9widhl-arijit-kumar-das-projects.vercel.app/users')
            const data = await response.json()
            setUserData(data)
            setWaitFetch(false)

        }
        get()
    },[])

    const data = {
        userData,
        setCartLength,
        cartLength,
        setWaitFetch,
        waitFetch,
        

    }
    return (
        <UserDataContext.Provider value={data}>
            {children}
        </UserDataContext.Provider>
    );
};

UserData.propTypes ={
    children: PropTypes.object.isRequired,
}

export default UserData;