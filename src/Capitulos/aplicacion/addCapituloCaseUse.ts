import {Capitulo} from '../dominio/Capitulo';
import {CapituloRepositorio} from '../dominio/CapituloRepositorio';

export class addCapituloCaseUse{

    constructor(readonly CapituloRepositorio:CapituloRepositorio ){}
    async run (id:string, nombre:string, rol:string, pago:number, description?:string): Promise<Capitulo | null>{
        try {
            const addCapitulo= await this.CapituloRepositorio.addCapituloCaseUse(id, nombre, rol, pago, description)
            return addCapitulo
        } catch (error) {
            console.log("Error en addCapituloCaseUse")
            return null;
        }
    }
}