
export interface notifica {
  valor: string
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
  tallaCodigo: number,
  talla: string,
  cantidad: number,
  vlrUnidad: number,
  DescProducto: string
}