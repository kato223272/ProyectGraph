import {Capitulo} from '../dominio/Capitulo';
import {CapituloRepositorio} from '../dominio/CapituloRepositorio';
import {EncriptPago} from '../infraestructura/Helper/EncriptPago'
export class AddCapituloCaseUse{

    constructor(readonly CapituloRepositorio:CapituloRepositorio, readonly EncriptPago:EncriptPago ){}
    async run (id:string, nombre:string, pago:string,numCap:string, sipnosis:string, webhook:string): Promise<Capitulo | null>{
        try {
            const EncriptPago = await this.EncriptPago.encodePago(pago);


            const addCapitulo= await this.CapituloRepositorio.addCapitulo(id, nombre, EncriptPago, numCap, sipnosis, webhook)
            return addCapitulo
        } catch (error) {
            console.log("Error en addCapituloCaseUse")
            return null;
        }
    }
}