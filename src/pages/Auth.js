import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useAuthCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
};

export default useAuthCheck;
