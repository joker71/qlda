import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {NzButtonModule} from 'ng-zorro-antd/button';

@NgModule({
  imports: [WelcomeRoutingModule, NzLayoutModule, NzIconModule,
    NzMenuModule, NzGridModule, NzInputModule, NzFormModule, ReactiveFormsModule, NzButtonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
