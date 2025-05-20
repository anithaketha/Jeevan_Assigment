import React from "react";

import Header from "./Header";
import Button from "./Button";

const MainComponent = () =>{
    const handleSubmit = () =>{
        alert("Submitted")
    }
    return (
        <div className="main-container">

            <Header/>
            <Button label = "Continue" onClick = {()=> handleSubmit()}/>

        </div>

    )
}
export default MainComponent;