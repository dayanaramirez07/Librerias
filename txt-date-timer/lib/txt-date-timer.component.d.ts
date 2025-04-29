import { EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TxtDateTimerComponent {
    private formBuilder;
    protected dateForm: FormGroup;
    tooltip: string;
    fecha: string;
    tiempoRebote: number;
    fechaEstablecida: EventEmitter<string>;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TxtDateTimerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TxtDateTimerComponent, "lib-txt-date-timer", never, { "tooltip": { "alias": "tooltip"; "required": false; }; "fecha": { "alias": "fecha"; "required": false; }; "tiempoRebote": { "alias": "tiempoRebote"; "required": false; }; }, { "fechaEstablecida": "fechaEstablecida"; }, never, never, true, never>;
}
