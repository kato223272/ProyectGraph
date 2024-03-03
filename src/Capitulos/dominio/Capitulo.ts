export class Capitulo{
    constructor(
        public readonly id: String,
        public readonly nombre: string,
        public readonly rol: string,
        public readonly pago: number,
        public readonly descripcion?: String
    ){ }
}