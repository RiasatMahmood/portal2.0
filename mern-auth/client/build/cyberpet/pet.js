// //displayinfo
// const health = document.getElementById("health");
// const thirst = document.getElementById("thirst");
// const hunger = document.getElementById("hunger");
// const happiness = document.getElementById("happiness");
// const cleanliness = document.getElementById("cleanliness");
// const name = document.getElementById("name");
// const type = document.getElementById("type")

// //buttons
// const feed = document.getElementById("feed");
// const play = document.getElementById("play");
// const givedrink = document.getElementById("drink");
// const clean = document.getElementById("clean");
// // const left = document.getElementById("left");
// // const right = document.getElementById("right");
// const image = document.getElementById("pics");
// // const choName = document.querySelector(".choName");
// const select = document.getElementById("petType");
// const start = document.getElementById("submit");
// const input = document.getElementById("input")
// const hi = document.getElementById("hi")
// const stats = document.getElementById("render")

// let mate = ""



// class Pet {
//     constructor(happiness, cleanliness, hunger, thirst, health) {
//         //constructor(){
//         // this.name = name;
//         // this.type = type;
//         this.happiness = happiness;
//         this.cleanliness = cleanliness;
//         this.hunger = hunger;
//         this.thirst = thirst;
//         this.health = health;
//     }
//     reset() {

//         this.happiness = this._happiness;
//         this.cleanliness = this._cleanliness;
//         this.hunger = this._hunger;
//         this.thirst = this._thirst;
//         this.health = this._health;
//     }
//     defaultstats() {

//         this._happiness = this.happiness;
//         this._cleanliness = this.cleanliness;
//         this._hunger = this.hunger;
//         this._thirst = this.thirst;
//         this._health = this.health;
//     }

//     // get petdetails(){
//     //     return `${this.happiness},${this.cleanliness},${this.hunger},${this.thirst},${this.health}`
//     //  }
// }


// //subclass
// class PetInfo extends Pet {
//     constructor(happiness, cleanliness, hunger, thirst, health, name, type) {
//         super(happiness, cleanliness, hunger, thirst, health);
//         this.name = name;
//         this.type = type;
//     }
// }



// const Cat = new PetInfo(50, 50, 50, 50, 75, "Cat", "Type: cat");
// const Dog = new PetInfo(50, 50, 50, 50, 50, "Cat", "Type: dog");
// // const Rabbit = new Pet(50,50,50,50,80);
// // const Monkey = new Pet(50,50,50,50,50);
// // const Donkey = new Pet(50,50,50,50,50);
// // subclass
// const Cybercat = new PetInfo(100, 100, 100, 100, 100, "Cat", "Type: Cybercat")
// // console.log(Cybercat.Pet.petinfo)

// // if (start.textContent == "Start") {
// //     stats.style.display = "block"

// //         // mate.defaultstats()
// //         // renderData()
        
// //     } else {
// //         stats.style.display = "show"
// //         // mate.reset()
    
// //     }

// //     stats.style.display = "block"




// // let pets = [Cat, Dog, Cybercat]

// start.addEventListener("click", () => {
//     // if (start.textContent == "Start") {
//         if (select.value == "Cat") {
//             mate = Cat
//             image.src = "images/cat1.jpg";
//             // start.textContent = "Reset";
//             //start.remove()
//         }

//         else if (select.value == "Dog") {

//             image.src = "/cyberpet2/dog.webp"
//             mate = Dog
//             // start.textContent = "Reset"
//             //start.remove()
//         }

//         else if (select.value == "Cybercat") {
//             mate = Cybercat
//             image.src = "/cyberpet2/cybercat.webp"
//             // start.textContent = "Reset"
//             // start.remove()
//         }
//         if (select.value == "Cat" || select.value == "Dog" || select.value == "Cybercat") {
//             start.textContent = "Reset"
//         }
//         // mate.defaultstats()
//         // renderData()
//     // } else {
//     //     // mate.reset()
//     // }

//     // stats.style.display = "block"

// });
// // if (select.value == "Cat" || select.value == "Dog" || select.value == "Cybercat") {
// //     start.textContent = "Reset"
// // }

// // && start.textContent == "Reset")

