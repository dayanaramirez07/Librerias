import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

class InputTimerComponent {
    constructor() {
        this.cambiosTexto = new Subject();
        this.placeholder = '';
        this.filtroTexto = '';
        this.textoCompleto = new EventEmitter();
        this.cambiosTexto.pipe(debounceTime(500)).subscribe(value => {
            this.textoCompleto.emit(value);
        });
    }
    onInput(event) {
        this.filtroTexto = event.target.value;
        this.cambiosTexto.next(this.filtroTexto);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InputTimerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: InputTimerComponent, isStandalone: true, selector: "lib-input-timer", inputs: { placeholder: "placeholder", filtroTexto: "filtroTexto" }, outputs: { textoCompleto: "textoCompleto" }, ngImport: i0, template: `
    <div class="position-relative">
      <a class="btn position-absolute end-0 border-0">
        <i class="fas fa-search"></i>
      </a>
      <input 
        class="form-control input" 
        type="search" 
        [placeholder]="placeholder" 
        [(ngModel)]="filtroTexto"
        (input)="onInput($event)">
    </div>
  `, isInline: true, styles: [".btn{cursor:text}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InputTimerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-input-timer', standalone: true, imports: [
                        FormsModule
                    ], template: `
    <div class="position-relative">
      <a class="btn position-absolute end-0 border-0">
        <i class="fas fa-search"></i>
      </a>
      <input 
        class="form-control input" 
        type="search" 
        [placeholder]="placeholder" 
        [(ngModel)]="filtroTexto"
        (input)="onInput($event)">
    </div>
  `, styles: [".btn{cursor:text}\n"] }]
        }], ctorParameters: () => [], propDecorators: { placeholder: [{
                type: Input
            }], filtroTexto: [{
                type: Input
            }], textoCompleto: [{
                type: Output
            }] } });

/*
 * Public API Surface of input-timer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InputTimerComponent };
//# sourceMappingURL=input-timer.mjs.map
