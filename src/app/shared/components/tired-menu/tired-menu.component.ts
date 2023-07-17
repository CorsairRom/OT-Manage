import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { items } from "src/app/OT_DSR/catalogo/unidades/components/tabla-unidades/menu-item";

@Component({
  selector: 'app-tired-menu',
  templateUrl: './tired-menu.component.html',
  styles: [
    `


  .p-menu {
    top: 0 !important;
    left: 0 !important;
    margin-top: 40px;
  }
    `
  ]
})
export class TiredMenuComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.menu.model);

  }

  @Input() codigo!:string;
  @Input() event!:Event;

  @ViewChild( 'menu' ) menu!: TieredMenu;

  items: MenuItem[] | undefined;
  ngOnInit() {
    console.log(this.codigo);
    this.items = [
        {
            label: 'Unidad',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Editar',
                    icon: 'pi pi-fw pi-trash',
                    command: () => this.addNewUser(),
                },
                {
                    label: 'Eliminar',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Subunidad',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Editar',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Eliminar',
                    icon: 'pi pi-fw pi-align-right'
                },

            ]
        }


    ];
}
addNewUser(){

}

}