// //     if (start.textContent="Reset")
// // }else {

// //     }

// // start.addEventListener("click", ()=>{
// //     if(select.value === "Cat" || select.value === "Dog" || select.value == "Cybercat" && start.textContent == "Reset"){
// //         start.textContent == "start"
// //         renderData()
// //     }




// // start.addEventListener("click", start);

// //     function start(){
// //     if(select.value === "Cat"){
// //     mate = Cat
// //     image.src = "images/cat1.jpg";
// //     // start.textContent="Reset"   
// //     //start.remove()
// //     }

// //     else if(select.value === "Dog"){

// //         image.src = "/cyberpet2/dog.webp"
// //           mate = Dog
// //         //   start.textContent="Reset"   
// //           //start.remove()
// //     }

// //     else{ if(select.value == "Cybercat"){
// //             mate = Cybercat
// //             image.src = "/cyberpet2/cybercat.webp"
// //             // start.textContent="Reset"   
// //             //start.remove()
// //         }}
// //         if(select.value === "Cat" || select.value === "Dog" || select.value == "Cybercat" )

// //         start.removeEventListener("click", start);
// //         start.addEventListener("click", reset);
// //         start.value="Reset";
// //     }

// //     function reset(){
// //         // console.log("Stopped");
// //         start.removeEventListener("click", reset);
// //         start.addEventListener("click", start);
// //         start.value = "Start";
// //     }


// // start.addEventListener("click", ()=>{
// //     start.textContent==="Reset" 
// //     reset()
// //     renderData();
// // })

// start.addEventListener("click", () => {
//     if (input.value !== "")
//         hi.textContent = `Hi I am a ${select.value} and my name is ${input.value}`

// })

// // start.addEventListener("click", () => {
// //      (style.display == "none")}
// //         // list.style.display = "block";
// //         // showButton.textContent = "hide";


// //  but.addEventListener("click", ()=>{

// //      if(select.value === "Dog"){

// //      image.src = "/cyberpet2/dog.webp"
// //        mate = Dog
// //     }

// //   });

// //   but.addEventListener("click", ()=>{

// //      if(select.value == "Rabbit"){
// //      mate = Rabbit
// //       image.src = "fox.jpeg"
// //      }
// //   });

// //   but.addEventListener("click", ()=>{

// //      if(select.value == "Monkey"){
// //      mate = Monkey
// //     //   image.src = "./monkeyNor.gif"}
// //      }
// //   });

// //   but.addEventListener("click", ()=>{

// //      if(select.value == "Donkey"){
// //      mate = Donkey
// //     //   image.src = "./dunkeyNor.gif"}
// //      }

// //   });


// //   but.addEventListener("click",()=>{
// //     if(select.value == "Cybercat"){
// //         mate = Cybercat
// //         image.src = "/cyberpet2/cybercat.webp"
// //     }
// // })




// //   but.addEventListener("click",()=>{
// //     if(input.value!=="")
// //     hi.textContent=`Hi i am a ${select.value} and my name is ${input.value}`

// // })



// // start.addEventListener('click', () => {
// //   start.remove();
// // });









// // if (mate.health = 0){
// //     window.HTML = "game over massage"
// // }


// function feedPet() {
//     // con
//     mate.cleanliness -= 5;
//     mate.thirst += 5
//     //pos
//     mate.happiness += 3;
//     mate.health += 5;
//     mate.hunger -= 10;
// }

// function giveDrink() {
//     // con
//     mate.hunger += 2;
//     mate.cleanliness -= 5;
//     mate.thirst -= 10;
//     // pos
//     mate.happiness += 5;
//     mate.health += 5;
// }

// function playwithpet() {
//     //con
//     mate.hunger += 5;
//     mate.thirst += 5;
//     mate.cleanliness - +10
//     //pos
//     mate.happiness += 10;
//     mate.health += 10;
// }

// function cleanPet() {
//     // con
//     mate.health += 10;
//     mate.hunger += 5;
//     mate.cleanliness += 5;
//     // pos
//     mate.happiness -= 5;
// };






