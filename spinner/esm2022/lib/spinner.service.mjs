import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class SpinnerService {
    constructor() {
        this.isLoading$ = new BehaviorSubject(false);
    }
    get isLoading() {
        return this.isLoading$.asObservable();
    }
    mostrar() {
        this.isLoading$.next(true);
        if (this.temporizador) {
            clearTimeout(this.temporizador);
        }
        this.temporizador = setTimeout(() => {
            this.ocultar();
        }, 60000);
    }
    ocultar() {
        this.isLoading$.next(false);
        if (this.temporizador) {
            clearTimeout(this.temporizador);
            this.temporizador = null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpinnerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3Bpbm5lci9zcmMvbGliL3NwaW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7O0FBS25ELE1BQU0sT0FBTyxjQUFjO0lBSDNCO1FBS1MsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQTZCMUU7SUF6QkMsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDOytHQTdCVSxjQUFjO21IQUFkLGNBQWMsY0FGYixNQUFNOzs0RkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBpc0xvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgcHJpdmF0ZSB0ZW1wb3JpemFkb3I6IGFueTtcclxuXHJcbiAgcHVibGljIGdldCBpc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0xvYWRpbmckLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vc3RyYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyQubmV4dCh0cnVlKTtcclxuXHJcbiAgICBpZiAodGhpcy50ZW1wb3JpemFkb3IpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGVtcG9yaXphZG9yKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRlbXBvcml6YWRvciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9jdWx0YXIoKTtcclxuICAgIH0sIDYwMDAwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvY3VsdGFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0xvYWRpbmckLm5leHQoZmFsc2UpO1xyXG5cclxuICAgIGlmICh0aGlzLnRlbXBvcml6YWRvcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50ZW1wb3JpemFkb3IpO1xyXG4gICAgICB0aGlzLnRlbXBvcml6YWRvciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdfQ==