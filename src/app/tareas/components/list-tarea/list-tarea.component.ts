import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent {

  listTarea: Tarea[]=[];


  recibiendoTarea(tarea: Tarea){
    this.listTarea.push({...tarea})
  }

}
