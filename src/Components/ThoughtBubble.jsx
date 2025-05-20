import React from "react";

const ThoughtBubble = ({item, onDrag})=>{
 
    return (
        <div className="thought-bubble"
             draggable
             onDragStart={onDrag}>

            {item.label}
        </div>
        
    )

}
export default ThoughtBubble