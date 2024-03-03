import {CapituloRepositorio} from '../dominio/CapituloRepositorio'
export class GetCapituloCaseUse{
    constructor(readonly CapituloRepositorio:CapituloRepositorio
    ){}
    async run(id: string){
        return await this.CapituloRepositorio.getCapitulo(id) ;
    }
}