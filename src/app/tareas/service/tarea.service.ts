import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  http = inject(HttpClient)
  urlBase: string = 'http://localhost:3000/tareas'

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.urlBase)
  }
  postTareas(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.urlBase, tarea)
  }
}
