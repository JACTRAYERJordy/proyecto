import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  // Definición del objeto hotel
  selectedHotel: any = {
    name: 'GO Quito Hotel',
    badge: 'Ubicación excelente',
    address: 'Eloy Alfaro N34-151 y Catalina Aldaz, 170135 Quito, Ecuador',
    rating: 9.2,
    price: '$150 por noche',
    description: 'Descubre cómo se sienten las estrellas con el mejor servicio en el GO Quito Hotel...',
    services: ['Wi-Fi gratis', 'Desayuno incluido', 'Gimnasio', 'Piscina'],
    image: 'url_principal_de_la_imagen',
    images: [
      'url_de_imagen_1',
      'url_de_imagen_2',
      'url_de_imagen_3',
      'url_de_imagen_4'
    ]
  };
  showHotelDetails = false;

  // Método para abrir los detalles del hotel
  openHotelDetails() {
    this.showHotelDetails = true;
  }

  // Método para cerrar los detalles del hotel
  closeHotelDetails() {
    this.showHotelDetails = false;
  }
}
