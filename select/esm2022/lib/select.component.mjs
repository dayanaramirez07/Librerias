import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class SelectComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NlbGVjdC9zcmMvbGliL3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUEyQnRGLE1BQU0sT0FBTyxlQUFlO0lBaUIxQjtRQWZPLGNBQVMsR0FBZSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEMsYUFBUSxHQUF5QixHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHbEMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUMzQix1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV2RSxhQUFRLEdBQUc7WUFDbkIsWUFBWSxFQUFFLGlDQUFpQztTQUNoRCxDQUFBO0lBRWUsQ0FBQztJQUVWLFFBQVE7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sVUFBVSxDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO1FBRXpFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0saUJBQWlCLENBQUMsRUFBTztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sZ0JBQWdCLENBQUUsVUFBbUI7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEtBQVU7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFUyxrQkFBa0IsQ0FBQyxNQUFXO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7K0dBcEVVLGVBQWU7bUdBQWYsZUFBZSxzUUFOZixDQUFDO2dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxlQUFlO2dCQUM1QixLQUFLLEVBQUUsSUFBSTthQUNaLENBQUMsMEJBakJROzs7Ozs7Ozs7Ozs7R0FZVCwyREFkQyxXQUFXOzs0RkFxQkYsZUFBZTtrQkF6QjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsV0FBVztxQkFDWjtvQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO29CQUNELFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsaUJBQWlCOzRCQUM1QixLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDO2lCQUNIO3dEQU1pQixLQUFLO3NCQUFwQixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxTQUFTO3NCQUF4QixLQUFLO2dCQUNVLGVBQWU7c0JBQTlCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVyxrQkFBa0I7c0JBQWxDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3Jtc01vZHVsZSwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zZWxlY3QnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VsZWN0IFxyXG4gICAgICBuYW1lPVwib3B0aW9uXCIgXHJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIiBcclxuICAgICAgKGNsaWNrKT1cIm9uVG91Y2hlZCgpXCIgXHJcbiAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcclxuICAgICAgKGNoYW5nZSk9XCJvblNlbGVjY2lvbkNoYW5nZSh2YWx1ZSlcIlxyXG4gICAgICBbc3R5bGUud2lkdGhdPVwiYW5jaG8gPyBhbmNobyA6ICcnXCI+XHJcbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCIgW25nVmFsdWVdPVwib3B0aW9uXCI+XHJcbiAgICAgICAge3tnZXRQcm9waWVkYWRPcHRpb24ob3B0aW9uKX19XHJcbiAgICAgIDwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBTZWxlY3RDb21wb25lbnQsXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgcHVibGljIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICBwdWJsaWMgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgYW5jaG86IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBhbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwcm9waWVkYWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpZENvbmZpZ3VyYWNpb24/OiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9wY2lvblNlbGVjY2lvbmFkYTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHJvdGVjdGVkIG1lbnNhamVzID0ge1xyXG4gICAgbm9FbmNvbnRyYWRvOiAnTGEgb3BjacOzbiBlc3RhYmxlY2lkYSBubyBleGlzdGUnXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5pZCkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcHRpb25zWzBdO1xyXG4gICAgICB0aGlzLmZvcnphclJlcG9ydGVDYW1iaW9zKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5pZCA9PT0gdmFsdWUuaWQpIHx8IG51bGw7XHJcblxyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLm1lbnNhamVzLm5vRW5jb250cmFkbyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNlbGVjY2lvbkNoYW5nZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMub3BjaW9uU2VsZWNjaW9uYWRhLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3J6YXJSZXBvcnRlQ2FtYmlvcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wY2lvblNlbGVjY2lvbmFkYS5lbWl0KHRoaXMudmFsdWUpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UHJvcGllZGFkT3B0aW9uKG9wdGlvbjogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BpZWRhZCA/IG9wdGlvblt0aGlzLnByb3BpZWRhZF0gOiBvcHRpb25bJ25vbWJyZSddIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE9wdGlvbih2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5pZCA9PSB2YWx1ZS5pZCk7XHJcbiAgfVxyXG5cclxufSJdfQ==