// function checkCondition() {
//     if (mate.health >= 100) {
//         mate.health = 100;
//     }
//     if (mate.health <= 0) {
//         mate.health = 0;
//     }
//     if (mate.hunger <= 0) {
//         mate.hunger = 0;
//     }
//     if (mate.hunger >= 100) {
//         mate.hunger = 100;
//     }
//     if (mate.thirst >= 100) {
//         mate.thirst = 100;
//     }
//     if (mate.thirst <= 0) {
//         mate.thirst = 0;
//     }
//     if (mate.happiness >= 100) {
//         mate.happiness = 100;
//     }
//     if (mate.happiness <= 0) {
//         mate.happiness = 0;
//     }
//     if (mate.cleanliness <= 0) {
//         mate.cleanliness = 0;
//     }
//     if (mate.cleanliness >= 100) {
//         mate.cleanliness = 100;
//     };

// }

// function renderData() {
//     //     Pet.petinfo()
//     // Pet.petinfo.cybercat()
//     // }
//     name.textContent = `${input.value}: Stats`;
//     type.textContent = `${mate.type}`;

//     health.textContent = `Health: ${mate.health}`;
//     thirst.textContent = `Thirst: ${mate.thirst}`;
//     hunger.textContent = `Hunger: ${mate.hunger}`;
//     happiness.textContent = `Happiness: ${mate.happiness}`;
//     cleanliness.textContent = `Cleanliness: ${mate.cleanliness}`;
// }

// feed.addEventListener("click", () => {
//     this.feedPet();
//     checkCondition();
//     renderData();
// });

// givedrink.addEventListener("click", () => {
//     this.giveDrink();
//     checkCondition();
//     renderData();
// });
// play.addEventListener("click", () => {
//     this.playwithpet();
//     checkCondition();
//     renderData();
// });

// clean.addEventListener("click", () => {
//     this.cleanPet();
//     checkCondition();
//     renderData();
// });




// renderData()

// const timingFunction = () => {
//     window.setTimeout(() => {
//         mate.hunger += 2;
//         mate.thirst += 2;
//         mate.happiness -= 2;
//         mate.cleanliness += 2;
//         mate.health -= 5;

//         checkCondition()
//         renderData();
//         timingFunction();

//     }, 10000);
// }
// timingFunction();


// const healthCheck = () => {
//     window.setTimeout(() => {
//         if (mate.hunger > 85)
//             mate.health -= 5;

//         checkCondition()
//         renderData();
//         healthCheck();

//     }, 10000);
// }
// healthCheck();




// const randomgift = () => {
//     window.setTimeout(() => {
//         let num1 = Math.ceil(Math.random() * 100)
//         if (num1 == 20) {
//             Pet.health = 0;

//         }

//         renderData();
//         randomgift();

//     }, 1000)
// }

// randomgift();




//displayinfo
const health = document.getElementById("health");
const thirst = document.getElementById("thirst");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const cleanliness = document.getElementById("cleanliness");
const name = document.getElementById("name");
const type = document.getElementById("type")

//buttons
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const givedrink = document.getElementById("drink");
const clean = document.getElementById("clean");
// const left = document.getElementById("left");
// const right = document.getElementById("right");
const image = document.getElementById("pics");
// const choName = document.querySelector(".choName");
const select = document.getElementById("petType");
const start = document.getElementById("submit");
const input = document.getElementById("input")
const hi = document.getElementById("hi")
const stats = document.getElementById("render")
const resetbtn = document.getElementById("reset")
// const bar = document.getElementById("bar")


let mate = ""

class Pet {
    constructor(happiness, cleanliness, hunger, thirst, health) {
        //constructor(){
        // this.name = name;
        // this.type = type;
        this.happiness = happiness;
        this.cleanliness = cleanliness;
        this.hunger = hunger;
        this.thirst = thirst;
        this.health = health;
    }
    // reset() {

    //     this.happiness = this._happiness;
    //     this.cleanliness = this._cleanliness;
    //     this.hunger = this._hunger;
    //     this.thirst = this._thirst;
    //     this.health = this._health;
    // }
    // defaultstats() {

    //     this._happiness = this.happiness;
    //     this._cleanliness = this.cleanliness;
    //     this._hunger = this.hunger;
    //     this._thirst = this.thirst;
    //     this._health = this.health;
        
