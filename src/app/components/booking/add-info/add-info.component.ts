// Componente AddInfoComponent, que permite agregar información adicional al hotel
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent {
  // Propiedades para el formulario de información adicional
  newInfo: { description: string; services: string[] } = {
    description: '',
    services: []
  };
  newService = '';

  @Output() infoAdded = new EventEmitter<{ description: string; services: string[] }>();

  // Método para agregar un servicio nuevo al hotel
  addService() {
    if (this.newService && this.newService.trim()) {
      this.newInfo.services.push(this.newService.trim());
      this.newService = '';
    }
  }

  // Método para eliminar un servicio de la lista
  removeService(service: string) {
    this.newInfo.services = this.newInfo.services.filter(s => s !== service);
  }

  // Método para enviar la información adicional al componente padre (HotelDetailsComponent)
  onSubmit() {
    this.infoAdded.emit(this.newInfo);
    this.newInfo = { description: '', services: [] }; // Reset the form
  }
}
