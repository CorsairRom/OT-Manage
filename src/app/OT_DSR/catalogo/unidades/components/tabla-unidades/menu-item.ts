
import { TablaUnidadesComponent } from "./tabla-unidades.component";
import { MenuItem } from 'primeng/api';

export const items:MenuItem[] = [
  {
      label: 'Unidad',
      icon: 'pi pi-fw pi-file',
      items: [
          {
              label: 'Editar',
              icon: 'pi pi-fw pi-trash',

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



