// Set intitial variables
// Age will begin at 5 with maxAge of 29
// Also set variables for hunger and fitness levels
// Create dev elements that hold weight and health of dog
// Button click functions will call functions as described
// Food button function will increase pet food level
// Food must be cooked in fire to feed Camp Dog. After all, he can hunt for raw meat by himself
// Fire button function will increase pet warmth
// Firewood must be collected during hunts
// Hunt button will decrease pet health and decrease pet weight
// Hunt success will be determined by Camp Dogs current health and weight over timer
// Hunt function will also contain chance conditionals to obtain RawMeat and FireWood
// Create function for checking pet status
// Create timer function that lowers Health and Wight over time
// Status check function will contain conditional so if Weight or Health of Camp Dog are lower than set set perameter, Camp Dog will run away
// Camper is left alone 
// Camp Dog has no name


const cook = document.getElementById("cook")
const fire = document.getElementById("fire")

class CampDog{
    constructor(warmth, hunger) {
        this.warmth = 100
        this.eaten = 100
    }
    cook(){
        if(campDog.eaten < 100) {
            campDog.eaten+= 10
            console.log(`Camp Dog ate: Food Level ${campDog.eaten}`)
        }
    }
    foodDepletion() {
        var eatenLevel = setInterval(function(){
            campDog.eaten-= 10
            console.log(`Food Level: ${campDog.eaten}`)
            if(campDog.eaten === 0){
                clearInterval(eatenLevel)
                console.log("Camp Dog Got Hungry")
                campDog.dogRunsAway()
            }  
        }, 1500)
    }
    fire() {
        if(campDog.warmth <= 100) {
        campDog.warmth+= 10;
        console.log(`Camp Dog warmed up: Warmth Level ${campDog.warmth}`)
        }
    }
    warmthDepletion() {
        var warmthLevel = setInterval(function(){
            campDog.warmth-= 10
            console.log(`Warmth Level ${campDog.warmth}`)
            if(campDog.warmth === 0) {
                clearInterval(warmthLevel)
                console.log("Camp Dog Got Cold")
                campDog.dogRunsAway()
            }
        }, 1500);
    }
    dogRunsAway() {
        if(campDog.warmth == 0 || campDog.eaten == 0) {
            console.log("Camp Dog R-U-N-N-O-F-T")
        }
    }
}
//const name = new type(arguments);
const campDog = new CampDog()

cook.onclick = campDog.cook
fire.onclick = campDog.fire

campDog.foodDepletion()
campDog.warmthDepletion()