import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  galleryImages = [
    { src: 'path/to/image1.jpg', alt: 'Image 1' },
    { src: 'path/to/image2.jpg', alt: 'Image 2' },
    { src: 'path/to/image3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ];
}
