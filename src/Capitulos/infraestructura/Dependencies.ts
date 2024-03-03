import { PrismaClient } from "@prisma/client";
import { CapituloRepositorio } from "../dominio/CapituloRepositorio";
import { Capitulo } from "../dominio/Capitulo";

export class PrismaCapituloRepositorio implements CapituloRepositorio{
   private db:  PrismaClient;
   constructor(){
    this.db = new PrismaClient()
   }
   async addCapitulo(id: string, nombre: string, pago: string, numCap: string, sipnosis: string, webhook: string): Promise<Capitulo> {
    const existCapitulo = await this.db.capitulo.findUnique({
        where: {
          id:id,
          nombre:nombre,
          pago:pago,
          numCap:numCap,
          sipnosis:sipnosis,
          webhook:webhook
        }
      })
   }
}

