import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MaterialModule } from "../../modules/material/material.module";
import { HttpClientModule } from '@angular/common/http';

import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [ HttpClientModule,MaterialModule,RouterModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
      data: any= {};
      public api ="";

      constructor(private apiService: ApiService ){}
    ngOnInit(): void {
      this.getCategorias();
    }

   
  getCategorias(){
    this.api="categorias";
    this.apiService.getData(this.api).subscribe((response) => {
      this.data=response.message.data;
      console.log((this.data));
      
    })
  }

}