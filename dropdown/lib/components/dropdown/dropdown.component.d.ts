import { EventEmitter, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DropdownComponent implements ControlValueAccessor {
    onChange: (value: any) => void;
    onTouched: () => void;
    isDisabled: boolean;
    isTouched: boolean;
    protected indiceActivo: number;
    protected listadoActivo: boolean;
    protected listadoFiltrado: Array<any>;
    protected busquedaRealizada: boolean;
    value: any;
    label: string;
    listado: Array<any>;
    placeholder: string;
    agregarItem: boolean;
    /**
     * Propiedad de los objetos del listado que se va a usar para filtrar
     */
    propiedades: string[];
    blurEvent: EventEmitter<void>;
    itemSeleccionado: EventEmitter<any>;
    /**
     * Acción del botón
     */
    accion: any;
    accionSeleccionada: EventEmitter<any>;
    protected mensajes: {
        noExiste: string;
    };
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    forzarReporteCambios(itemSeleccionado: any): void;
    buscar(event: KeyboardEvent): void;
    establecerItemActivo(codigoTecla: string): void;
    onInputBlur(): void;
    isEmpty(value: any): boolean;
    protected valorEsValido(value: string): boolean;
    onAccionSeleccionada(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "app-dropdown", never, { "value": { "alias": "value"; "required": false; }; "label": { "alias": "label"; "required": false; }; "listado": { "alias": "listado"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "agregarItem": { "alias": "agregarItem"; "required": false; }; "propiedades": { "alias": "propiedades"; "required": false; }; "accion": { "alias": "accion"; "required": false; }; }, { "blurEvent": "blurEvent"; "itemSeleccionado": "itemSeleccionado"; "accionSeleccionada": "accionSeleccionada"; }, never, never, true, never>;
}
