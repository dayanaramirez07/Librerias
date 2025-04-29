import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class TxtDateTimerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LWRhdGUtdGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdHh0LWRhdGUtdGltZXIvc3JjL2xpYi90eHQtZGF0ZS10aW1lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUEwQixtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQW1CcEMsTUFBTSxPQUFPLHFCQUFxQjtJQVNoQyxZQUNVLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTmxCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFXLElBQUksQ0FBQztRQUMzQixxQkFBZ0IsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUtuRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3JDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxRQUFRO1FBQ2IsNERBQTREO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQzNDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxXQUFXLENBQUMsT0FBc0I7UUFDdkMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0YsQ0FBQztJQUNILENBQUM7K0dBaENVLHFCQUFxQjttR0FBckIscUJBQXFCLG9PQVh0Qjs7Ozs7Ozs7R0FRVCx5RUFWQyxtQkFBbUI7OzRGQWFWLHFCQUFxQjtrQkFqQmpDLFNBQVM7K0JBQ0Usb0JBQW9CLGNBQ2xCLElBQUksV0FDUDt3QkFDUCxtQkFBbUI7cUJBQ3BCLFlBQ1M7Ozs7Ozs7O0dBUVQ7Z0ZBT2UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxLQUFLO3NCQUFwQixLQUFLO2dCQUNVLFlBQVk7c0JBQTNCLEtBQUs7Z0JBQ1csZ0JBQWdCO3NCQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10eHQtZGF0ZS10aW1lcicsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaGFzLXRvb2x0aXAtdG9wXCIgW2F0dHIuZGF0YS10b29sdGlwXT1cInRvb2x0aXBcIj5cclxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImRhdGVGb3JtXCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgZmlsdHJvLWZlY2hhIGlzLXNpemUtNy1tb2JpbGVcIiBcclxuICAgICAgICAgIHR5cGU9XCJkYXRlXCIgXHJcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmZWNoYVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHh0RGF0ZVRpbWVyQ29tcG9uZW50IHtcclxuXHJcbiAgcHJvdGVjdGVkIGRhdGVGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgZmVjaGE6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aWVtcG9SZWJvdGU6IG51bWJlciA9IDEwMDA7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBmZWNoYUVzdGFibGVjaWRhOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICkge1xyXG4gICAgdGhpcy5kYXRlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBmZWNoYTogWycnXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBJbmljaWFsaXphciBlbCB2YWxvciBkZWwgZm9ybXVsYXJpbyBjb24gZWwgdmFsb3IgZGUgZmVjaGFcclxuICAgIHRoaXMuZGF0ZUZvcm0ucGF0Y2hWYWx1ZSh7IGZlY2hhOiB0aGlzLmZlY2hhIH0pO1xyXG5cclxuICAgIHRoaXMuZGF0ZUZvcm0uZ2V0KCdmZWNoYScpPy52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMudGllbXBvUmVib3RlKVxyXG4gICAgKS5zdWJzY3JpYmUoKHZhbCkgPT4ge1xyXG4gICAgICB0aGlzLmZlY2hhRXN0YWJsZWNpZGEuZW1pdCh2YWwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXNbJ2ZlY2hhJ10gJiYgIWNoYW5nZXNbJ2ZlY2hhJ10uZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5kYXRlRm9ybS5wYXRjaFZhbHVlKHsgZmVjaGE6IGNoYW5nZXNbJ2ZlY2hhJ10uY3VycmVudFZhbHVlIH0sIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==