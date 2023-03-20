import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, HeaderComponent, ButtonComponent],
  exports: [CardComponent, HeaderComponent, ButtonComponent],
})
export class CommonUiModule {}
