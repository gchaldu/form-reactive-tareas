import { Component } from '@angular/core';
import { ListTareaComponent } from '../../components/list-tarea/list-tarea.component';
import { AddTareaComponent } from '../../components/add-tarea/add-tarea.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ListTareaComponent, AddTareaComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
