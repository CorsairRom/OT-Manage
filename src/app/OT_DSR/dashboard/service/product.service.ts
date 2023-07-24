import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardData, Product } from '../api/product';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {
    private apiUrl = `${ environment.apiUrl }/api/dashboard`
    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }
    getDataDashboard() {
      return this.http.get<DashboardData>(`${this.apiUrl}/`)
    }
}
