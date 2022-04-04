function promiseFunc(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(20)
        }, 2000)
    })
}

async function displayFunction() {
    console.log("It's Loading")
    const output = await promiseFunc();
    console.log(output);
}

displayFunction();