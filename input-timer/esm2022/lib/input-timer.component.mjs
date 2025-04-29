import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class InputTimerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW5wdXQtdGltZXIvc3JjL2xpYi9pbnB1dC10aW1lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQTJCN0MsTUFBTSxPQUFPLG1CQUFtQjtJQVE5QjtRQU5PLGlCQUFZLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFFN0MsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDeEIsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdoRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzsrR0FqQlUsbUJBQW1CO21HQUFuQixtQkFBbUIsNExBbkJwQjs7Ozs7Ozs7Ozs7O0dBWVQsNEZBZEMsV0FBVzs7NEZBcUJGLG1CQUFtQjtrQkF6Qi9CLFNBQVM7K0JBQ0UsaUJBQWlCLGNBQ2YsSUFBSSxXQUNQO3dCQUNQLFdBQVc7cUJBQ1osWUFDUzs7Ozs7Ozs7Ozs7O0dBWVQ7d0RBV2UsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUNXLGFBQWE7c0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1pbnB1dC10aW1lcicsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICA8YSBjbGFzcz1cImJ0biBwb3NpdGlvbi1hYnNvbHV0ZSBlbmQtMCBib3JkZXItMFwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXRcIiBcclxuICAgICAgICB0eXBlPVwic2VhcmNoXCIgXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0cm9UZXh0b1wiXHJcbiAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50KVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IGBcclxuICAgIC5idG4ge1xyXG4gICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICB9XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRUaW1lckNvbXBvbmVudCB7XHJcblxyXG4gIHB1YmxpYyBjYW1iaW9zVGV4dG86IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgZmlsdHJvVGV4dG86IHN0cmluZyA9ICcnO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgdGV4dG9Db21wbGV0bzogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhbWJpb3NUZXh0by5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLnRleHRvQ29tcGxldG8uZW1pdCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbklucHV0KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZmlsdHJvVGV4dG8gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLmNhbWJpb3NUZXh0by5uZXh0KHRoaXMuZmlsdHJvVGV4dG8pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19