import { ReviewDTO } from "./ReviewDTO";

export class GameDTO{
gameTitle : string;
releaseDate: string;
gameStudio: string;
reviews: ReviewDTO[];
avgScore: number;
topScore: number;
lowestScore: number;


}