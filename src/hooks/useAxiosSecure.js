import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Contexts/Contexts";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxiosSecure = () => {
  const { user } = use(AuthContext);
  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
        return config;
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [user.accessToken]);

  return axiosInstance;
};
export default useAxiosSecure;
