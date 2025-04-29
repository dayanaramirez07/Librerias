import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PaginacionComponent implements OnInit {
    protected paginas: number[];
    cantidadVisible: number;
    cantidadElementos: number;
    cantidadTotalElementos: number;
    protected nombreElementos: string;
    cantidadSeleccionada: EventEmitter<number>;
    paginaSeleccionada: EventEmitter<number>;
    /**
     * Propiedades de visualización de botones,
     * inicio y fin son las posiciones (NO los items)
     */
    protected inicioVisible: number;
    paginaActual: number;
    protected finVisible: number;
    protected labels: {
        todosElementos: string;
        paginaActual: string;
        elementosVisibles: string;
    };
    constructor();
    ngOnInit(): void;
    onResize(event: any): void;
    iniciarPaginacion(cantidadTotal: number, cantidadActual: number, cantidadPaginas: number): void;
    actualizarLabels(): void;
    protected seleccionarPagina(pagina: number): void;
    protected moverPagina(derecha: boolean): void;
    protected obtenerUltimaPagina(): number;
    protected onCantidadSeleccionada(): void;
    protected onPaginaSeleccionada(): void;
    protected establecerBotonesVisibles(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginacionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginacionComponent, "app-paginacion", never, { "nombreElementos": { "alias": "nombreElementos"; "required": false; }; }, { "cantidadSeleccionada": "cantidadSeleccionada"; "paginaSeleccionada": "paginaSeleccionada"; }, never, never, true, never>;
}
