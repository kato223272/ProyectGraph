import { EncryptServices } from "../../aplicacion/Services/EncryptServices";
import bcrypt from 'bcrypt';

export class EncriptPago implements EncryptServices{
    encodePago(pago: string): Promise <string>{
        const vecesEncriptado = 10;
        let passEncoded = bcrypt.hash(pago, vecesEncriptado);
        return passEncoded;
    }

    authpass(PagoEndcoded: string, hashinCode: string): Promise<boolean> {
        let resultado = bcrypt.compare(PagoEndcoded, hashinCode);
        return resultado;
    }
}