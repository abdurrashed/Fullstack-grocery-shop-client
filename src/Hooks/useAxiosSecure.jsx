import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosSecure.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const status = error.response?.status;
            console.log('status error in the intercept', status);

            if (status === 401 || status === 403) {
                await logout();
                navigate('/login');
            }

            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
/*

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


 const axiosSecure=axios.create({

    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate= useNavigate();
    const {logout}=useContext(AuthContext);
    axiosSecure.interceptors.request.use(function(config){
    const token=localStorage.getItem('access-token');

    console.log('request stopped by interceptors',token)
    config.headers.authorization=`Bearer ${token}`;
    return config

    },function(error){

        return Promise.reject(error);
    })
    //intercepts 401 and 403 status 
    axiosSecure.interceptors.response.use(function(response){
     
        return response;

    },async(error)=>{

       const status=error.response.status;
        console.log('status error in the intercept',status)

        if(status ===401||status ===403){
            await logout();

            navigate('/login')
        }
        
        return Promise.reject(error)


    })



    return axiosSecure;
};

export default useAxiosSecure;


*/