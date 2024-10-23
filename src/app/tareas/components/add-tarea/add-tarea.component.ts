import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {

  @Output()
  tareaEmit: EventEmitter<Tarea> = new EventEmitter();


  fb = inject(FormBuilder)
  tareaService = inject(TareaService)

  formulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    id: [0, [Validators.required]]
  })

  emitiendoTarea() {
    if (this.formulario.invalid) return;
    const tarea: Tarea = this.formulario.getRawValue();
    this.guardarTarea(tarea);
    // Emitir una copia del objeto tarea para evitar el problema de referencia.
    this.tareaEmit.emit({ ...tarea });
    this.formulario.reset({ id: 0, nombre: '' });
  }

  guardarTarea(tarea: Tarea) {
    this.tareaService.postTareas(tarea).subscribe(
      {
        next: (tarea: Tarea) => {
          alert(`Tarea agregada con existo!!!`)
        },
        error: (e: Error) => {
          console.log(e.message)
        }
      }
    )
  }

}
