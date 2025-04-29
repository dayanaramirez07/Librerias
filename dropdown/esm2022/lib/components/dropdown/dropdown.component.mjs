import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class DropdownComponent {
    constructor() {
        this.onChange = () => { };
        this.onTouched = () => { };
        this.isDisabled = false;
        this.isTouched = false;
        this.indiceActivo = 0;
        this.listadoActivo = false;
        this.listadoFiltrado = [];
        this.busquedaRealizada = false;
        this.label = '';
        this.listado = [];
        this.placeholder = '';
        this.agregarItem = false;
        /**
         * Propiedad de los objetos del listado que se va a usar para filtrar
         */
        this.propiedades = [];
        this.blurEvent = new EventEmitter();
        this.itemSeleccionado = new EventEmitter();
        this.accionSeleccionada = new EventEmitter();
        this.mensajes = {
            noExiste: 'No existe'
        };
    }
    ngOnInit() {
        this.writeValue(this.value);
    }
    ngOnChanges(changes) {
        if (changes['value']) {
            this.writeValue(changes['value'].currentValue);
        }
    }
    writeValue(value) {
        this.value = value;
        if (typeof this.value === 'object') {
            if (this.value && this.propiedades.length > 0) {
                this.value = this.propiedades
                    .map(prop => this.value[prop])
                    .filter(val => val)
                    .join(' - ');
            }
            else {
                this.value = '';
            }
        }
        this.listadoFiltrado = [];
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    forzarReporteCambios(itemSeleccionado) {
        if (this.agregarItem && !itemSeleccionado) {
            this.value = this.value;
        }
        else {
            this.value = itemSeleccionado || '';
        }
        const objetoOriginal = this.listado.find(item => this.propiedades.map(prop => item[prop]).join(' - ') === this.value);
        this.onChange(this.value);
        if (!this.value) {
            this.itemSeleccionado.emit('');
            return;
        }
        this.itemSeleccionado.emit(objetoOriginal || this.value);
        this.listadoActivo = false;
        this.busquedaRealizada = false;
    }
    buscar(event) {
        this.listadoActivo = false;
        this.busquedaRealizada = true;
        const value = this.value.toLowerCase();
        if (value === '') {
            this.forzarReporteCambios(value);
            this.busquedaRealizada = false;
            return;
        }
        this.listadoFiltrado = this.listado
            .map(item => {
            const texto = this.propiedades.map(prop => item[prop]).join(' - ');
            return { item, texto };
        })
            .filter(({ texto }) => texto.toLowerCase().includes(value))
            .map(({ texto }) => texto);
        if (this.listadoFiltrado.length > 0) {
            this.listadoActivo = true;
        }
        this.establecerItemActivo(event.code);
    }
    establecerItemActivo(codigoTecla) {
        if (this.listadoFiltrado.length === 0) {
            if (this.agregarItem) {
                this.forzarReporteCambios(this.value);
            }
            return;
        }
        if (codigoTecla === 'ArrowDown') {
            this.indiceActivo = (this.indiceActivo + 1) % this.listadoFiltrado.length;
        }
        else if (codigoTecla === 'ArrowUp') {
            this.indiceActivo = (this.indiceActivo - 1 + this.listadoFiltrado.length) % this.listadoFiltrado.length;
        }
        else if (codigoTecla === 'Enter' && this.indiceActivo >= 0) {
            const itemSeleccionado = this.listadoFiltrado[this.indiceActivo];
            this.forzarReporteCambios(itemSeleccionado);
        }
        setTimeout(() => {
            const element = document.querySelector('.dropdown-item.is-active');
            if (element) {
                element.scrollIntoView({ block: 'nearest' });
            }
        }, 0);
    }
    onInputBlur() {
        this.busquedaRealizada = false;
        if (this.label) {
            this.isTouched = true;
        }
        if ((this.isEmpty(this.value) || !this.valorEsValido(this.value))) {
            this.forzarReporteCambios('');
        }
        this.onTouched();
        this.blurEvent.emit();
    }
    isEmpty(value) {
        return !value || value.trim() === '';
    }
    valorEsValido(value) {
        if (!value)
            return false;
        return this.listado.some(item => {
            const texto = this.propiedades.map(prop => item[prop]).join(' - ');
            return texto === value;
        });
    }
    onAccionSeleccionada(event) {
        this.accionSeleccionada.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: DropdownComponent, isStandalone: true, selector: "app-dropdown", inputs: { value: "value", label: "label", listado: "listado", placeholder: "placeholder", agregarItem: "agregarItem", propiedades: "propiedades", accion: "accion" }, outputs: { blurEvent: "blurEvent", itemSeleccionado: "itemSeleccionado", accionSeleccionada: "accionSeleccionada" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: DropdownComponent,
                multi: true
            }], usesOnChanges: true, ngImport: i0, template: "<div class=\"row\" [ngClass]=\"label ? 'mb-3' : ''\">\r\n\r\n    <label *ngIf=\"label\" class=\"col-sm-4 col-form-label\">{{ label }}</label>\r\n\r\n    <div class=\"col-sm-8 dropdown position-relative\">\r\n\r\n        <div class=\"input-group\">\r\n\r\n            <input \r\n                type=\"text\" \r\n                name=\"value\" \r\n                [(ngModel)]=\"value\" \r\n                class=\"form-control dropdown-toggle\"\r\n                [ngClass]=\"{'is-invalid': isTouched && isEmpty(value)}\"\r\n                (click)=\"onTouched()\"\r\n                (keyup)=\"buscar($event)\"\r\n                (blur)=\"onInputBlur()\"\r\n                [disabled]=\"isDisabled\" \r\n                [placeholder]=\"placeholder\"\r\n                data-bs-toggle=\"dropdown\"\r\n                autocomplete=\"off\">\r\n            \r\n            <ul class=\"dropdown-menu overflow-auto rounded-0 position-absolute\"\r\n                [ngStyle]=\"{ 'display': busquedaRealizada ? 'block' : 'none' }\">\r\n                <ng-container *ngIf=\"listadoFiltrado.length > 0; else noExiste\">\r\n                    <li\r\n                        class=\"dropdown-item\"\r\n                        *ngFor=\"let i = index; let item of listadoFiltrado\" \r\n                        [class.is-active]=\"indiceActivo === i\"\r\n                        (mousedown)=\"forzarReporteCambios(item)\">\r\n                        {{item}}\r\n                    </li>\r\n                </ng-container>\r\n                <ng-template #noExiste>\r\n                    <li class=\"dropdown-item disabled\">{{ mensajes.noExiste }}</li>\r\n                </ng-template>\r\n            </ul>\r\n\r\n            <button *ngIf=\"accion\" class=\"btn btn-light ms-2\" (click)=\"onAccionSeleccionada(accion)\">\r\n                <span class=\"icon is-small\">\r\n                    <i class=\"fas\" [ngClass]=\"accion.icono\"></i>\r\n                </span>\r\n            </button>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>", styles: ["ul.dropdown-menu.show{position:fixed!important}.dropdown-menu{position:fixed!important;max-height:140px;margin-top:2.5rem;scrollbar-width:thin;scrollbar-color:var(--light-hover);--bs-dropdown-link-active-bg: var(--principal)}.dropdown-menu::-webkit-scrollbar{width:8px}.dropdown-menu::-webkit-scrollbar-thumb{background:var(--light-hover)}.dropdown-menu .dropdown-item.is-active{background-color:var(--principal);color:#fff}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:none}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dropdown', standalone: true, imports: [
                        FormsModule,
                        CommonModule
                    ], providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: DropdownComponent,
                            multi: true
                        }], template: "<div class=\"row\" [ngClass]=\"label ? 'mb-3' : ''\">\r\n\r\n    <label *ngIf=\"label\" class=\"col-sm-4 col-form-label\">{{ label }}</label>\r\n\r\n    <div class=\"col-sm-8 dropdown position-relative\">\r\n\r\n        <div class=\"input-group\">\r\n\r\n            <input \r\n                type=\"text\" \r\n                name=\"value\" \r\n                [(ngModel)]=\"value\" \r\n                class=\"form-control dropdown-toggle\"\r\n                [ngClass]=\"{'is-invalid': isTouched && isEmpty(value)}\"\r\n                (click)=\"onTouched()\"\r\n                (keyup)=\"buscar($event)\"\r\n                (blur)=\"onInputBlur()\"\r\n                [disabled]=\"isDisabled\" \r\n                [placeholder]=\"placeholder\"\r\n                data-bs-toggle=\"dropdown\"\r\n                autocomplete=\"off\">\r\n            \r\n            <ul class=\"dropdown-menu overflow-auto rounded-0 position-absolute\"\r\n                [ngStyle]=\"{ 'display': busquedaRealizada ? 'block' : 'none' }\">\r\n                <ng-container *ngIf=\"listadoFiltrado.length > 0; else noExiste\">\r\n                    <li\r\n                        class=\"dropdown-item\"\r\n                        *ngFor=\"let i = index; let item of listadoFiltrado\" \r\n                        [class.is-active]=\"indiceActivo === i\"\r\n                        (mousedown)=\"forzarReporteCambios(item)\">\r\n                        {{item}}\r\n                    </li>\r\n                </ng-container>\r\n                <ng-template #noExiste>\r\n                    <li class=\"dropdown-item disabled\">{{ mensajes.noExiste }}</li>\r\n                </ng-template>\r\n            </ul>\r\n\r\n            <button *ngIf=\"accion\" class=\"btn btn-light ms-2\" (click)=\"onAccionSeleccionada(accion)\">\r\n                <span class=\"icon is-small\">\r\n                    <i class=\"fas\" [ngClass]=\"accion.icono\"></i>\r\n                </span>\r\n            </button>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>", styles: ["ul.dropdown-menu.show{position:fixed!important}.dropdown-menu{position:fixed!important;max-height:140px;margin-top:2.5rem;scrollbar-width:thin;scrollbar-color:var(--light-hover);--bs-dropdown-link-active-bg: var(--principal)}.dropdown-menu::-webkit-scrollbar{width:8px}.dropdown-menu::-webkit-scrollbar-thumb{background:var(--light-hover)}.dropdown-menu .dropdown-item.is-active{background-color:var(--principal);color:#fff}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:none}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], label: [{
                type: Input
            }], listado: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], agregarItem: [{
                type: Input
            }], propiedades: [{
                type: Input
            }], blurEvent: [{
                type: Output
            }], itemSeleccionado: [{
                type: Output
            }], accion: [{
                type: Input
            }], accionSeleccionada: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHJvcGRvd24vc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Ryb3Bkb3duL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUF3QixXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWlCdEYsTUFBTSxPQUFPLGlCQUFpQjtJQWY5QjtRQWlCUyxhQUFRLEdBQXlCLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxjQUFTLEdBQWUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUV4QixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUNqQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFHN0IsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdDOztXQUVHO1FBQ2EsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFD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LE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQywrQ0NqQkosdy9EQWdETSx1akJEeENGLFdBQVcsOG1CQUNYLFlBQVk7OzRGQVVILGlCQUFpQjtrQkFmN0IsU0FBUzsrQkFDRSxjQUFjLGNBQ1osSUFBSSxXQUNQO3dCQUNQLFdBQVc7d0JBQ1gsWUFBWTtxQkFDYixhQUdVLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxtQkFBbUI7NEJBQzlCLEtBQUssRUFBRSxJQUFJO3lCQUNaLENBQUM7OEJBY2MsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxLQUFLO3NCQUFwQixLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUtVLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQ1csU0FBUztzQkFBekIsTUFBTTtnQkFDVSxnQkFBZ0I7c0JBQWhDLE1BQU07Z0JBS1MsTUFBTTtzQkFBckIsS0FBSztnQkFDVyxrQkFBa0I7c0JBQWxDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybXNNb2R1bGUsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZHJvcGRvd24nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MnLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IERyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIHB1YmxpYyBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcbiAgcHVibGljIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc1RvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIGluZGljZUFjdGl2bzogbnVtYmVyID0gMDtcclxuICBwcm90ZWN0ZWQgbGlzdGFkb0FjdGl2bzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBsaXN0YWRvRmlsdHJhZG86IEFycmF5PGFueT4gPSBbXTtcclxuICBwcm90ZWN0ZWQgYnVzcXVlZGFSZWFsaXphZGE6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgbGlzdGFkbzogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcHVibGljIGFncmVnYXJJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BpZWRhZCBkZSBsb3Mgb2JqZXRvcyBkZWwgbGlzdGFkbyBxdWUgc2UgdmEgYSB1c2FyIHBhcmEgZmlsdHJhclxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwcm9waWVkYWRlczogc3RyaW5nW10gPSBbXTtcclxuICBAT3V0cHV0KCkgcHVibGljIGJsdXJFdmVudDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgaXRlbVNlbGVjY2lvbmFkbzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQWNjacOzbiBkZWwgYm90w7NuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGFjY2lvbjogYW55O1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgYWNjaW9uU2VsZWNjaW9uYWRhOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJvdGVjdGVkIG1lbnNhamVzID0ge1xyXG4gICAgbm9FeGlzdGU6ICdObyBleGlzdGUnXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbJ3ZhbHVlJ10pIHtcclxuICAgICAgdGhpcy53cml0ZVZhbHVlKGNoYW5nZXNbJ3ZhbHVlJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMucHJvcGllZGFkZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByb3BpZWRhZGVzXHJcbiAgICAgICAgICAubWFwKHByb3AgPT4gdGhpcy52YWx1ZVtwcm9wXSlcclxuICAgICAgICAgIC5maWx0ZXIodmFsID0+IHZhbClcclxuICAgICAgICAgIC5qb2luKCcgLSAnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpc3RhZG9GaWx0cmFkbyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb3J6YXJSZXBvcnRlQ2FtYmlvcyhpdGVtU2VsZWNjaW9uYWRvOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmFncmVnYXJJdGVtICYmICFpdGVtU2VsZWNjaW9uYWRvKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gaXRlbVNlbGVjY2lvbmFkbyB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYmpldG9PcmlnaW5hbCA9IHRoaXMubGlzdGFkby5maW5kKGl0ZW0gPT5cclxuICAgICAgdGhpcy5wcm9waWVkYWRlcy5tYXAocHJvcCA9PiBpdGVtW3Byb3BdKS5qb2luKCcgLSAnKSA9PT0gdGhpcy52YWx1ZVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG5cclxuICAgIGlmICghdGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLml0ZW1TZWxlY2Npb25hZG8uZW1pdCgnJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLml0ZW1TZWxlY2Npb25hZG8uZW1pdChvYmpldG9PcmlnaW5hbCB8fCB0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMubGlzdGFkb0FjdGl2byA9IGZhbHNlO1xyXG4gICAgdGhpcy5idXNxdWVkYVJlYWxpemFkYSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1c2NhcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5saXN0YWRvQWN0aXZvID0gZmFsc2U7XHJcbiAgICB0aGlzLmJ1c3F1ZWRhUmVhbGl6YWRhID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuZm9yemFyUmVwb3J0ZUNhbWJpb3ModmFsdWUpO1xyXG4gICAgICB0aGlzLmJ1c3F1ZWRhUmVhbGl6YWRhID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpc3RhZG9GaWx0cmFkbyA9IHRoaXMubGlzdGFkb1xyXG4gICAgICAubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IHRleHRvID0gdGhpcy5wcm9waWVkYWRlcy5tYXAocHJvcCA9PiBpdGVtW3Byb3BdKS5qb2luKCcgLSAnKTtcclxuICAgICAgICByZXR1cm4geyBpdGVtLCB0ZXh0byB9O1xyXG4gICAgICB9KVxyXG4gICAgICAuZmlsdGVyKCh7IHRleHRvIH0pID0+IHRleHRvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpKVxyXG4gICAgICAubWFwKCh7IHRleHRvIH0pID0+IHRleHRvKTtcclxuXHJcbiAgICBpZiAodGhpcy5saXN0YWRvRmlsdHJhZG8ubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmxpc3RhZG9BY3Rpdm8gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXN0YWJsZWNlckl0ZW1BY3Rpdm8oZXZlbnQuY29kZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXN0YWJsZWNlckl0ZW1BY3Rpdm8oY29kaWdvVGVjbGE6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMubGlzdGFkb0ZpbHRyYWRvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpZiAodGhpcy5hZ3JlZ2FySXRlbSkge1xyXG4gICAgICAgIHRoaXMuZm9yemFyUmVwb3J0ZUNhbWJpb3ModGhpcy52YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29kaWdvVGVjbGEgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIHRoaXMuaW5kaWNlQWN0aXZvID0gKHRoaXMuaW5kaWNlQWN0aXZvICsgMSkgJSB0aGlzLmxpc3RhZG9GaWx0cmFkby5sZW5ndGg7XHJcbiAgICB9IGVsc2UgaWYgKGNvZGlnb1RlY2xhID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgdGhpcy5pbmRpY2VBY3Rpdm8gPSAodGhpcy5pbmRpY2VBY3Rpdm8gLSAxICsgdGhpcy5saXN0YWRvRmlsdHJhZG8ubGVuZ3RoKSAlIHRoaXMubGlzdGFkb0ZpbHRyYWRvLmxlbmd0aDtcclxuICAgIH0gZWxzZSBpZiAoY29kaWdvVGVjbGEgPT09ICdFbnRlcicgJiYgdGhpcy5pbmRpY2VBY3Rpdm8gPj0gMCkge1xyXG4gICAgICBjb25zdCBpdGVtU2VsZWNjaW9uYWRvID0gdGhpcy5saXN0YWRvRmlsdHJhZG9bdGhpcy5pbmRpY2VBY3Rpdm9dO1xyXG4gICAgICB0aGlzLmZvcnphclJlcG9ydGVDYW1iaW9zKGl0ZW1TZWxlY2Npb25hZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWl0ZW0uaXMtYWN0aXZlJyk7XHJcbiAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnbmVhcmVzdCcgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uSW5wdXRCbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5idXNxdWVkYVJlYWxpemFkYSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLmxhYmVsKSB7XHJcbiAgICAgIHRoaXMuaXNUb3VjaGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHRoaXMuaXNFbXB0eSh0aGlzLnZhbHVlKSB8fCAhdGhpcy52YWxvckVzVmFsaWRvKHRoaXMudmFsdWUpKSkge1xyXG4gICAgICB0aGlzLmZvcnphclJlcG9ydGVDYW1iaW9zKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5ibHVyRXZlbnQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRW1wdHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHZhbG9yRXNWYWxpZG8odmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmxpc3RhZG8uc29tZShpdGVtID0+IHtcclxuICAgICAgY29uc3QgdGV4dG8gPSB0aGlzLnByb3BpZWRhZGVzLm1hcChwcm9wID0+IGl0ZW1bcHJvcF0pLmpvaW4oJyAtICcpO1xyXG4gICAgICByZXR1cm4gdGV4dG8gPT09IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25BY2Npb25TZWxlY2Npb25hZGEoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY2Npb25TZWxlY2Npb25hZGEuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxufSIsIjxkaXYgY2xhc3M9XCJyb3dcIiBbbmdDbGFzc109XCJsYWJlbCA/ICdtYi0zJyA6ICcnXCI+XHJcblxyXG4gICAgPGxhYmVsICpuZ0lmPVwibGFiZWxcIiBjbGFzcz1cImNvbC1zbS00IGNvbC1mb3JtLWxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOCBkcm9wZG93biBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidmFsdWVcIiBcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGRyb3Bkb3duLXRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2lzLWludmFsaWQnOiBpc1RvdWNoZWQgJiYgaXNFbXB0eSh2YWx1ZSl9XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvblRvdWNoZWQoKVwiXHJcbiAgICAgICAgICAgICAgICAoa2V5dXApPVwiYnVzY2FyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25JbnB1dEJsdXIoKVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiIFxyXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51IG92ZXJmbG93LWF1dG8gcm91bmRlZC0wIHBvc2l0aW9uLWFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgJ2Rpc3BsYXknOiBidXNxdWVkYVJlYWxpemFkYSA/ICdibG9jaycgOiAnbm9uZScgfVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxpc3RhZG9GaWx0cmFkby5sZW5ndGggPiAwOyBlbHNlIG5vRXhpc3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpID0gaW5kZXg7IGxldCBpdGVtIG9mIGxpc3RhZG9GaWx0cmFkb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuaXMtYWN0aXZlXT1cImluZGljZUFjdGl2byA9PT0gaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwiZm9yemFyUmVwb3J0ZUNhbWJpb3MoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vRXhpc3RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gZGlzYWJsZWRcIj57eyBtZW5zYWplcy5ub0V4aXN0ZSB9fTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImFjY2lvblwiIGNsYXNzPVwiYnRuIGJ0bi1saWdodCBtcy0yXCIgKGNsaWNrKT1cIm9uQWNjaW9uU2VsZWNjaW9uYWRhKGFjY2lvbilcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzXCIgW25nQ2xhc3NdPVwiYWNjaW9uLmljb25vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj4iXX0=