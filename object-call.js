function parentClass(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = function(){
        console.log(this.firstName+' '+this.lastName);
    }
}

function createName(){
    parentClass.call(this, 'Santanu', 'Dutta');
    this.anotherdisplayName = function(){
        console.log(this.firstName+' '+this.lastName);
    }
}

const objCreateName = new createName();

console.log(objCreateName.firstName);
objCreateName.displayName();
objCreateName.anotherdisplayName();