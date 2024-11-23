import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const defaultGratitudeItems = [
 { id: 1, label: "Coffee", icon: "☕" },
 { id: 2, label: "Sun", icon: "🌞" },
 { id: 3, label: "Heart", icon: "❤️" },
 { id: 4, label: "Home", icon: "🏡" },
 { id: 5, label: "Nature", icon: "🌳" },
 { id: 6, label: "Family", icon: "👨‍👩‍👧‍👦" },
];

const Gratitude = () => {
 const [gratitudeItems, setGratitudeItems] = useState(defaultGratitudeItems);
 const [droppedItems, setDroppedItems] = useState([]);
 const [newItemLabel, setNewItemLabel] = useState("");

 const handleAddCustomItem = () => {
  if (newItemLabel.trim()) {
   const newItem = { id: Date.now(), label: newItemLabel, icon: "🖋️" };
   setGratitudeItems((prev) => [...prev, newItem]);
   setNewItemLabel("");
  }
 };
 const handleDrop = (item) => {
  setDroppedItems((prev) => [...prev, item]);
 };

 const handleClearMindfulSpace = () => {
  setDroppedItems([]);
 };

 return (
  <div className="container mt-5">
   <div className="text-center">
    <h1>Mindful Drag-and-Drop Gratitude Board</h1>
    <div className="mb-4">
     <input
      type="text"
      className="form-control mb-2"
      value={newItemLabel}
      onChange={(e) => setNewItemLabel(e.target.value)}
      placeholder="Add your own gratitude item..."
     />
     <button
      className="btn btn-light me-3 btnx my-1"
      onClick={handleAddCustomItem}
     >
      Add Custom Item
     </button>
    </div>
    <div className="row justify-content-center">
     <div className="col-md-2 py-5">
      <h6>Gratitude Icons</h6>
      <div className="remove-link-style ">
       {gratitudeItems.map((item) => (
        <GratitudeItem key={item.id} item={item} />
       ))}
      </div>
     </div>
     <div className="col-md-8">
      <h3>Mindful Space</h3>
      <MindfulSpace onDrop={handleDrop} droppedItems={droppedItems} />
      <button
       className="btn btn-primary m-2 btnx-d delete-btn my-3"
       onClick={handleClearMindfulSpace}
      >
       Clear Mindful Space
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

const GratitudeItem = ({ item }) => {
 const [{ isDragging }, drag] = useDrag(() => ({
  type: "GRATITUDE_ITEM",
  item,
  collect: (monitor) => ({
   isDragging: monitor.isDragging(),
  }),
 }));

 return (
  <div
   ref={drag}
   className={`list-group-item list-group-item-action ${
    isDragging ? "bg-light" : ""
   }`}
   style={{ cursor: "move", fontSize: "24px" }}
  >
   {item.icon} {item.label}
  </div>
 );
};

const MindfulSpace = ({ onDrop, droppedItems }) => {
 const [{ isOver }, drop] = useDrop(() => ({
  accept: "GRATITUDE_ITEM",
  drop: (item) => onDrop(item),
  collect: (monitor) => ({
   isOver: monitor.isOver(),
  }),
 }));

 return (
  <div
   ref={drop}
   className={`border rounded p-5 mt-4 bg-light ${isOver ? "bg-info" : ""}`}
   style={{
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflowY: "auto",
   }}
  >
   {droppedItems.length === 0 && (
    <p className="text-center text-muted">Drop your gratitude here!</p>
   )}
   {droppedItems.map((item, index) => (
    <div
     key={index}
     className="gratitude-item mb-3"
     style={{
      fontSize: "48px",
      animation: "glow-animation 1.5s ease-out infinite",
     }}
    >
     {item.icon} {item.label}
    </div>
   ))}
  </div>
 );
};

export default Gratitude;
