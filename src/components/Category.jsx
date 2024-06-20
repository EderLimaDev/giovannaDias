
import "./Category.css";
import { useState } from "react";


const colorDefault = {boxShadow: "none"};
const onColorBgChange = {boxShadow: "rgba(0, 0, 0, 1) 0px 30px 60px -12px inset, rgba(0, 0, 0, 1) 0px 18px 36px -18px inset"}

function Category(Props) {
    const [isMouseOver, setMouseOver] = useState(colorDefault);


    return(
        <div>
        
                <div 
                    className="categoryTitleBorder" 
                    style={isMouseOver}
                    onMouseEnter={() => setMouseOver(onColorBgChange)}  
                    onMouseLeave={() => setMouseOver(colorDefault)}>
                    <div className="categoryTitle">
                        <h1>{Props.name}</h1>
                        
                    </div>
              
                </div>
    
            
            
        </div>
    )
}

export default Category;