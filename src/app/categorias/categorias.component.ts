import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MaterialModule } from "../../modules/material/material.module";

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
      message: any = {};

      constructor(private apiService: ApiService ){}
    ngOnInit(): void {
      this.getCategorias();
    }

    getCategorias(){
      this.apiService.getData().subscribe(message=>{
        this.message=message;
        console.log(this.message);
       })

    }
}