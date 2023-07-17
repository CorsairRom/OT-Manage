import {  Component,  Input,  OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


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
export class TiredMenuComponent implements OnInit {

  @Input() codigo!:string;

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
                    icon: 'pi pi-fw pi-trash'
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


}
