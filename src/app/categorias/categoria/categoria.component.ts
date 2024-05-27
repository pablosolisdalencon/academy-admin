import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../modules/material/material.module';
import { ApiService } from '../../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-categoria',
    standalone: true,
    imports: [ FormsModule, HttpClientModule ,MaterialModule,RouterModule],
    templateUrl: './categoria.component.html',
    styleUrl: './categoria.component.css'
  })
export class CategoriaComponent implements OnInit {
    
    public id = this.route.snapshot.paramMap.get('id');
    dataJugadores: any= {};
    public apiJugadores ="";
    dataCategoria: any= {};
    public apiCategoria ="";

    nombre?: string;
    correo?: string;

    constructor(private apiService: ApiService,private route: ActivatedRoute ){}
  ngOnInit(): void {
    this.getCategoria();
    this.getJugadores();
  }


  getCategoria(){
  this.apiCategoria="categorias/"+ this.id;
    this.apiService.getData(this.apiCategoria).subscribe((response) => {
      this.dataCategoria=response.message;
      console.log((this.dataCategoria));
      
    })

  }
  getJugadores(){
      this.apiJugadores="jugadores";
      this.apiService.getData(this.apiJugadores).subscribe((response) => {
        this.dataJugadores=response.message.data;
        console.log((this.dataJugadores));
        
      })
  
    }

    guardar() {
      console.log('Nombre:', this.nombre);
      console.log('Correo:', this.correo);
      // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor
    }

}