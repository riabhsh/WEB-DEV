// PROMISE 
{
    // const pr1 = new Promise((resolve, reject) => {
//     setTimeout( () => {resolve("pr1!")}, 2000);
// });

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout( () => {resolve("pr2!")}, 200);
// });

// const pr3 = new Promise((resolve, reject) => {
//     // setTimeout( () => {resolve("pr3!")}, 2000);
//     setTimeout( () => {reject("pr3!")}, 2000);
// });

// Promise.all([pr1, pr2, pr3])
// .then((res) => {console.log(res);})
// .catch((rej) => {console.log(rej);})
// .finally(()=>{console.log("Promise All!")});

// Promise.allSettled([pr1, pr2, pr3])
// .then((res) => {console.log(res);})
// .catch((rej) => {console.log(rej);})
// .finally(()=>{console.log("Promise All!")});

// Promise.race([pr1, pr2, pr3])
// .then((res) => {console.log(res);})
// .catch((rej) => {console.log(rej);})
// .finally(()=>{console.log("Promise All!")});
}

// Async-Await
{
    const pr1 = async (operation) => {
        try{
            const result = await new Promise((resolve, reject) => {
                if(operation){
                    const res = setTimeout(() => {resolve("sucesss!");}, 2000);
                }
                else{   
                    const rej = setTimeout(() => {reject("fail!");}, 2000);
                }
         
            console.log("Async-Await rocks!"); });
            console.log(result);
        }

        catch(error){
            console.log(error);
        }
         
    };
    pr1(false);
}
{
//     const delay = (operation) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             operation ? resolve("success!") : reject("fail!");
//         }, 2000);
//     });
// }

// const pr1 = async (operation) => {
//     try{
//         const result = await delay(operation);
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// pr1(false);

}

    
