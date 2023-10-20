import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const UserDataContext = createContext(null);
const UserData = ({children}) => {

    const [userData, setUserData] = useState([]);
    const [cartLength, setCartLength] = useState(null);

    useEffect(()=> {
        const get = async () => {

            const response = await fetch('https://brand-shop-backend-ejo139ky4-arijit-kumar-das-projects.vercel.app/users')
            const data = await response.json()
            setUserData(data)

        }
        get()
    },[])

    const data = {
        userData,
        setCartLength,
        cartLength

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