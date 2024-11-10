import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [CommonModule],
  providers: [Router],
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.css'
})
export class PhotoDetailComponent {
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  photoService = inject(PhotoService);
  photo$ = this.photoService.selectedPhoto$;

  constructor() {
    this.photoService.loadPhotos()
  }

  ngOnInit(): void {
    this.photo$.subscribe(val => console.log(val))
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const photo = this.photoService.getPhoto(+id);
        photo ? this.photo$.next(photo) : this.goBack();
      } else {
        this.goBack()
      }
    }, 0)
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}