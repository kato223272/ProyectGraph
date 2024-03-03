import { Request, Response } from "express";
import { GetCapituloCaseUse } from "../../aplicacion/getCapituloCaseUse";

export class GetCapituloController{
    constructor(readonly getCapituloCaseUse:GetCapituloCaseUse){}
    async run (req: Request, res: Response){
        try {
            
        } catch (error) {
            
        }
    }
}


