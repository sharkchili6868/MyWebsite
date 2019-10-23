import React, { Fragment } from 'react';
import Header from "../Header/Header";
import Content from "../Content/Content";

const MainDashBoard = () => {
    return (
        <Fragment>
            <Header direction="/project" name="Projects"/>
            <Content/>
        </Fragment>
    )
};

export default MainDashBoard;