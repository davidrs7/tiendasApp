import { Injectable } from '@angular/core';
import { referencias, productoPorIdReferencia, productoxIdColoryReferencia } from './interfaces/referencias';
import { modelos } from './interfaces/modelos';
 

@Injectable()
export class TiendaService {
  constructor(private _modelo: modelos) {
    console.log('Servicio de tiendas listo para usar!!');
  };


  getReferencias(): referencias[] {
    return this._modelo.referencias;
  };

  getProductosXrefCod(refCodigo: number): productoPorIdReferencia[] {
    return this._modelo.refColor.filter(ref => ref.refCodigo == refCodigo);
  };

  getProductoxIdColoryReferencia(refCodigo: number, colorCodigo: number):productoxIdColoryReferencia[] { 
    console.log ('en servicio' + refCodigo);
    return this._modelo.producto.filter(prod => prod.codColor == colorCodigo && prod.refCodigo == refCodigo);
  };

} 