import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class InputTimerComponent {
    cambiosTexto: Subject<string>;
    placeholder: string;
    filtroTexto: string;
    textoCompleto: EventEmitter<string>;
    constructor();
    onInput(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTimerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTimerComponent, "lib-input-timer", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "filtroTexto": { "alias": "filtroTexto"; "required": false; }; }, { "textoCompleto": "textoCompleto"; }, never, never, true, never>;
}
