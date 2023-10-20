import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext(null);
const UserData = ({children}) => {

    const [userData, setUserData] = useState([]);
    const [cartLength, setCartLength] = useState(null);

    useEffect(()=> {
        const get = async () => {

            const response = await fetch('http://localhost:5000/users')
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

export default UserData;