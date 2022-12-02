import { useState } from "react";

export const Modal = ({ handleCloseModal, handeAddToCart }) => {
  const [item, setItem] = useState("");

  const handleChangeItem = (event) => {
    setItem(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "16px",
        gap: "10px",

        position: "absolute",
        width: "268px",
        height: "234px",
        left: "1015px",
        top: "92px",

        background: "#E4E6E7",
        boxSadow: "0px 4px 4px rgba(0, 0, 0, 0.16)",
        borderRadius: "12px"
      }}
    >
      <p style={{width: "236px",
        height: "22px",
        /* Body M 16 pt/Bold */
        fontFamily: "'Inter'",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "22px",
        /* identical to box height, or 138% */
        display: "flex",
        alignItems: "center",
        color: "#151517"}}>Add New To Do</p>
      <textarea  style={{width:"236px",
            height: "120px",
            padding: "13px 13px 100px",
            overflow : "hidden",
            border: "none",
            background: "#FFFFFF",
            borderRadius: "8px"}}
            placeholder="Your text" value={item} onChange={handleChangeItem}/>

        <button style={{ display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0px",
                justifyContent: "center",
                width: "76px",
                height: "40px",

                background: "linear-gradient(0deg, #081E34, #081E34), #FFFBFE",
                borderRadius: "100px"}}
                 onClick={() => handeAddToCart(item)}>
          <label style={{width: "28px",
                        height: "18px",
                        
                        /* Body S 14 pt/Bold */

                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "14px",
                        lineHeight: "18px",
                        /* identical to box height, or 129% */

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        textAlign: "center",
                        color: "#FFFFFF"}}>
                         Add</label>
        </button>
    </div>
  );
};