import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
      data: any = {};

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