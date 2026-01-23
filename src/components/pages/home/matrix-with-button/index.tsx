import HyprBox from "@/components/hypr-box";
import { useState } from "react";
import MatrixBg from "../matrix";
import { showMatrixBtnStyle, btnContainerStyle, titleStyle, containerStyle } from "./styles";

export default function MatrixWithButton() {
    const [isMatrixVisible, setIsMatrixVisible] = useState(false);

    return (
        <HyprBox
            active1='rgba(10, 100, 100, 1)'
            active2='rgba(0, 30, 30, 1)'
            size='lean'
            className={containerStyle}
        >
            <div className={btnContainerStyle}>
                {!isMatrixVisible &&
                    <button onClick={() => setIsMatrixVisible(!isMatrixVisible)} className={showMatrixBtnStyle}>
                        Click me... Come on... Do it...
                    </button>}
                {isMatrixVisible &&
                    <h5 className={titleStyle}>
                        Wow. You actually pressed it. You crazy person, you.
                    </h5>}
            </div>

            {isMatrixVisible && <MatrixBg />}
        </HyprBox>
    );
};
