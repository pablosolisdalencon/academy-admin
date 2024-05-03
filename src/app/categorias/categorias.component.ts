import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MaterialModule } from "../../modules/material/material.module";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [HttpClientModule,MaterialModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
      data: any= {};

      constructor(private apiService: ApiService ){}
    ngOnInit(): void {
      this.getCategorias();
    }

    getCategorias(){
      this.apiService.getData().subscribe(data=>{
        this.data=data;
        console.log(this.data);
       })

    }
}