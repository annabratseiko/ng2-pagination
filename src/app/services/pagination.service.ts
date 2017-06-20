import { Injectable } from '@angular/core';
import { DATA } from './data';

@Injectable()
export class PaginationService {
  private dataUrl = './src/structure.json';

  constructor () {}

  public getData(): Promise<any[]> {
    return Promise.resolve(DATA);
  }
}

