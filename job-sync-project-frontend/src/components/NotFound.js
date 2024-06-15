import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <p>404 - Page Not Found</p>
            <Link to="/">Homepage - Link</Link>
            <br></br>
            <br></br>
        </div>
    );
};

export default NotFound;
