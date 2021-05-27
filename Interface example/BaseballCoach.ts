import { Coach } from "./Coach";

export class BaseBallCoach implements Coach{
    getDailyWorkout(): string {
        return "THROW DA FASTBALL";
    }

}