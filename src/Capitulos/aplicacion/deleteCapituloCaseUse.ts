import {Capitulo} from '../dominio/Capitulo'
import {CapituloRepositorio} from '../dominio/CapituloRepositorio'

export class DeleteCapituloCaseUse{
constructor(readonly CapituloRepositorio:CapituloRepositorio){}
async run (id:string):Promise <Capitulo | null>{
try {
    const deleteCapitulo = await this.CapituloRepositorio.deleteCapitulo(id);
    return deleteCapitulo;
} catch (error) {
    console.log("Error en deleteCapituloCaseUse");
    return null;
}
}
}