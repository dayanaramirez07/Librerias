import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CapitalizarPipe {
    transform(value) {
        if (!value)
            return '';
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CapitalizarPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: CapitalizarPipe, isStandalone: true, name: "capitalizar" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CapitalizarPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'capitalizar',
                    standalone: true
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6YXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxhL3NyYy9saWIvcGlwZXMvY2FwaXRhbGl6YXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFNcEQsTUFBTSxPQUFPLGVBQWU7SUFFakIsU0FBUyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN0QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4RSxDQUFDOytHQUxRLGVBQWU7NkdBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFKM0IsSUFBSTttQkFBQztvQkFDRixJQUFJLEVBQUUsYUFBYTtvQkFDbkIsVUFBVSxFQUFFLElBQUk7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2NhcGl0YWxpemFyJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcGl0YWxpemFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG59Il19