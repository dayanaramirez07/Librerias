import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SelectComponent implements OnInit, ControlValueAccessor {
    onTouched: () => void;
    onChange: (value: any) => void;
    value: any;
    ancho: string;
    options: any[];
    propiedad: string;
    idConfiguracion?: number;
    isDisabled: boolean;
    opcionSeleccionada: EventEmitter<any>;
    protected mensajes: {
        noEncontrado: string;
    };
    constructor();
    ngOnInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    onSeleccionChange(value: any): void;
    private forzarReporteCambios;
    protected getPropiedadOption(option: any): string;
    setOption(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "app-select", never, { "value": { "alias": "value"; "required": false; }; "ancho": { "alias": "ancho"; "required": false; }; "options": { "alias": "options"; "required": false; }; "propiedad": { "alias": "propiedad"; "required": false; }; "idConfiguracion": { "alias": "idConfiguracion"; "required": false; }; "isDisabled": { "alias": "isDisabled"; "required": false; }; }, { "opcionSeleccionada": "opcionSeleccionada"; }, never, never, true, never>;
}
