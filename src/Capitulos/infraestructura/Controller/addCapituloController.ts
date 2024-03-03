import { Request, Response } from "express";
import { AddCapituloCaseUse } from "../../aplicacion/addCapituloCaseUse";

export class AddCapituloController{
    constructor(readonly addCapituloCaseUse:AddCapituloCaseUse){}
    async run (req: Request, res: Response){
        try {
            let id  = req.params.id;
            let nombre = req.params.nombre;
            let pago = req.params.pago;
            let numCap = req.params.numCap;
            let sipnosis = req.params.sipnosis;
            let webhook = req.params.webhook;
            console.log(req.body)

            let capituloCreado = await this.addCapituloCaseUse.run(id, nombre, pago , numCap , sipnosis, webhook)
        if (capituloCreado) {
            return res.status(200).send({
                status:"sucess",
                data:{
                    id:capituloCreado.id,
                    nombre:capituloCreado.nombre,
                    pago:capituloCreado.pago,
                    numCap:capituloCreado.id,
                    sipnosis:capituloCreado.id,
                    webhook:capituloCreado.webhook
                },
                message: "se ha guardado exitosamente"
            })
        } else {
            return res.status(400).send({
                status:"sucess",
                data:[],
                message: "error agregar un capitulo en addCapituloController"
            })
            
        }
        } catch (error) {
            console.log("error en addCapituloController", error)
            res.status(500).send({
                status:"Error",
                message:"Error en el servidor"
            })
        }
    }
}