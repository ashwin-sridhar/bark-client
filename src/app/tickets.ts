export class Tickets {

    description:string;
    severity:string;
    constructor(values: Object = {}) {
        //Constructor initialization
        Object.assign(this, values);
    }
}