    // }   

    ////////default stats?????


}


//subclass
class Pet1 extends Pet {
    constructor(happiness, cleanliness, hunger, thirst, health, name, type) {
        super(happiness, cleanliness, hunger, thirst, health);
        this.name = name;
        this.type = type;
        // this.bar = bar;
    }
}



const Cat = new Pet1(50, 50, 50, 50, 75, "Meow", "Cat");


class Pet2 extends Pet {
    constructor(happiness, cleanliness, hunger, thirst, health, name, type) {
        super(happiness, cleanliness, hunger, thirst, health);
        this.name = name;
        this.type = type;
    }
}

const Dog = new Pet2(50, 50, 50, 50, 50, "Clifford", "Dog");

class Pet3 extends Pet {
    constructor(happiness, cleanliness, hunger, thirst, health, name, type, age) {
        super(happiness, cleanliness, hunger, thirst, health);
        this.name = name;
        this.type = type;
        this.age = age;
    }
}

const Cybercat = new Pet3(100, 100, 100, 100, 100, "Elon", "Cybercat",25)





let pets = [Cat, Dog, Cybercat]

// class Pet1 extends Pet {
//     constructor(happiness, cleanliness, hunger, thirst, health, name, type,bar) {
//         super(happiness, cleanliness, hunger, thirst, health);
//         this.name = name;
//         this.type = type;
//         this.bar = bar;
//     }
// }



// const Cat = new Pet1(50, 50, 50, 50, 75, "Meow", "Cat",100);


// class Pet2 extends Pet {
//     constructor(happiness, cleanliness, hunger, thirst, health, name, type) {
//         super(happiness, cleanliness, hunger, thirst, health);
//         this.name = name;
//         this.type = type;
//     }
// }

// const Dog = new Pet2(50, 50, 50, 50, 50, "Clifford", "Dog");

// class Pet3 extends Pet {
//     constructor(happiness, cleanliness, hunger, thirst, health, name, type, age) {
//         super(happiness, cleanliness, hunger, thirst, health);
//         this.name = name;
//         this.type = type;
//         this.age = age;
//     }
// }

// const Cybercat = new Pet3(100, 100, 100, 100, 100, "Elon", "Cybercat", 25)





// let pets = [Cat, Dog, Cybercat]


start.addEventListener("click", () => {
    // if (start.textContent == "Start") {
        if (select.value == "Cat") {
            mate = Cat
            image.src = "cat1.jpg";
            // renderData()
            start.textContent = "Reset";
            // start.remove()
        }

        else if (select.value == "Dog") {

            image.src = "/cyberpet2/dog.webp"
            mate = Dog
            // renderData()
            start.textContent = "Reset"
            //start.remove()
        }

        else if (select.value == "Cybercat") {
            mate = Cybercat
            image.src = "/cyberpet2/cybercat.webp"
            // renderData()
            
            start.textContent = "Reset"
            // start.remove()
        }


        if (select.value == "Cat" || select.value == "Dog" || select.value == "Cybercat") {
            stats.style.display = "block"

        }
        // input = input.toUpperCase();
        
        /////////first letter to uppercase
});

// if (start.textContent == "Start") {
//     stats.style.display = "block"
// }
    //     mate.defaultstats()
    //     renderData()
        
    // } else {
    //     stats.style.display = "show"
    //     mate.reset()
    
    // }


    


//////// css #render is set to dislay:none;

/////////                         commented out the css aswell - still not showing stats




function feedPet() {
    // con
    mate.cleanliness -= 5;
    mate.thirst += 5
    //pos
    mate.happiness += 3;
    mate.health += 5;
    mate.hunger -= 10;
}

function giveDrink() {
    // con
    mate.hunger += 2;
    mate.cleanliness -= 5;
    mate.thirst -= 10;
    // pos
    mate.happiness += 5;
    mate.health += 5;
}

function playwithpet() {
    //con
    mate.hunger += 5;
    mate.thirst += 5;
    mate.cleanliness - +10
    //pos
    mate.happiness += 10;
    mate.health += 10;
}

function cleanPet() {
    // con
    mate.health -= 10;
    mate.hunger += 5;
    mate.cleanliness += 5;
    // pos
    mate.happiness -= 5;
};




