import { useContext } from 'react';
import { userContext } from '../../Utils/AuthContext/AuthProvider';
import { UserDataContext } from '../../Utils/UserDataContext/UserData';
import Banner from '../../Components/Header/Banner';


const Home = () => {
    const {userInfo} = useContext(userContext)
    const {userData} = useContext(UserDataContext)
   
    return (
        <div>
            <Banner/>
        </div>
    );
};

export default Home;