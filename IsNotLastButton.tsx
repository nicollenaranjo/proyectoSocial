const IsNotLastButton = (pressedButtons:string,value:string) => {
    if (pressedButtons[pressedButtons.length - 1] === value){
        return false;
    } else if (pressedButtons.includes(value)) {
        return true;
    }
};

export default IsNotLastButton;