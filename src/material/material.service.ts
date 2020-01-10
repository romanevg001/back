import { Injectable } from '@nestjs/common';
import * as dirTree from 'directory-tree';



@Injectable()
export class MaterialService {
 
  readDirectory() {
    const tree = dirTree('./material-sourse');
console.log('tree===>>>>');
console.log(JSON.stringify(tree));
  }
}
