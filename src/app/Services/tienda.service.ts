import { Injectable } from '@angular/core';

@Injectable()
export class TiendaService {
  constructor() {
    console.log('Servicio de tiendas listo para usar!!');
  }

  // primero va quemado despues invocar el web service
  private referencias: referencias[] =
    [
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        img: 'assets/img/Productos/BusosCapota.PNG'

      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        img: 'assets/img/Productos/BusosSinCapota.PNG'

      }, 
      {
        refCodigo: 3,
        refDescripcion: 'BUSO PARA NIÑOS UNISEX',
        img: 'assets/img/Productos/BusosNiñoCapota.PNG'

      }
    ];

  // Respuesta del inventario filtrado por 
  private refColor: productoPorIdReferencia[] =
    [
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/RojoCapota.PNG'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        color: 'Verde neon',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/NeonCapota.PNG'
      },
      {
        refCodigo: 3,
        refDescripcion: 'BUSO CON CAPOTA UNISEX NIÑOS',
        color: 'Verde menta',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/MentaCapota.PNG'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA',
        color: 'Rosado barbie',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/BarbieCapota.PNG'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        color: 'Azul aguamarina',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/AguamarinaCapota.PNG'
      },
      {
        refCodigo: 3,
        refDescripcion: 'BUSO CON CAPOTA UNISEX NIÑO',
        color: 'Azul Oscuro',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/AzulOscutoCapota.PNG'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        color: 'Verde Cali',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/CaliCapota.PNG'
      }
    ]



  getReferencias(): referencias[] {
    return this.referencias;
  }

  getProductosXrefCod(refCodigo:number):productoPorIdReferencia[]
  {
    console.log('codigo - ' + refCodigo)
    return this.refColor.filter( ref => ref.refCodigo == refCodigo);
  }

}

export interface referencias {
  refCodigo: number;
  refDescripcion: string;
  img: string;
}

export interface productoPorIdReferencia
{
  refCodigo: number;
  refDescripcion: string;
  color: string;
  vlrUnidad: number;
  img: string;
}
