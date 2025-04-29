import { ChangeDetectorRef, ElementRef, EventEmitter, QueryList } from '@angular/core';
import { Accion } from '../../models/accion';
import { Columna } from '../../models/columna';
import * as i0 from "@angular/core";
export declare class TablaComponent {
    private cdr;
    protected anchoEncabezados: string[];
    datos: any[];
    filtro: string;
    accion: boolean;
    altoTabla: string;
    acciones: Accion[];
    columnas: Columna[];
    enModal: boolean;
    protected encabezados: QueryList<ElementRef>;
    protected datoSeleccionado: EventEmitter<any>;
    labels: {
        acciones: string;
    };
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    onResize(): void;
    protected prepararDatosParaTabla(): void;
    protected onDatoSeleccionado(dato: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TablaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TablaComponent, "lib-tabla", never, { "datos": { "alias": "datos"; "required": false; }; "filtro": { "alias": "filtro"; "required": false; }; "accion": { "alias": "accion"; "required": false; }; "altoTabla": { "alias": "altoTabla"; "required": false; }; "acciones": { "alias": "acciones"; "required": false; }; "columnas": { "alias": "columnas"; "required": false; }; "enModal": { "alias": "enModal"; "required": false; }; }, { "datoSeleccionado": "datoSeleccionado"; }, never, never, true, never>;
}