function checkCondition() {
    if (mate.health >= 100) {
        mate.health = 100;
    }
    if (mate.health <= 0) {
        mate.health = 0;
    }
    if (mate.hunger <= 0) {
        mate.hunger = 0;
    }
    if (mate.hunger >= 100) {
        mate.hunger = 100;
    }
    if (mate.thirst >= 100) {
        mate.thirst = 100;
    }
    if (mate.thirst <= 0) {
        mate.thirst = 0;
    }
    if (mate.happiness >= 100) {
        mate.happiness = 100;
    }
    if (mate.happiness <= 0) {
        mate.happiness = 0;
    }
    if (mate.cleanliness <= 0) {
        mate.cleanliness = 0;
    }
    if (mate.cleanliness >= 100) {
        mate.cleanliness = 100;
    }
     if (mate.health <= 0){
        image.src = "fox.jpeg"
    }
}

function renderData() {
    if(input.value !==""){
    name.textContent = `Name: ${input.value}`
    type.textContent = `Type: ${mate.type}`;
    health.textContent = `Health: ${mate.health}`;
    thirst.textContent = `Thirst: ${mate.thirst}`;
    hunger.textContent = `Hunger: ${mate.hunger}`;
    happiness.textContent = `Happiness: ${mate.happiness}`;
    cleanliness.textContent = `Cleanliness: ${mate.cleanliness}`;
    // bar.value = `${mate.bar}`
    }
    else{
    name.textContent = `Name: ${mate.name}`;
    type.textContent = `Type: ${mate.type}`;
    
    health.textContent = `Health: ${mate.health}`;
    thirst.textContent = `Thirst: ${mate.thirst}`;
    hunger.textContent = `Hunger: ${mate.hunger}`;
    happiness.textContent = `Happiness: ${mate.happiness}`;
    cleanliness.textContent = `Cleanliness: ${mate.cleanliness}`;
    // bar.value = `${mate.bar}`
    //cant use the same value twice


    }
 }
 ////// look at arrays - so you can render from the 


feed.addEventListener("click", () => {
    this.feedPet();
    checkCondition();
    // ////reder2();
    renderData();
});

givedrink.addEventListener("click", () => {
    this.giveDrink();
    checkCondition();
    ////reder2();
    renderData();
});
play.addEventListener("click", () => {
    this.playwithpet();
    checkCondition();
    ////reder2();
    renderData();
});

clean.addEventListener("click", () => {
    this.cleanPet();
    checkCondition();
    ////reder2();
    renderData();
});






const timingFunction = () => {
    window.setTimeout(() => {
        mate.hunger += 2;
        mate.thirst += 2;
        mate.happiness -= 2;
        mate.cleanliness += 2;
        mate.health -= 5;

        checkCondition()
        renderData();
        //reder2();
        timingFunction();

    }, 1000);
}
timingFunction();


const healthCheck = () => {
    window.setTimeout(() => {
        if (mate.hunger > 85)
            mate.health -= 5;

        checkCondition()
        renderData();
        //reder2();
        healthCheck();

    }, 1000);
}
healthCheck();




const randomgift = () => {
    window.setTimeout(() => {
        let num1 = Math.ceil(Math.random() * 100)
        if (num1 == 20) {
            Pet.health = 0;

        }

        renderData();
        //reder2();
        randomgift();

    }, 1000)
}

randomgift();


resetbtn.addEventListener("click", () => {
    // reset()
    if (select.value == "Cat" || select.value == "Dog" || select.value == "Cybercat"){
    window.location.reload()
    }

})


//////^^^ need to reset data rather than reload page also look using the start button to reset rather than 2 button




// resetbtn.addEventListener("click", () => {
//     // reset()
//     if (select.value == "Cat" || select.value == "Dog" || select.value == "Cybercat"){
//     mate.defaultstats()
//     }

// })
// let hbar=1;  
// function abc(){  
//  let progressExample = document.getElementById ('bar');  
//      setInterval (function ()  
//     {   
//                  if(hbar<100){  
//                     hbar++;  
//                     progressExample.value =hbar;    
//                   }  
//                  abc();              
//       }, 1000);  
// }  