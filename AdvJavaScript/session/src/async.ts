const isEven = (num:number):Promise<Boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num % 2 === 0) {
          resolve(true);
        } else {
          reject(false);
        }
      }, 3000);
    });
  };
  
// (async => {
//     try {
//         await isEven(2);
//         console.log("Yay! it's even");
//     } catch {
//         console.log("Meh! it's odd")
//     }
//   })();
(async ()=> {
    try {
        await isEven(2);
        console.log("Yay! it's even");
    } catch {
        console.log("Meh! it's odd");
    }
})();