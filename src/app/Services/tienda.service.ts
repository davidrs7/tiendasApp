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
        refDescripcion: 'BUSO CON CAPOTA UNISEX'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO PARA NIÑOS UNISEX'
      }
    ];

  // Respuesta del inventario filtrado por 
  private refColor: productoPorIdReferencia[] =
    [
      {
        refCodigo: 1,
        talla: 'S',
        cantidad: 6,
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/RojoCapota.PNG'
      },
      {
        refCodigo: 1,
        talla: 'M',
        cantidad: 6,
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/NeonCapota.PNG'
      },
      {
        refCodigo: 1,
        talla: 'L',
        cantidad: 6,
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/MentaCapota.PNG'
      },
      {
        refCodigo: 1,
        talla: 'XL',
        cantidad: 6,
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/BarbieCapota.PNG'
      },
      {
        refCodigo: 1,
        talla: 'XL',
        cantidad: 6,
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/AguamarinaCapota.PNG'
      },
      {
        refCodigo: 1,
        talla: 'XL',
        cantidad: 6,
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/AzulOscutoCapota.PNG'
      },
      {
        refCodigo: 1,
        talla: 'XL',
        cantidad: 6,
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/CaliCapota.PNG'
      }
    ]



  getReferencias(): referencias[] {
    return this.referencias;
  }

  getProductosXrefCod():productoPorIdReferencia[]
  {
    return this.refColor;
  }

}

export interface referencias {
  refCodigo: number;
  refDescripcion: string;
}

export interface productoPorIdReferencia
{
  refCodigo: number,
  talla: string,
  cantidad: number,
  color: string,
  vlrUnidad: number,
  img: string
}
