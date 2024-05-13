import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule


@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,MatInputModule, MatGridListModule,MatCardModule,MatExpansionModule,MatListModule,CommonModule,MatIconModule,MatButtonModule,MatToolbarModule,MatMenuModule,MatSidenavModule
  ],
  exports: [
    MatFormFieldModule,MatInputModule,MatGridListModule,MatCardModule,MatExpansionModule,MatListModule,CommonModule,MatIconModule,MatButtonModule,MatToolbarModule,MatMenuModule,MatSidenavModule
  ]
})
export class MaterialModule { }
