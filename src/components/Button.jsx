import Button from '@mui/material/Button';
import { useState } from "react";

export default function ButtonStyled(){

    const [hover, setHover] = useState(false);

    function onMouseOver() {
      return  setHover(true);
    }

    function onMouseOut() {
        return setHover(false);
    }


    return(

        <Button 
            onMouseEnter={onMouseOver} 
            onMouseLeave={onMouseOut} 
            style={ hover 
            ? 
            {color: "#ffff", border: "1px solid #ff5757", padding: "10px", margin: "0 10%", fontSize:"1rem", background:"#ff5757"}
            : 
            {color: "#ff5757", border: "1px solid #ff5757", padding: "10px", margin: "0 10%", fontSize:"1rem"}}
                
                
                variant="outlined" 
                size="large"       
                >
                Entre em Contato
        </Button>

    )
}
