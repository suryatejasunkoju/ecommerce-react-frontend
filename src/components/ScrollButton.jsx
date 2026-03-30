import { useState } from "react";
import scrollRightImg from "../assets/common/scroll-right.png"


function ScrollButton({ direction }) {
    let classNameList = ['scroll-img'];
    if (direction === 'left') {
        classNameList = [...classNameList, 'left-direction'];
    }
    else if (direction === 'right') {
        classNameList = [...classNameList, 'right-direction'];
    }
    let classStr = classNameList.join(' ');
    let classListStr=classStr.substring(0, classStr.length);
    // console.log("2.classNameListStr=", classListStr);
    
    return (
        // <button className="scroll-img">
            <img src={scrollRightImg} alt="scroll-img" className={classListStr} />
        // </button>
    );
}
export default ScrollButton;