function doSomething(){
    console.log("**** doSomethimg called from newModule.js ************")
}

function againdoSomething(){
    console.log("**** againdoSomethimg called from newModule.js ************")

}

// CRUD - Crerate, Read, Update, Delete

let arr = [];

function createFun(element){
    arr.push(element);
    return arr;
}

function readFun() {
    return arr;
}

function updateFun(index, element) {
    arr[index] = element;
    return arr;
}

function deleteFun(index) {
    arr.splice(index, 1);
    // delete 1 value at given index
    return arr;
}

module.exports = {

    createFun,
    readFun,
    updateFun,
    deleteFun

};