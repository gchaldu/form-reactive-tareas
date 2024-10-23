import { Component, inject, OnInit } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent implements OnInit {

  tareaService = inject(TareaService)

  ngOnInit(): void {
    this.listarTareas()
  }

  listTarea: Tarea[]=[];


  listarTareas(){
    this.tareaService.getTareas().subscribe(
      {
        next: (tareas: Tarea[]) => {
          this.listTarea = tareas
        },
        error: (e: Error) => {
          console.log(e.message);
        }
      }
    )
  }

  recibiendoTarea(tarea: Tarea){
    this.listTarea.push({...tarea})
  }

}
