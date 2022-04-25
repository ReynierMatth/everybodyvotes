export class Poll {
  questionName: string;
  answerName1: string;
  answerNumber1: number;
  answerName2: string;
  answerNumber2: number;
  id: any;

  constructor(id: string, questionName: string, answerName1: string, answerNumber1 : number, answerName2: string, answerNumber2 : number) {
    this.questionName = questionName;
    this.answerName1 = answerName1;
    this.answerNumber1  = answerNumber1;
    this.answerName2 = answerName2;
    this.answerNumber2 = answerNumber2;
    this.id = id
  }

  public static createPoll(id:string, questionName:string, answer1Name:string, answer2Name: string){
    return new Poll(id,questionName,answer1Name,0,answer2Name,0);
  }
}
