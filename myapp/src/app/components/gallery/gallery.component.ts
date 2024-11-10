import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage,],
  providers: [Router],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  photoService = inject(PhotoService);
  private router = inject(Router)
  photos = this.photoService.photos$;
  isBrowser: boolean = false;

  private readonly platform = inject(PLATFORM_ID);
  constructor() {
    this.photoService.loadPhotos()
    if (isPlatformBrowser(this.platform)) {
      console.warn("browser");
      this.isBrowser = isPlatformBrowser(this.platform)
      // Safe to use document, window, localStorage, etc. :-)
    }
  }

  ngOnInit(): void {
    // this.photoService.loadPhotos();
  }

  viewImageDetails(photo: Photo): void {
    console.log('photo...', photo)
    this.photoService.selectPhoto(photo)
    this.router.navigate(['/photo', photo.id]); // Passing image data through state
  }

}