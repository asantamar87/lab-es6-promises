// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  // ... Your code here
  // ...
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          getInstruction("mashedPotatoes", 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
              document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
           

            
          }, (error) => console.log(error));


        }, (error) => console.log(error));

      }, (error) => console.log(error));


    }, (error) => console.log(error));

  }, (error) => console.log(error));


}, (error) => console.log(error));



// Iteration 2 - using promises
// ...

obtainInstruction("steak", 0)
  .then(step0 => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)
  })
  .then(step1 => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2)
  })
  .then(step2 => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3)
  })
  .then(step3 => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4)
  })
  .then(step4 => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5)
  })
  .then(step5 => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6)
  })
  .then(step6 => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7)
  })
  .then(step7 => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return step7
  })


// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  try {
  const step0 = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`

  const step1 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`  

  const step2 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>` 

  const step3 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>` 

  const step4 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>` 

  const step5 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>` 

  const step6 = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>` 
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    document.querySelector('#broccoliImg').removeAttribute("hidden")
  } 
  catch(err) {
    console.error(err)
  }
}

makeBroccoli()


// Bonus 2 - Promise all
// ...

// brusselsSprouts

// const step0 = await obtainInstruction('brusselsSprouts', 0)
// document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`

// const step1 = await obtainInstruction('brusselsSprouts', 1)
// document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`  

// const step2 = await obtainInstruction('brusselsSprouts', 2)
// document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>` 

// const step3 = await obtainInstruction('brusselsSprouts', 3)
// document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>` 

// const step4 = await obtainInstruction('brusselsSprouts', 4)
// document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>` 

// const step5 = await obtainInstruction('brusselsSprouts', 5)
// document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>` 

// const step6 = await obtainInstruction('brusselsSprouts', 6)
// document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>` 
// document.querySelector("#brusselsSprouts").innerHTML += `<li>Broccoli is ready!</li>`
// document.querySelector('#brusselsSprouts').removeAttribute("hidden")
// }

// //OPTION 1
const step0 = obtainInstruction("brusselsSprouts",0)
const step1 = obtainInstruction("brusselsSprouts",1)
const step2 = obtainInstruction("brusselsSprouts",2)
const step3 = obtainInstruction("brusselsSprouts",3)
const step4 = obtainInstruction("brusselsSprouts",4)
const step5 = obtainInstruction("brusselsSprouts",5)
const step6 = obtainInstruction("brusselsSprouts",6)
const step7 = obtainInstruction("brusselsSprouts",7)

// Promise.all([step0,step1,step2,step3,step4,step5,step6,step7]).then(
//   valorDelArray => {
//     valorDelArray.forEach( instruccion  =>{
//       document.querySelector("#brusselsSprouts")
//       .innerHTML += `<li>${instruccion}</li>`
//     })

//     document.querySelector("#brusselsSprouts").innerHTML += `<li>brusselsSprouts is ready!</li>`
//     document.querySelector('#brusselsSproutsImg').removeAttribute("hidden")

//   }
// ).catch( error => console.log(error))

async function makeBrusselsSprouts() {
  // try & catch
  try {
    // crear variable para hacer generar el constructor con la palabra PROMISE y le encadenamos el metodo .all() con todas las variables definidas arriba. Recuerda, tenemos qe ESPERAR a todas estas llamadas.
    const valores = await Promise.all([
     step0,
     step1,
     step2,
     step3,
     step4,
     step5,
     step6,
     step7
    ]);

    valores.forEach((instruccionDePaso) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${instruccionDePaso}</li>`;
    });
    // Se encarga de añadir texto a pelo
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Yo yo yo my homie them brussels sprouts be ready man, time to eat some grub!</li>`;
    // Se encarga de quitar la img
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}
makeBrusselsSprouts();