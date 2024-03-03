import { Request, Response } from "express";
import { DeleteCapituloCaseUse } from "../../aplicacion/deleteCapituloCaseUse";

export class DeleteCapituloController{
    constructor(readonly deleteCapituloCaseUse:DeleteCapituloCaseUse){}
    async run(req: Request, res: Response){
        try {
            let id=req.body.id;
            console.log(req.body);

            let capituloEliminado = await this.deleteCapituloCaseUse.run(id)
        if (capituloEliminado) {
            res.status(200).send({
                message:"Capitulo Eliminado Correctamente"
            })
        } else {
            return res.status(400).send({
                status:"sucess",
                data:[],
                message:"Error al eliminar Capitulo en deleteCapitulo.controller"
            })
        }
        } catch (error) {
            console.log("error en deleteCapituloController", error)
        res.status(500).send({
            status:"Error",
            message:"Error en el servidor"
        })
        }
    }
}