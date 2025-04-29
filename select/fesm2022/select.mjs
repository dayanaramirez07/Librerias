import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

class SelectComponent {
    constructor() {
        this.onTouched = () => { };
        this.onChange = () => { };
        this.ancho = '';
        this.options = [];
        this.propiedad = '';
        this.isDisabled = false;
        this.opcionSeleccionada = new EventEmitter();
        this.mensajes = {
            noEncontrado: 'La opción establecida no existe'
        };
    }
    ngOnInit() {
        this.writeValue(this.value);
    }
    writeValue(value) {
        if (!value || !value.id) {
            this.value = this.options[0];
            this.forzarReporteCambios();
            return;
        }
        this.value = this.options.find(option => option.id === value.id) || null;
        if (!this.value) {
            throw new Error(this.mensajes.noEncontrado);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
        this.onChange(this.value);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onSeleccionChange(value) {
        this.onChange(value);
        this.opcionSeleccionada.emit(value);
    }
    forzarReporteCambios() {
        if (this.onChange) {
            this.onChange(this.value);
        }
        this.opcionSeleccionada.emit(this.value);
    }
    getPropiedadOption(option) {
        return this.propiedad ? option[this.propiedad] : option['nombre'] || '';
    }
    setOption(value) {
        this.value = this.options.find(option => option.id == value.id);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SelectComponent, isStandalone: true, selector: "app-select", inputs: { value: "value", ancho: "ancho", options: "options", propiedad: "propiedad", idConfiguracion: "idConfiguracion", isDisabled: "isDisabled" }, outputs: { opcionSeleccionada: "opcionSeleccionada" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectComponent,
                multi: true
            }], ngImport: i0, template: `
    <select 
      name="option" 
      [(ngModel)]="value" 
      (click)="onTouched()" 
      [disabled]="isDisabled"
      (change)="onSeleccionChange(value)"
      [style.width]="ancho ? ancho : ''">
      <option *ngFor="let option of options" [ngValue]="option">
        {{getPropiedadOption(option)}}
      </option>
    </select>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-select',
                    standalone: true,
                    imports: [
                        FormsModule
                    ],
                    template: `
    <select 
      name="option" 
      [(ngModel)]="value" 
      (click)="onTouched()" 
      [disabled]="isDisabled"
      (change)="onSeleccionChange(value)"
      [style.width]="ancho ? ancho : ''">
      <option *ngFor="let option of options" [ngValue]="option">
        {{getPropiedadOption(option)}}
      </option>
    </select>
  `,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SelectComponent,
                            multi: true
                        }]
                }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], ancho: [{
                type: Input
            }], options: [{
                type: Input
            }], propiedad: [{
                type: Input
            }], idConfiguracion: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], opcionSeleccionada: [{
                type: Output
            }] } });

/*
 * Public API Surface of select
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SelectComponent };
//# sourceMappingURL=select.mjs.map
