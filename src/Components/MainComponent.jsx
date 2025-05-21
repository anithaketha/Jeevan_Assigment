import React from "react";
import { useState } from "react";

import Header from "./Header";
import DropZone from "./DropZone";
import Button from "./Button";
import ThoughtBubble from "./ThoughtBubble";

const MainComponent = () =>{
    const [dragItem , setDragItem] = useState(null)
    const [category, setCategory] = useState({patient: [], impatient : []})

    const investmentItems = [
        { id: 1, label: "Holds for years", type: "patient" },
        { id: 2, label: "Ignores short-term loss", type: "patient" },
        { id: 3, label: "Quick exit", type: "impatient" },
        { id: 4, label: "Buy more during bad times", type: "patient" },
        { id: 5, label: "Checks stock prices daily", type: "impatient" },
        { id: 6, label: "Jumps between investments", type: "impatient" },
    ]

    const handleDrop = (categoryType) => {
    if (dragItem && !category[categoryType].some(item => item.id === dragItem.id)) {
      setCategory(prev => ({
        ...prev,
        [categoryType]: [...prev[categoryType], dragItem],
      }));
    }
    setDragItem(null);
    };

    const handleSubmit = () =>{
        alert("Submitted 🎉")
        setCategory({patient: [], impatient : []})
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

            <div className="drop-container">
                <DropZone
                title="Patient"
                emoji="🙂"
                items={category.patient}
                type="patient"
                onDrop={() => handleDrop("patient")}
                />
                <DropZone
                title="Impatient"
                emoji="😠"
                items={category.impatient}
                type="impatient"
                onDrop={() => handleDrop("impatient")}
                />
            </div>
      
            <Button label = "Continue" onClick = {()=> handleSubmit()}/>
        </div>

    )
}
export default MainComponent;