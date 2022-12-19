import './Trash.css';
export const Trash = ({items,clickmenu,handleItemChecked,topindex,itemid,isMenuToTrashOpen,handleItemDelete,handleItemMoveBack}) => {
    return (
      <>
      <div>
  <ul style={{ display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "16px",
                position: "absolute",
                listStyleType:"none",
                width: "654px",
                height: "184px",
                left: "56px",
                top: "468px" }}>
                
   {items.map((item,index) => (   
  <li key={item.id}>
  <div className="container" onClick={() =>clickmenu(index,item.id)}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
    <input   onClick={() => handleItemChecked(item.id)} style={{ boxSizing: "border-box",
                  position: "absolute",
                  width: "16px",
                  height: "16px",
                  left: "24px",
                  top: `${40*index+4}px`,
                  border: "1.4px solid #AEAEAE",
                  borderRadius: "4px"
                  }}           
   type="checkbox" defaultChecked={item.isDone}></input><p style={{textDecoration: item.isDone ? "line-through" : "",position: "absolute",left: "50px",top: `${40*index}px`,}}>{item.name}</p></li> 
   ))} 
  </ul>
  </div>
  {isMenuToTrashOpen && (
 <div>
 <div style={{display: "flex",
             flexDirection: "column",
             alignItems: "flex-start",
             padding: "12px 0px 12px 4px",
             gap: "10px",
 
             position: "absolute",
             width: "240px",
             height: "48px",
             left: "56px",
             top:`${40*topindex+504}px`,
 
             background: "#E4E6E7",
             boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.16)",
             borderRadius: "12px"}} >
 <div style={{display: "flex",
             flexDirection: "row",
             justifyContent: "center",
             alignItems: "flex-start",
             padding: "0px",
             gap: "12px",
 
             width: "236px",
             height: "24px"}} onClick={() => handleItemDelete(itemid)}>
      
 <img src={require("../Images/Icon.png")} alt='...'/>
 <p style={{width: "200px",
 height: "24px",
 
 /* Body S 14 pt/Medium */
 
 fontFamily: "'Inter'",
 fontStyle: "normal",
 fontWeight: "500",
 fontSize: "14px",
 lineHeight: "18px",
 /* or 129% */
 
 display: "flex",
 alignItems: "center",
 
 color: "#353535"}}>Delete Forever</p>
 </div>
 </div>
 <div style={{display: "flex",
             flexDirection: "column",
             alignItems: "flex-start",
             padding: "12px 0px 12px 4px",
             gap: "10px",
 
             position: "absolute",
             width: "240px",
             height: "48px",
             left: "56px",
             top:`${40*topindex+538}px`,
 
             background: "#E4E6E7",
             boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.16)",
             borderRadius: "12px"}} >
 <div style={{display: "flex",
             flexDirection: "row",
             justifyContent: "center",
             alignItems: "flex-start",
             padding: "0px",
             gap: "12px", 
             width: "236px",
             height: "24px"}} onClick={() => handleItemMoveBack(itemid)}>
      
 <img src={require("../Images/MoveBack.png")} alt='...'/>
 <p style={{width: "200px",
 height: "24px",
 
 /* Body S 14 pt/Medium */
 
 fontFamily: "'Inter'",
 fontStyle: "normal",
 fontWeight: "500",
 fontSize: "14px",
 lineHeight: "18px",
 /* or 129% */
 
 display: "flex",
 alignItems: "center",
 
 color: "#353535"}}>Move  Back To To Do</p>
 </div>
 </div>
 </div>)
}</>)}