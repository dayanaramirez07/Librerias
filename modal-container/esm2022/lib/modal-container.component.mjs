import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ModalContainerComponent {
    constructor(injector) {
        this.injector = injector;
        this.modalActivo = false;
    }
    openModal(componentType, inputs = {}, outputs = {}) {
        if (this.modalActivo) {
            return;
        }
        this.modalActivo = true;
        const componentRef = this.modalContainer.createComponent(componentType, {
            injector: this.injector
        });
        // Establecer inputs
        for (const input in inputs) {
            if (inputs.hasOwnProperty(input)) {
                componentRef.instance[input] = inputs[input];
            }
        }
        // Manejar outputs (eventos)
        for (const output in outputs) {
            if (outputs.hasOwnProperty(output)) {
                componentRef.instance[output].subscribe(outputs[output]);
            }
        }
    }
    closeModal() {
        this.modalActivo = false;
        this.modalContainer.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ModalContainerComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ModalContainerComponent, isStandalone: true, selector: "lib-modal-container", viewQueries: [{ propertyName: "modalContainer", first: true, predicate: ["modalContainer"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: `
      <div [ngClass]="modalActivo ? 'modal is-active' : 'modal'">
      <div class="modal-background" (click)="closeModal()"></div>
      <div class="modal-content">
        <div class="box">
          <ng-template #modalContainer></ng-template>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".modal-content{width:90%;height:85%;overflow:hidden}.box{height:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ModalContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-modal-container', standalone: true, imports: [
                        CommonModule
                    ], template: `
      <div [ngClass]="modalActivo ? 'modal is-active' : 'modal'">
      <div class="modal-background" (click)="closeModal()"></div>
      <div class="modal-content">
        <div class="box">
          <ng-template #modalContainer></ng-template>
        </div>
      </div>
    </div>
  `, styles: [".modal-content{width:90%;height:85%;overflow:hidden}.box{height:100%}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }], propDecorators: { modalContainer: [{
                type: ViewChild,
                args: ['modalContainer', { read: ViewContainerRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21vZGFsLWNvbnRhaW5lci9zcmMvbGliL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQVksU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUE4QmpGLE1BQU0sT0FBTyx1QkFBdUI7SUFNbEMsWUFDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTHJCLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBTWhDLENBQUM7SUFFRSxTQUFTLENBQUMsYUFBa0IsRUFBRSxTQUFjLEVBQUUsRUFBRSxVQUFlLEVBQUU7UUFDdEUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUU7WUFDdEUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQVEsQ0FBQztRQUVWLG9CQUFvQjtRQUNwQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQzNCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0gsQ0FBQztRQUVELDRCQUE0QjtRQUM1QixLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQzdCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDOytHQXRDVSx1QkFBdUI7bUdBQXZCLHVCQUF1Qiw0S0FJRyxnQkFBZ0IsNkJBMUIzQzs7Ozs7Ozs7O0dBU1QsZ0pBWEMsWUFBWTs7NEZBd0JILHVCQUF1QjtrQkE1Qm5DLFNBQVM7K0JBQ0UscUJBQXFCLGNBQ25CLElBQUksV0FDUDt3QkFDUCxZQUFZO3FCQUNiLFlBQ1M7Ozs7Ozs7OztHQVNUOzZFQWlCK0QsY0FBYztzQkFBN0UsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItbW9kYWwtY29udGFpbmVyJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBbbmdDbGFzc109XCJtb2RhbEFjdGl2byA/ICdtb2RhbCBpcy1hY3RpdmUnIDogJ21vZGFsJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiIChjbGljayk9XCJjbG9zZU1vZGFsKClcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI21vZGFsQ29udGFpbmVyPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IGBcclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmJveCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB7XHJcblxyXG4gIHB1YmxpYyBtb2RhbEFjdGl2bzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAVmlld0NoaWxkKCdtb2RhbENvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBwdWJsaWMgbW9kYWxDb250YWluZXIhOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgKSB7IH1cclxuXHJcbiAgcHVibGljIG9wZW5Nb2RhbChjb21wb25lbnRUeXBlOiBhbnksIGlucHV0czogYW55ID0ge30sIG91dHB1dHM6IGFueSA9IHt9KSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbEFjdGl2bykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb2RhbEFjdGl2byA9IHRydWU7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLm1vZGFsQ29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRUeXBlLCB7XHJcbiAgICAgIGluamVjdG9yOiB0aGlzLmluamVjdG9yXHJcbiAgICB9KSBhcyBhbnk7XHJcblxyXG4gICAgLy8gRXN0YWJsZWNlciBpbnB1dHNcclxuICAgIGZvciAoY29uc3QgaW5wdXQgaW4gaW5wdXRzKSB7XHJcbiAgICAgIGlmIChpbnB1dHMuaGFzT3duUHJvcGVydHkoaW5wdXQpKSB7XHJcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlW2lucHV0XSA9IGlucHV0c1tpbnB1dF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNYW5lamFyIG91dHB1dHMgKGV2ZW50b3MpXHJcbiAgICBmb3IgKGNvbnN0IG91dHB1dCBpbiBvdXRwdXRzKSB7XHJcbiAgICAgIGlmIChvdXRwdXRzLmhhc093blByb3BlcnR5KG91dHB1dCkpIHtcclxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Vbb3V0cHV0XS5zdWJzY3JpYmUob3V0cHV0c1tvdXRwdXRdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlTW9kYWwoKSB7XHJcbiAgICB0aGlzLm1vZGFsQWN0aXZvID0gZmFsc2U7XHJcbiAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=