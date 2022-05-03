import { useSelector } from "react-redux";
import React from "react";

function User() {
    // permets de récuperer le state du store    
    const {datas} = useSelector(state=> (state.userReducer));
    console.log(datas);
    return datas.map((user) => {
        return (
            <p key={user.id}> id : {user.id}, {user.alias}, {user.hobby}</p>
        );
    });
}

export default User;
