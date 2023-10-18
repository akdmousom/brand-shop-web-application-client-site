import { useContext } from 'react';
import { userContext } from '../../Utils/AuthContext/AuthProvider';
import { UserDataContext } from '../../Utils/UserDataContext/UserData';


const Home = () => {
    const {userInfo} = useContext(userContext)
    const {userData} = useContext(UserDataContext)
   
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};

export default Home;