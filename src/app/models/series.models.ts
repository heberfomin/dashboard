export class Series {
    subject: string;
    frequency: Array<string>;
    labels: Array<string>;
    values: Array<number>;
    constructor(subject, frequency, labels, values) {
        this.subject = subject;
        this.frequency = frequency;
        this.labels = labels;
        this.values = values;
    }
}