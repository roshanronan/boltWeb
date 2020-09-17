import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./sigCanvas.css";
import { Height } from "@material-ui/icons";

function SigCanvas() {
  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url
  const [btndislpay,setBtnDisplay] = useState(false)

  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  const save = () =>{
    setBtnDisplay(true)
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  }
    

  return (
    <div className="signContainer">

      <Popup
        modal
        trigger={<button style={btndislpay==true?{display:"none"}:{}}>Open Signature Pad</button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <div style={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           <SignaturePad
              ref={sigCanvas}
              // style={{width:"500px",height:"300px",backgroud:"red"}}
              canvasProps={{
                className: "signatureCanvas"
              }}
            />

           
            {/* Button to trigger save canvas image */}
            <div style={{display:"flex",flexDirection:"column"}}>
            <button style={{marginBottom:"5px"}} onClick={save}>Save</button>
            <button style={{marginBottom:"5px"}} onClick={clear}>Clear</button>
            <button onClick={close}>Close</button>
            </div>
          </div>
        )}
      </Popup>
      <br />
      <br />
      {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
      {imageURL ? (
        <div style={{display:"flex",width:"100%",height:"auto",justifyContent:"flex-end"}}>
          <img
          src={imageURL}
          alt="my signature"
          style={{
            // display: "block",
            marginTop: "-50px",
            // border: "1px solid black",
            width: "150px",
            height:"150px",
            objectFit:"contain"
          }}
        />
        </div>
      ) : null}
    </div>
  );
}

export default SigCanvas;
