import React from "react";
import { useState } from "react";

import Header from "./Header";
import Button from "./Button";
import ThoughtBubble from "./ThoughtBubble";

const MainComponent = () =>{
    const [dragItem , setDragItem] = useState(null)

    const investmentItems = [
        { id: 1, label: "Holds for years", type: "patient" },
        { id: 2, label: "Ignores short-term loss", type: "patient" },
        { id: 3, label: "Quick exit", type: "impatient" },
        { id: 4, label: "Buy more during bad times", type: "patient" },
        { id: 5, label: "Checks stock prices daily", type: "impatient" },
        { id: 6, label: "Jumps between investments", type: "impatient" },
    ]



    const handleSubmit = () =>{
        alert("Submitted")
    }

    return (
        <div className="main-container">
            <Header/>

            <div className="bubble-container">
            {investmentItems.map((investmentItem) => (
                <ThoughtBubble key = {investmentItem.id}
                              item = {investmentItem}
                              onDrag = {()=> setDragItem(investmentItem)}

                />
            ))}
            </div>
            <p className="tap-drop-text">(Tap and Drop)</p>
    
            <Button label = "Continue" onClick = {()=> handleSubmit()}/>
        </div>

    )
}
export default MainComponent;