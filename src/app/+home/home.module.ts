import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { FilterContentComponent } from './filter-content/filter-content.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ContentComponent, FilterContentComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    CoreModule,
    SharedModule
  ],
  exports: [ContentComponent],
})
export class HomeModule { }
