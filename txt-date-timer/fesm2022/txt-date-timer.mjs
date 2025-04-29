import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component } from '@angular/core';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

class TxtDateTimerComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.tooltip = '';
        this.fecha = '';
        this.tiempoRebote = 1000;
        this.fechaEstablecida = new EventEmitter();
        this.dateForm = this.formBuilder.group({
            fecha: ['']
        });
    }
    ngOnInit() {
        // Inicializar el valor del formulario con el valor de fecha
        this.dateForm.patchValue({ fecha: this.fecha });
        this.dateForm.get('fecha')?.valueChanges.pipe(debounceTime(this.tiempoRebote)).subscribe((val) => {
            this.fechaEstablecida.emit(val);
        });
    }
    ngOnChanges(changes) {
        if (changes['fecha'] && !changes['fecha'].firstChange) {
            this.dateForm.patchValue({ fecha: changes['fecha'].currentValue }, { emitEvent: false });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TxtDateTimerComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: TxtDateTimerComponent, isStandalone: true, selector: "lib-txt-date-timer", inputs: { tooltip: "tooltip", fecha: "fecha", tiempoRebote: "tiempoRebote" }, outputs: { fechaEstablecida: "fechaEstablecida" }, usesOnChanges: true, ngImport: i0, template: `
    <div class="control has-tooltip-top" [attr.data-tooltip]="tooltip">
      <div [formGroup]="dateForm">
        <input class="input filtro-fecha is-size-7-mobile" 
          type="date" 
          formControlName="fecha">
      </div>
    </div>
  `, isInline: true, styles: [""], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TxtDateTimerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-txt-date-timer', standalone: true, imports: [
                        ReactiveFormsModule
                    ], template: `
    <div class="control has-tooltip-top" [attr.data-tooltip]="tooltip">
      <div [formGroup]="dateForm">
        <input class="input filtro-fecha is-size-7-mobile" 
          type="date" 
          formControlName="fecha">
      </div>
    </div>
  ` }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }], propDecorators: { tooltip: [{
                type: Input
            }], fecha: [{
                type: Input
            }], tiempoRebote: [{
                type: Input
            }], fechaEstablecida: [{
                type: Output
            }] } });

/*
 * Public API Surface of txt-date-timer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TxtDateTimerComponent };
//# sourceMappingURL=txt-date-timer.mjs.map
