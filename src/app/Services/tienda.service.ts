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
      //busos con capota unisex
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 1,
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/capota/RojoCapota.PNG'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 2,
        color: 'Verde neon',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/capota/NeonCapota.PNG'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX NIÑOS',
        codColor: 3,
        color: 'Verde menta',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/capota/MentaCapota.PNG'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO SIN CAPOTA',
        codColor: 4,
        color: 'Rosado barbie',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/capota/BarbieCapota.PNG'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 5,
        color: 'Azul aguamarina',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/capota/AguamarinaCapota.PNG'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX NIÑO',
        codColor: 6,
        color: 'Azul Oscuro',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/capota/AzulOscutoCapota.PNG'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        codColor: 7,
        color: 'Verde Cali',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/capota/CaliCapota.PNG'
      },
      //busos sin capota unisex
      {
        refCodigo: 2,
        refDescripcion: 'BUSO CON sinCapota UNISEX',
        codColor: 1,
        color: 'Rojo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/sinCapota/RojosinCapota.PNG'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO CON sinCapota UNISEX',
        codColor: 2,
        color: 'Amarillo',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/sinCapota/AmarillosinCapota.PNG'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO CON sinCapota UNISEX NIÑOS',
        codColor: 3,
        color: 'Verde menta',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/sinCapota/MentasinCapota.PNG'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA',
        codColor: 4,
        color: 'Rosado barbie',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/sinCapota/BarbiesinCapota.PNG'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO CON sinCapota UNISEX',
        codColor: 5,
        color: 'Jaspe',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/sinCapota/JaspesinCapota.PNG'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO CON sinCapota UNISEX NIÑO',
        codColor: 6,
        color: 'Azul Oscuro',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/sinCapota/AzulOscutosinCapota.PNG'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        codColor: 7,
        color: 'Verde Cali',
        vlrUnidad: 32.999,
        img: 'assets/img/Productos/sinCapota/CalisinCapota.PNG'
      
      }

    ]

  private producto: productoxIdColoryReferencia[] =
    [
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 1,
        color: 'Rojo',
        img: 'assets/img/Productos/capota/RojoCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 2,
        color: 'Verde neon',
        img: 'assets/img/Productos/capota/NeonCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 3,
        color: 'Verde menta',
        img: 'assets/img/Productos/capota/MentaCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 4,
        color: 'Rosado barbie',
        img: 'assets/img/Productos/capota/BarbieCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 5,
        color: 'Azul aguamarina',
        img: 'assets/img/Productos/capota/AguamarinaCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 6,
        color: 'Azul Oscuro',
        img: 'assets/img/Productos/capota/AzulOscutoCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 1,
        refDescripcion: 'BUSO CON CAPOTA UNISEX',
        codColor: 7,
        color: 'Vernde cali',
        img: 'assets/img/Productos/capota/CaliCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        codColor: 1,
        color: 'Rojo',
        img: 'assets/img/Productos/sinCapota/RojosinCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        codColor: 2,
        color: 'Amarillo',
        img: 'assets/img/Productos/sinCapota/Amarillo.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        codColor: 3,
        color: 'Verde menta',
        img: 'assets/img/Productos/sinCapota/MentasinCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        codColor: 4,
        color: 'Rosado barbie',
        img: 'assets/img/Productos/sinCapota/BarbiesinCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        codColor: 5,
        color: 'Jaspe',
        img: 'assets/img/Productos/sinCapota/JaspesinCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        codColor: 6,
        color: 'Azul Oscuro',
        img: 'assets/img/Productos/sinCapota/AzulOscutosinCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999,
        DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      },
      {
        refCodigo: 2,
        refDescripcion: 'BUSO SIN CAPOTA UNISEX',
        codColor: 7,
        color: 'Vernde cali',
        img: 'assets/img/Productos/sinCapota/CalisinCapota.PNG',
        talla: 'S',
        cantidad: 6,
        vlrUnidad: 32.999, 
        DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
      }
    ]


  getReferencias(): referencias[] {
    return this.referencias;
  }

  getProductosXrefCod(refCodigo: number): productoPorIdReferencia[] {
    return this.refColor.filter(ref => ref.refCodigo == refCodigo);
  }

  getProductoxIdColoryReferencia(refCodigo: number, colorCodigo: number) { 
    console.log ('en servicio' + refCodigo);
    return this.producto.filter(prod => prod.codColor == colorCodigo && prod.refCodigo == refCodigo);
  }

}

export interface referencias {
  refCodigo: number;
  refDescripcion: string;
  img: string;
}

export interface productoPorIdReferencia {
  refCodigo: number;
  refDescripcion: string;
  codColor: number;
  color: string;
  vlrUnidad: number;
  img: string;
}

export interface productoxIdColoryReferencia {
  refCodigo: number,
  refDescripcion: string,
  codColor: number,
  color: string,
  img: string,
  talla: string,
  cantidad: number,
  vlrUnidad: number,
  DescProducto: string
}