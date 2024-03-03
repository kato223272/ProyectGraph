export interface IJWT{
    numCap(payload:number): Promise<number>;
    verify(payload:number): Promise<any>;
}