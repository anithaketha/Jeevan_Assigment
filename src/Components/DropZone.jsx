import React from "react";

const DropZone = ({ title, emoji, items, onDrop, type })=>{

  return (
    <div
    className={`drop-zone ${type === 'patient' ? 'light-black' : 'black'}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <h2>{title}</h2>
      <div className="emoji">{emoji}</div>
      <div className="zone-items">
        {items.map((item) => (
          <div
            key={item.id}
            className="zone-item"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}   

export default DropZone;