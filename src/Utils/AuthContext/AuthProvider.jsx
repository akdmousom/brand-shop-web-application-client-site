import React, { createContext} from 'react';
import PropTypes from 'prop-types';

export const userContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = React.useState(null);









    const contextValue = {
        user,

    }

    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.object.isRequired
}

export default AuthProvider;