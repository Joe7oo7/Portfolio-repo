import { Injectable } from '@angular/core';
import { loadFull } from 'tsparticles';
import { tsParticles } from 'tsparticles';
@Injectable({
  providedIn: 'root'
})
export class TsparticlesService {

  constructor() { 
  loadFull(tsParticles);  
  }
  loadParticles(options:any):void{
    tsParticles.load('tsparticles',options);
  }
}
