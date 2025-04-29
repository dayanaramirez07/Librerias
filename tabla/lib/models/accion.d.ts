export declare class Accion {
    nombre: string;
    icono: string;
    metodo: (dato: any) => void;
    color: string;
    habilitada: (dato: any) => boolean;
    constructor(nombre?: string, icono?: string, metodo?: (dato: any) => void, color?: string, habilitada?: (dato: any) => boolean);
}
