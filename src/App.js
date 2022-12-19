import './App.css';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "./Components/Modal";
import { ToDo } from "./Components/ToDo";
import { Done } from "./Components/Done";
import { Trash } from "./Components/Trash";

const lists=[
  {
    id: uuidv4(),
    name: "Write Essay",
    isDone:false,
    isTrash:false
  },
  {
    id: uuidv4(),
    name: "One Hour html+CSS Course Online",
    isDone:false,
    isTrash:false
  },
  {
    id: uuidv4(),
    name: "Buy One Way Tickets to San Fransico",
    isDone:false,
    isTrash:false
  },
  {
    id: uuidv4(),
    name: "Go to Gym",
    isDone:false,
    isTrash:false
  },
  {
    id: uuidv4(),
    name: "Buy Groceries",
    isDone:false,
    isTrash:false
  }
]
const btns=[{
  id:"ToDo",
  name:"To Do",
  isActive:true
},
{
  id:"Done",
  name:"Done",
  isActive:false
},
{
  id:"Trash",
  name:"Trash",
  isActive:false
},
]
function App() {
  const [items, setItems] = useState(lists);
  const [Btns,setBtns ] = useState(btns);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuToTrashOpen, setMenuToTrashOpen] = useState(false);
  const [topindex, setindex] = useState(0);
  const [itemid, setitemid] = useState(0);
  const [Modul, setChoose] = useState("ToDo");

  const handlesetindex= (index) => {
    setindex((previndex) => index);
  };

  const handlesetitemid= (id) => {
    setitemid((previd) => id);
  };


  const handleTriggerModal = () => {
    setModalOpen((prevModal) => !prevModal);
  };

  const clickmenu = (index,id) => {
    handlesetindex(index);
    handlesetitemid(id);
    setMenuToTrashOpen( true); //(prevMenu) =>
    
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handlechoosetype = (type) => {
    setBtns(Btns.map(item=>item.id===type? {...item, isActive: true} : {...item, isActive: false} ));
    setChoose(type);
  };

  const handeAddToCart = (item) => {
    if (!item) return;
    const newItem = { id: uuidv4(), name: item,isDone:false, isTrash:false};
    setItems((prevItems) => [...prevItems, newItem]);
    handleCloseModal();
  };

  const handleItemMove = (id) => {
  const oldItem = items.filter((el) => el.id === id)[0];
    const itemIndex = items.findIndex((el) => el.id === id);
    const newItem = { ...oldItem, isTrash: true };

    setItems([
      ...items.slice(0, itemIndex),
      newItem,
      ...items.slice(itemIndex + 1, items.length),
    ]);
  
};
const handleItemMoveBack= (id) => {
  const oldItem = items.filter((el) => el.id === id)[0];
    const itemIndex = items.findIndex((el) => el.id === id);
    const newItem = { ...oldItem, isTrash: false };

    setItems([
      ...items.slice(0, itemIndex),
      newItem,
      ...items.slice(itemIndex + 1, items.length),
    ]);
  
};
const handleItemDelete = (id) => {
  setItems(items.filter(p => p.id !== id));  
};
  const handleItemChecked = (id) => {
  const oldItem = items.filter((el) => el.id === id)[0];
    const itemIndex = items.findIndex((el) => el.id === id);
    const newItem = { ...oldItem, isDone: !oldItem.isDone };

    setItems([
      ...items.slice(0, itemIndex),
      newItem,
      ...items.slice(itemIndex + 1, items.length),
    ]);
  
};
window.onclick = function(event) {
  if (!event.target.matches('.container')) {setMenuToTrashOpen((prevMenu) => false); }
}
  return (
    <>
    <div style={{position: "relative",
width: "1440px",
height: "1000px",

background: "#F1F1F1"}}>
  {isModalOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          handeAddToCart={handeAddToCart}
        />
      )}
       
      <div style={{display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "24px",

                position: "absolute",
                width: "630px",
                height: "84px",
                left: "80px",
                top: "100px"}}>
          <p style={{width: "630px",
height: "38px",

/* Number 34 pt/Bold */

fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "700",
fontSize: "34px",
lineHeight: "38px",
/* identical to box height, or 112% */

display: "flex",
alignItems: "center",

color:"#151517"}}>Simple To Do List</p>
          <p style={{width: "630px",
height: "22px",

/* Body M 16 pt/Medium */

fontFamily: "Inter",
fontStyle: "normal",
fontWeight: "500",
fontSize: "16px",
lineHeight: "22px",
/* identical to box height, or 138% */

display: "flex",
alignItems: "center",

color: "#151517"}}>Today is awesome day. The weather is awesome, you are awesome too!</p>
    </div>  
    <div style={{display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "0px",
                gap: "16px",

                position: "absolute",
                width: "289px",
                height: "40px",
                left: "80px",
                top: "286px",}}>
 {Btns.map((item,index) => ( 
 <button key={item.id} style={{
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 24px",
  gap:"8px",
  width: "87px",
  height: "40px",
  border:"0",
  borderRadius: "100px",  
background: item.isActive?"linear-gradient(0deg, rgba(8, 30, 52, 0.05), rgba(8, 30, 52, 0.05)), rgba(8, 30, 52, 0.42)":"linear-gradient(0deg, rgba(8, 30, 52, 0.05), rgba(8, 30, 52, 0.05)), #F0F0F0"
}} onClick={() =>handlechoosetype(item.id)}>
 <label  style={{width: "36px",
height: "18px",

/* Body S 14 pt/Bold */

fontFamily: "'Inter'",
fontWeight: "600",
fontStyle: "normal",
fontSize: "14px",
lineHeight: "18px",
/* identical to box height, or 129% */
display: "flex",
alignItems: "center",
textAlign: "center",  
color: item.isActive?"#FFFFFF":"#081E34"}}>{item.name}</label></button>
 ))}            
 </div>
  <div>
  <button style={{background: "linear-gradient(0deg, #081E34, #081E34), #F0F0F0",
                  borderRadius: "100px",
                  position: "absolute",
                  width: "52px",
                  height: "52px",
                  left: "1308px",
                  top: "274px"}} onClick={handleTriggerModal}>
    <img src={require("./Images/PlusMath.png")} alt='...'/>
  </button>
  </div>
 <div style={{display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
              gap: "24px",

              position: "absolute",
              width: "1280px",
              height: "54px",
              left: "80px",
              top: "370px"}}>
              <p style={{width: "1280px",
                height: "28px",

                /* Headline M 24 pt/Bold */

                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "28px",
                /* identical to box height, or 117% */

                display: "flex",
                alignItems: "center",

                color: "#151517"}}>{Modul}</p>
                <div style={{width: "1280px",
                    height: "2px",
                    border: "1",
                    borderTop: "2px solid #151517",
                    opacity: "0.2"}}></div>
</div>
{Modul==="ToDo" && (
  <ToDo
  items={items.filter(name => (name.isTrash===false))}
  handleItemMove={handleItemMove}
  clickmenu={clickmenu}
  handleItemChecked={handleItemChecked}
  topindex={topindex}
  itemid={itemid}
  isMenuToTrashOpen={isMenuToTrashOpen}
/> )}
{ Modul==="Done" && (
  <Done
  items={items.filter(name => (name.isDone===true && name.isTrash===false))}
  handleItemMove={handleItemMove}
  clickmenu={clickmenu}
  handleItemChecked={handleItemChecked}
  topindex={topindex}
  itemid={itemid}
  isMenuToTrashOpen={isMenuToTrashOpen}
/> )}
{ Modul==="Trash" && (
  <Trash
  items={items.filter(name => (name.isTrash===true))}
  handleItemMove={handleItemMove}
  clickmenu={clickmenu}
  handleItemChecked={handleItemChecked}
  topindex={topindex}
  itemid={itemid}
  isMenuToTrashOpen={isMenuToTrashOpen}
  handleItemDelete={handleItemDelete}
  handleItemMoveBack={handleItemMoveBack}
/> )
}
  <footer style={{display: "flex",
flexDirection: "column",
alignItems: "flex-end",
padding: "32px 80px",
gap: "32px",

position: "absolute",
width: "1440px",
height: "102px",
left: "0px",
top: "898px",

borderRadius: "32px 32px 0px 0px"}}>
  <div style={{display: "flex",
flexDirection: "row",
alignItems: "flex-start",
padding: "0px",
gap: "860px",

width: "1280px",
height: "38px"}}>
  <div style={{display: "flex",
flexDirection: "row",
alignItems: "center",
padding: "0px",

width: "234px",
height: "38px"}}>
  <button style={{display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
padding: "10px 0px",
gap: "8px",
border:"0",
width: "234px",
height: "38px",

borderRadius: "100px"}}><label style={{width: "234px",
  height: "18px",
  
  /* Body S 14 pt/Medium */
  
  fontFamily: "'Inter'",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "18px",
  /* identical to box height, or 129% */
  
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  
  color: "#081E34"}}>Made with ❤️ at nFactorial in 2022.</label></button>
</div>
<button style={{display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
padding: "10px 0px",
gap: "8px",
border:"0",
width: "180px",
height: "38px",

borderRadius: "100px"}}><label style={{
  width:"180px",
  height: "18px",
  
  /* Body S 14 pt/Medium */
  
  fontFamily: "'Inter'",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "18px",
  /* identical to box height, or 129% */
  
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  
  color: "#081E34",
  
  opacity: "0.5"}}>Credits: icons from Icons8.</label></button>

</div>
</footer>
</div>
    </>
  );
}

export default App;
