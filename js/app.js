// Set intitial variables
// Two variables representing meters for nourishment and warmth levels
// Set counter at 0 to begin measuring time Camp Dog stays at camp
// create button click elements that will call functions to increase nourish and warmth
// Food button function will increase pet nourishment
// Fire button function will increase pet warmth
// Create timer function that lowers warmth and nourishment over time
// Status check function will contain conditional so if Weight or Health of Camp Dog are lower than set set perameter, Camp Dog will run away and console disappears
// GameOver Screen
// If Camp Dog stays at camp long enough, his Wolf Pack shows up
// Open Reset "Win" Window, intro upcoming sequel/ paywall
// Sequel will be named Camp Dog 2: Wolf Pack
// Camper is left alone 
// Camp Dog has no name

let nourish = 10;
let warmth = 10;

let parSecs = 0, timer;


timer = setInterval(timePassed,1000);

function timePassed() {
    parSecs++;
    console.log(parSecs) 
    console.log(`warmth: ${warmth}, nourish: ${nourish}`)  
} 