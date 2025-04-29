import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./spinner.service";
import * as i2 from "@angular/common";
export class SpinnerComponent {
    constructor(_spinnerService) {
        this._spinnerService = _spinnerService;
        this.isLoading = true;
        this._spinnerService.isLoading$.subscribe(spinner => {
            this.isLoading = spinner;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerComponent, deps: [{ token: i1.SpinnerService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SpinnerComponent, isStandalone: true, selector: "lib-spinner", ngImport: i0, template: `
    <div
      *ngIf="isLoading"
      class="d-flex justify-content-center align-items-center vh-100 position-fixed top-0 start-0 w-100 z-3 bg-white">
      <div 
        class="position-fixed top-50 spinner-border text-primary"
        role="status">
      </div>
      <p class="position-fixed mt-5 top-50">Cargando...</p>
    </div>
  `, isInline: true, styles: [".spinner-border{height:40px;width:40px;border-width:5px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-spinner', standalone: true, imports: [
                        CommonModule
                    ], template: `
    <div
      *ngIf="isLoading"
      class="d-flex justify-content-center align-items-center vh-100 position-fixed top-0 start-0 w-100 z-3 bg-white">
      <div 
        class="position-fixed top-50 spinner-border text-primary"
        role="status">
      </div>
      <p class="position-fixed mt-5 top-50">Cargando...</p>
    </div>
  `, styles: [".spinner-border{height:40px;width:40px;border-width:5px}\n"] }]
        }], ctorParameters: () => [{ type: i1.SpinnerService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zcGlubmVyL3NyYy9saWIvc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUEyQi9DLE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0IsWUFDVSxlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFIbEMsY0FBUyxHQUFZLElBQUksQ0FBQztRQUsvQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQ3ZDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOytHQVpVLGdCQUFnQjttR0FBaEIsZ0JBQWdCLHVFQW5CakI7Ozs7Ozs7Ozs7R0FVVCxtSUFaQyxZQUFZOzs0RkFxQkgsZ0JBQWdCO2tCQXpCNUIsU0FBUzsrQkFDRSxhQUFhLGNBQ1gsSUFBSSxXQUNQO3dCQUNQLFlBQVk7cUJBQ2IsWUFDUzs7Ozs7Ozs7OztHQVVUIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc3Bpbm5lcicsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgICpuZ0lmPVwiaXNMb2FkaW5nXCJcclxuICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdmgtMTAwIHBvc2l0aW9uLWZpeGVkIHRvcC0wIHN0YXJ0LTAgdy0xMDAgei0zIGJnLXdoaXRlXCI+XHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3M9XCJwb3NpdGlvbi1maXhlZCB0b3AtNTAgc3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCJcclxuICAgICAgICByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzcz1cInBvc2l0aW9uLWZpeGVkIG10LTUgdG9wLTUwXCI+Q2FyZ2FuZG8uLi48L3A+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogYFxyXG4gICAgLnNwaW5uZXItYm9yZGVyIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCB7XHJcblxyXG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3NwaW5uZXJTZXJ2aWNlOiBTcGlubmVyU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5fc3Bpbm5lclNlcnZpY2UuaXNMb2FkaW5nJC5zdWJzY3JpYmUoXHJcbiAgICAgIHNwaW5uZXIgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gc3Bpbm5lcjtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59Il19