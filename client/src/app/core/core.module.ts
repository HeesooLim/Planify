import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MdbRippleModule } from 'mdb-angular-ui-kit';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MdbRippleModule,
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {
}