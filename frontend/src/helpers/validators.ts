export class CustomValidator {

    static REQUIRED_MESSAGE = 'El campo es requerido';
    static NUMBER_MESSAGE = 'El campo debe ser númerico';
    static INTEGER_MESSAGE = 'El campo debe ser entero';

    static isNumber(num: string){
        return typeof num === 'string' && !Number.isNaN(num);
    }

    static isInteger(num: string){
        return typeof num === 'string' && !Number.isNaN(num) && Number.isInteger(num);
    }

}