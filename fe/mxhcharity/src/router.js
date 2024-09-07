import { Component } from "react";
import { ROUTERS } from "./utils/router";
import Homepage from "./pages/user/homepage";
import { Routes, Route} from "react-router-dom";
import React  from 'react';

const renderUserRouter = () => {
    const userRouters = [{
        path: ROUTERS.USER.HOME,
        component: <Homepage/>,
},
];
return(
    <Routes>
        {userRouters.map((item, key) => ( 
            <Route key={key} path={item.path} element = {item.component}/> ))}
    </Routes>
);
};
const RouterCustom = () => {

    return renderUserRouter() ;

};
export default RouterCustom;