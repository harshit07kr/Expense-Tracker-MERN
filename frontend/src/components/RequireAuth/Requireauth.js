import { Navigate } from "react-router-dom";
import useAuthStore from "../../context/AuthStore"
import { useEffect } from "react";
export default function Requireauth(props) {
    const store = useAuthStore();

    useEffect(()=>{
        if(store.loggedIn===null){
            store.checkAuth();
        }
    })

    if(store.loggedIn===null){
        return <div>loading</div>
    }

    if(store.loggedIn===false){
        return <Navigate to="/login" />
    }
  return (
    <div>{props.children}</div>
  )
}
