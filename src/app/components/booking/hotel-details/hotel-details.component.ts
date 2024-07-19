// Componente de detalles del hotel, que muestra los detalles completos de un hotel
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  @Input() hotel: any;
  @Output() close = new EventEmitter<void>();

  // Método para emitir el evento de cierre del modal
  closeModal() {
    this.close.emit();
  }

  // Método para actualizar la información del hotel con nueva información
  updateHotelInfo(newInfo: any) {
    if (newInfo.description) {
      this.hotel.description = newInfo.description;
    }
    if (newInfo.services.length > 0) {
      this.hotel.services = newInfo.services;
    }
  }
}
