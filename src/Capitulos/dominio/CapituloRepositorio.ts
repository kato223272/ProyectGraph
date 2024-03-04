import {Capitulo} from "./Capitulo";

export interface CapituloRepositorio{
    addCapitulo(id:string, nombre:string, pago:String, numCap:string, sipnosis:string, webhook:string): Promise<Capitulo | null>
    getCapitulo(id:string): Promise<Capitulo[]>
}