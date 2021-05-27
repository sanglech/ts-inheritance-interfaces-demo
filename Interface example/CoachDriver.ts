import { BaseBallCoach } from "./BaseballCoach";
import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";


let myBaseBallCoach = new BaseBallCoach();
let myGolfCoach = new GolfCoach();


let theCoaches: Coach[]=[];

theCoaches.push(myBaseBallCoach);
theCoaches.push(myGolfCoach);


for (let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}