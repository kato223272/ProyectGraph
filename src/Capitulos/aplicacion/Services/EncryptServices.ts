export interface EncryptServices{
    encodePago(pago:String): Promise <String>;
    authpass(PagoEndcoded: String, hashinCode:String): Promise <boolean>
}