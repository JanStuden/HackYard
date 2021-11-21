import { NgModule } from '@angular/core';
import { PlantPipe } from './plant.pipe';
  


@NgModule({
    declarations: [
        PlantPipe,
    ],
    imports:[

    ],
    exports:[
        PlantPipe
    ]
})
export class PipeModule{}
