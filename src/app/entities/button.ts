export class Button {
    value: string;
    type: 'number' | 'operator' | 'signal' | 'action';
    color: string;
    
    constructor(value: string, type: 'number' | 'operator' | 'signal' | 'action') {
        this.value = value;
        this.type = type;
    }
}