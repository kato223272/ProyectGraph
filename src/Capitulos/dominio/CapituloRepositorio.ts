import {Capitulo} from "./Capitulo";

export interface CapituloRepositorio{
    addCapituloCaseUse(id:string, nombre:string, rol:string, pago:number, description?:string): Promise<Capitulo>
    getCapituloCaseUse(Id:string): Promise<Capitulo[]>
}