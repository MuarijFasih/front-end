import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private api = 'https://jsonplaceholder.typicode.com/';


  photos$ = new BehaviorSubject<Photo[]>([]);
  selectedPhoto$ = new BehaviorSubject<Photo | null>(null)


  constructor(private http: HttpClient) {

  }

  loadPhotos() {
    if (!this.photos$.getValue().length)
      this.http.get(`${this.api}photos`)
        .subscribe({
          next: (resp: any) => {
            if (resp?.length) {
              this.photos$.next(resp)
            } else {
              this.photos$.next([])
            }
          },
          error: (err) => {
            this.photos$.next([]);
            console.error('Error while fetching photos..', err)
          }
        })
  }

  selectPhoto(photo: Photo) {
    this.selectedPhoto$.next(photo)
  }

  getPhoto(id: number) {
    return this.photos$.getValue().find(el => el.id == id);
  }
}
