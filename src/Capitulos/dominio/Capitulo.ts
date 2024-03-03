export class Capitulo{
    constructor(
        public readonly id: String,
        public readonly nombre: string,
        public readonly pago: String,
        public readonly numCap: String,
        public readonly sipnosis: String,
        public readonly webhook: String,
        // public readonly personajes?: personaje[]
    ){ }
}