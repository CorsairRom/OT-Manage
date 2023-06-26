import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from './api/product';
import { ProductService } from './service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

import { PropiedadesService } from '../propiedades/propiedades.service';
import { TipoPropiedadesService } from '../core/services/tipo-propiedades.service';
import { PropietarioService } from '../propietarios/propietario.service';
import { PersonalidadJuridicaService } from '../core/services/personalidad-juridica.service';
import { ArrendatarioService } from '../arrendatarios/arrendatario.service';
import { ArriendoService } from '../arriendos/arriendo.service';
import { CuentaBancariaService } from '../cuentas-bancarias/cuenta-bancaria.service';
import { DetalleArriendoService } from '../core/services/detalle-arriendo.service';
import { GastoComunService } from '../core/services/gasto-comun.service';
import { ServicioExtraService } from '../core/services/servicio-extra.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(
        private productService: ProductService, 
        public layoutService: LayoutService, 

        private propiedadService: PropiedadesService,
        private tipoPropiedadService: TipoPropiedadesService,
        private propietarioService: PropietarioService,
        private personalidadJuridicaService: PersonalidadJuridicaService,
        private arrendatarioService: ArrendatarioService,
        private arriendoService: ArriendoService,
        private cuentasBancariasService: CuentaBancariaService,
        private detalleArriendoService: DetalleArriendoService,
        private gastoComunService: GastoComunService,
        private servicioExtraService: ServicioExtraService,
    ) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();

        this.productService.getProductsSmall().then(data => this.products = data);
        
        this.propiedadService.getPropiedades().subscribe(res => console.log('Propiedades', res))
        this.tipoPropiedadService.getTipoPropiedades().subscribe(res => console.log('TipoPropiedades',res))
        this.propietarioService.getPropietarios().subscribe(res => console.log('Propietarios',res))
        this.personalidadJuridicaService.getPersonalidadJuridica().subscribe(res => console.log('PersonalidadJuridica',res))
        this.arrendatarioService.getArrendatarios().subscribe(res => console.log('Arrendatarios',res))
        this.arriendoService.getArriendos().subscribe(res => console.log('Arriendos',res))
        this.cuentasBancariasService.getCuentasBancarias().subscribe(res => console.log('CuentaBancaria',res))
        this.detalleArriendoService.getDetallesArriendo().subscribe(res => console.log('DetalleArriendo',res))
        this.gastoComunService.getGastosComunes().subscribe(res => console.log('GastosComunes',res))
        this.servicioExtraService.getServiciosExtras().subscribe(res => console.log('ServiciosExtras',res))


        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
