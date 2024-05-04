import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MaterialModule } from "../../modules/material/material.module";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-jugadores', 
  standalone: true,
  imports: [HttpClientModule, MaterialModule],
  templateUrl: './jugadores.component.html', 
  styleUrls: ['./jugadores.component.css'] 
})
export class JugadoresComponent implements OnInit { 
  data: any = {};
  public api = "";
  idCategoria = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getJugadores(this.idCategoria); 
  }

  getJugadores(idCategoria: number) { 
    this.api = "jugadores";
    this.apiService.getData(this.api).subscribe((response) => {
      this.data = response.message.data;
      console.log(this.data);
    });
  }
}
