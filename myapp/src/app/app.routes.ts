import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';

export const routes: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent,
    },
    {
        path: 'photo/:id',
        component: PhotoDetailComponent,
    },
    {
        path: '',
        redirectTo: 'gallery',
        pathMatch: 'full'
    }
];
