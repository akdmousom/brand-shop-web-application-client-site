import { useContext } from 'react';
import { userContext } from '../../Utils/AuthContext/AuthProvider';

const Home = () => {
    const {userInfo} = useContext(userContext)
    console.log(userInfo);
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};

export default Home;