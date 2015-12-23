System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(http) {
                    this.http = http;
                    this.storeFrontFeatures = [
                        { name: "Northwind Database" },
                        { name: "Browser for Products" },
                        { name: "Search & FIlter Products" },
                        { name: "Add to Cart & Checkout" },
                        { name: "Place Order" }
                    ];
                    http.get('api/categories')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (categories) { return console.log(categories); });
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-store',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: './app/home/home.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map