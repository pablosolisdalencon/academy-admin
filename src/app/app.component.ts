import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../modules/material/material.module';
import { HomeComponent } from './home/home.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { JugadorFormComponent } from './jugadores/jugador-form/jugador-form.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CategoriaComponent,JugadorFormComponent,JugadoresComponent,HttpClientModule,CategoriasComponent,FooterComponent,GalleryComponent,HomeComponent,RouterOutlet,MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
/*export class AppComponent {  title = 'academy-app';
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((response) => {
      this.data = response;
    });
    
  }
  
}
*/
export class AppComponent implements OnInit {
  data: any[] = [];
  title: any = "" ;
  public api = "";

  constructor(private apiService: ApiService ){}
    ngOnInit(): void {
      this.getEmpresas();
    }

    
  getEmpresas(){
    this.api="empresas";
    this.apiService.getData(this.api).subscribe((response) => {
      this.data=response;
      console.log((this.data));
      
    })
  }
  
}
/*
getJugadores(){
    this.api="jugadores";
    this.apiService.getData(this.api).subscribe((response) => {
      this.data=response;
      console.log((this.data));
      
    })
  }
  getCampeonatos(){
    this.api="campeonatos";
    this.apiService.getData(this.api).subscribe((response) => {
      this.data=response;
      console.log((this.data));
      
    })
  }
  getPartidos(){
    this.api="partidos";
    this.apiService.getData(this.api).subscribe((response) => {
      this.data=response;
      console.log((this.data));
      
    })
  }
  getNominas(){
    this.api="nominas";
    this.apiService.getData(this.api).subscribe((response) => {
      this.data=response;
      console.log((this.data));
      
    })
  }
  getProfesores(){
    this.api="profesores";
    this.apiService.getData(this.api).subscribe((response) => {
      this.data=response;
      console.log((this.data));
      
    })
  }
*/