import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: GalleryComponent,
        pathMatch: 'full'
    },
    {
        path: 'photo/:id',
        component: PhotoDetailComponent,
    }
];
