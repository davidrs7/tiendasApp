import { Injectable, OnInit } from "@angular/core";
import { productoPorIdReferencia, productoxIdColoryReferencia, referencias } from "./referencias";

 
 
@Injectable()
export class modelos implements OnInit {
  constructor() { 
  }
    ngOnInit(): void { 
    }


  public referencias: referencias[] =
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

  public refColor: productoPorIdReferencia[] =
  [
    //busos con capota unisex
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/capota/RojoCapota.PNG'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 2,
      color: 'Verde neon',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/capota/NeonCapota.PNG'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX NIÑOS',
      codColor: 3,
      color: 'Verde menta',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/capota/MentaCapota.PNG'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO SIN CAPOTA',
      codColor: 4,
      color: 'Rosado barbie',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/capota/BarbieCapota.PNG'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 5,
      color: 'Azul aguamarina',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/capota/AguamarinaCapota.PNG'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX NIÑO',
      codColor: 6,
      color: 'Azul Oscuro',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/capota/AzulOscutoCapota.PNG'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 7,
      color: 'Verde Cali',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/capota/CaliCapota.PNG'
    },
    //busos sin capota unisex
    {
      refCodigo: 2,
      refDescripcion: 'BUSO CON sinCapota UNISEX',
      codColor: 1,
      color: 'Rojo',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/sinCapota/RojosinCapota.PNG'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO CON sinCapota UNISEX',
      codColor: 2,
      color: 'Amarillo',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/sinCapota/AmarillosinCapota.PNG'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO CON sinCapota UNISEX NIÑOS',
      codColor: 3,
      color: 'Verde menta',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/sinCapota/MentasinCapota.PNG'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA',
      codColor: 4,
      color: 'Rosado barbie',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/sinCapota/BarbiesinCapota.PNG'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO CON sinCapota UNISEX',
      codColor: 5,
      color: 'Jaspe',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/sinCapota/JaspesinCapota.PNG'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO CON sinCapota UNISEX NIÑO',
      codColor: 6,
      color: 'Azul Oscuro',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/sinCapota/AzulOscutosinCapota.PNG'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 7,
      color: 'Verde Cali',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/sinCapota/CalisinCapota.PNG'     
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 1,
      color: 'Rojo',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/niño/niños.PNG'    
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 2,
      color: 'Amarillo',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/niño/niños.PNG'    
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 3,
      color: 'Azul Rey',
      vlrUnidad: 33000,
      img: 'assets/img/Productos/niño/niños.PNG'    
    },

  ];

  public producto: productoxIdColoryReferencia[] =
  [
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/capota/RojoCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/capota/RojoCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/capota/RojoCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/capota/RojoCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 2,
      color: 'Verde neon',
      img: 'assets/img/Productos/capota/NeonCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 2,
      color: 'Verde neon',
      img: 'assets/img/Productos/capota/NeonCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 2,
      color: 'Verde neon',
      img: 'assets/img/Productos/capota/NeonCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 2,
      color: 'Verde neon',
      img: 'assets/img/Productos/capota/NeonCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 3,
      color: 'Verde menta',
      img: 'assets/img/Productos/capota/MentaCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 3,
      color: 'Verde menta',
      img: 'assets/img/Productos/capota/MentaCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 3,
      color: 'Verde menta',
      img: 'assets/img/Productos/capota/MentaCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 3,
      color: 'Verde menta',
      img: 'assets/img/Productos/capota/MentaCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 4,
      color: 'Rosado barbie',
      img: 'assets/img/Productos/capota/BarbieCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 4,
      color: 'Rosado barbie',
      img: 'assets/img/Productos/capota/BarbieCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 4,
      color: 'Rosado barbie',
      img: 'assets/img/Productos/capota/BarbieCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 4,
      color: 'Rosado barbie',
      img: 'assets/img/Productos/capota/BarbieCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 5,
      color: 'Azul aguamarina',
      img: 'assets/img/Productos/capota/AguamarinaCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 5,
      color: 'Azul aguamarina',
      img: 'assets/img/Productos/capota/AguamarinaCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 5,
      color: 'Azul aguamarina',
      img: 'assets/img/Productos/capota/AguamarinaCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 5,
      color: 'Azul aguamarina',
      img: 'assets/img/Productos/capota/AguamarinaCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 6,
      color: 'Azul Oscuro',
      img: 'assets/img/Productos/capota/AzulOscutoCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 6,
      color: 'Azul Oscuro',
      img: 'assets/img/Productos/capota/AzulOscutoCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 6,
      color: 'Azul Oscuro',
      img: 'assets/img/Productos/capota/AzulOscutoCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 6,
      color: 'Azul Oscuro',
      img: 'assets/img/Productos/capota/AzulOscutoCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 7,
      color: 'Vernde cali',
      img: 'assets/img/Productos/capota/CaliCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 7,
      color: 'Vernde cali',
      img: 'assets/img/Productos/capota/CaliCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 7,
      color: 'Vernde cali',
      img: 'assets/img/Productos/capota/CaliCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 1,
      refDescripcion: 'BUSO CON CAPOTA UNISEX',
      codColor: 7,
      color: 'Vernde cali',
      img: 'assets/img/Productos/capota/CaliCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/sinCapota/RojosinCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/sinCapota/RojosinCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/sinCapota/RojosinCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/sinCapota/RojosinCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/sinCapota/RojosinCapota.PNG',
      tallaCodigo: 5,
      talla: 'XXL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 2,
      color: 'Amarillo',
      img: 'assets/img/Productos/sinCapota/AmarillosinCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 2,
      color: 'Amarillo',
      img: 'assets/img/Productos/sinCapota/AmarillosinCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 2,
      color: 'Amarillo',
      img: 'assets/img/Productos/sinCapota/AmarillosinCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 2,
      color: 'Amarillo',
      img: 'assets/img/Productos/sinCapota/AmarillosinCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 3,
      color: 'Verde menta',
      img: 'assets/img/Productos/sinCapota/MentasinCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 3,
      color: 'Verde menta',
      img: 'assets/img/Productos/sinCapota/MentasinCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 4,
      color: 'Rosado barbie',
      img: 'assets/img/Productos/sinCapota/BarbiesinCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 4,
      color: 'Rosado barbie',
      img: 'assets/img/Productos/sinCapota/BarbiesinCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 4,
      color: 'Rosado barbie',
      img: 'assets/img/Productos/sinCapota/BarbiesinCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 4,
      color: 'Rosado barbie',
      img: 'assets/img/Productos/sinCapota/BarbiesinCapota.PNG',
      tallaCodigo: 4,
      talla: 'XL',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 5,
      color: 'Jaspe',
      img: 'assets/img/Productos/sinCapota/JaspesinCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 5,
      color: 'Jaspe',
      img: 'assets/img/Productos/sinCapota/JaspesinCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 5,
      color: 'Jaspe',
      img: 'assets/img/Productos/sinCapota/JaspesinCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 6,
      color: 'Azul Oscuro',
      img: 'assets/img/Productos/sinCapota/AzulOscutosinCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 6,
      color: 'Azul Oscuro',
      img: 'assets/img/Productos/sinCapota/AzulOscutosinCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 6,
      color: 'Azul Oscuro',
      img: 'assets/img/Productos/sinCapota/AzulOscutosinCapota.PNG',
      tallaCodigo: 3,
      talla: 'L',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },

    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 7,
      color: 'Vernde cali',
      img: 'assets/img/Productos/sinCapota/CalisinCapota.PNG',
      tallaCodigo: 1,
      talla: 'S',
      cantidad: 6,
      vlrUnidad: 33000, 
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 2,
      refDescripcion: 'BUSO SIN CAPOTA UNISEX',
      codColor: 7,
      color: 'Vernde cali',
      img: 'assets/img/Productos/sinCapota/CalisinCapota.PNG',
      tallaCodigo: 2,
      talla: 'M',
      cantidad: 6,
      vlrUnidad: 33000, 
      DescProducto: 'BUSO SIN CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/niño/niños.PNG',
      tallaCodigo: 12 ,
      talla: '12',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 2,
      color: 'Amarillo',
      img: 'assets/img/Productos/niño/niños.PNG',
      tallaCodigo: 12,
      talla: '12',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA NIÑO UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/niño/niños.PNG',
      tallaCodigo: 14 ,
      talla: '14',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 2,
      color: 'Amarillo',
      img: 'assets/img/Productos/niño/niños.PNG',
      tallaCodigo: 14,
      talla: '14',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA NIÑO UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 1,
      color: 'Rojo',
      img: 'assets/img/Productos/niño/niños.PNG',
      tallaCodigo: 16 ,
      talla: '16',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 2,
      color: 'Amarillo',
      img: 'assets/img/Productos/niño/niños.PNG',
      tallaCodigo: 16,
      talla: '16',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA NIÑO UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 3,
      color: 'Azul Rey',
      img: 'assets/img/Productos/niño/niños.PNG',
      tallaCodigo: 12,
      talla: '12',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA NIÑO UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 3,
      color: 'Azul Rey',
      img: 'assets/img/Productos/niño/niños.PNG',
      tallaCodigo: 14,
      talla: '14',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA NIÑO UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    },
    {
      refCodigo: 3,
      refDescripcion: 'BUSO CON CAPOTA NIÑO UNISEX',
      codColor: 3,
      color: 'Azul Rey',
      img: 'assets/img/Productos/niño/niños.PNG',
      tallaCodigo: 16,
      talla: '16',
      cantidad: 6,
      vlrUnidad: 33000,
      DescProducto: 'BUSO CON CAPOTA NIÑO UNISEX ALGODON PERCHADO MONACO 220 GR DE EXCELENTE CALIDAD, CONFECCION CON PUNTADA DE SEGURIDAD'
    }

  ]

 

  

}