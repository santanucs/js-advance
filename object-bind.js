const mainObj = {
    x: 5,
    displayX: function() {
        console.log(this.x);
    }
}


var displayXLocal = mainObj.displayX;
displayXLocal();
var bindDisplay = displayXLocal.bind(mainObj);
bindDisplay();


function mainObjFunc(){
    this.x = 10;
    this.displayX = function() {
        console.log(this.x);
    }
}


const newMainObjFunc = new mainObjFunc();
const newMainObjFunc_member = newMainObjFunc.displayX
const bind_newMainObjFunc_member = newMainObjFunc.displayX.bind(newMainObjFunc);
bind_newMainObjFunc_member();


function alterMainFunc(){
    mainObjFunc.call(this);
}

const objalterMainFunc = new alterMainFunc();

objalterMainFunc.displayX();


