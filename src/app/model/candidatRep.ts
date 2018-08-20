export class ReplyCheck {
    answerId : number;
    checked: false;
}

export class CandidatRep {
    questionId : number;
    reply: Array<ReplyCheck>;
}

