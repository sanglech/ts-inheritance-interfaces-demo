"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseballCoach_1 = require("./BaseballCoach");
var GolfCoach_1 = require("./GolfCoach");
var myBaseBallCoach = new BaseballCoach_1.BaseBallCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
var theCoaches = [];
theCoaches.push(myBaseBallCoach);
theCoaches.push(myGolfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoach = theCoaches_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
