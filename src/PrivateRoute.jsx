import { useContext } from "react";
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children}) => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/login');
        return null;
    }
    return children;
};

export default PrivateRoute;