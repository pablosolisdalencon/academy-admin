import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../modules/material/material.module';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
//import { ApiService } from '../api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoriasComponent,FooterComponent,ContactComponent,GalleryComponent,HomeComponent,RouterOutlet,MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  title = 'academy-app';
  data: any[] = [];
/*
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((response) => {
      this.data = response;
    });
    
  }
  */
}
