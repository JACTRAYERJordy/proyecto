// Componente Angular 'BookingComponent' que gestiona los datos y la lógica de la página
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  // Arreglo de ciudades con sus respectivos hoteles
  cities = [
    {
       // Cada ciudad tiene un nombre y una lista de hoteles
      name: 'Manta',
      hotels: [
         // Ejemplo de hotel con nombre, imagen, insignia, dirección, etc.
        {
          name: 'Hostal Vistalmar',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/100459326.jpg?k=6013850f2237a673d7ebb55396a905cac60edd7b5b37ba558e9ce30b1676c654&o=&hp=1',
          badge: 'La mejor relación calidad-precio',
          address: 'Ubicado, a 600 metros de la playa Murciélago',
          rating: 8.6,
          price: '$85'
        },
        {
          name: 'Hotel Poseidon',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/116355357.jpg?k=d9e9e8dd2830927208258f08458142b8f313f8fa6aee9b692259d7ed994efad8&o=&hp=1',
          badge: '#1 en popularidad',
          address: 'Se encuentra ubicado en el Km 1. a Avenida 5',
          rating: 9.2,
          price: '$139'
        },
        {
          name: 'Mantahost Hotel',
          image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_9vh1DVSuhxsJs-d1UqFvX-OtG2PLFRKx6YPubh-5gvz9F92uR0QRkoz1H-FxEXsO9BRGrB_6iqgkhEBldEDs7F6bSnwpm51GnFzGFdD-t2fdzE-TgkI-mX7CJWxFI8AIQg2sxLhD2ZE/s1600/mantahost-hotel.jpg',
          badge: '#2 en popularidad',
          address: 'Se encuentra ubicado en el Km. 1.5 Vía Barbasquillo',
          rating: 8.6,
          price: '$124'
        },
        {
          name: 'Hotel Santa Fé',
          image: 'https://santa-fe.ruta-del-sol-mejor-hoteles.com/data/Images/OriginalPhoto/14173/1417391/1417391220/image-manta-hotel-santa-fe-2.JPEG',
          badge: 'Excelente ubicación',
          address: 'Se encuentra ubicado en la Av. 23 315-261',
          rating: 8.0,
          price: '$89'
        }
      ]
    },
    {
      name: 'Puerto López',
      hotels: [
        {
          name: 'Hotel Victor Hugo Lopez',
          image: 'https://www.victorhugohotel.com.ec/wp-content/uploads/vh_front_03.jpg',
          badge: 'La mejor relación calidad-precio',
          address: 'Enfrente del paseo marítimo de Puerto López',
          rating: 7.4,
          price: '$9'
        },
        {
          name: 'Hotel Mantaraya Lodge',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483577393.jpg?k=9bffee02fc3cdddd5e30e5745933b201c9a9981322339da8874a97d73f9000c7&o=&hp=1',
          badge: '#1 en popularidad',
          address: 'Se encunetra situado en Puerto López',
          rating: 8.0,
          price: '$36'
        },
        {
          name: 'Hotel Azuluna Ecolodge',
          image: 'https://images.trvl-media.com/lodging/5000000/4610000/4608100/4608071/d7b89bfd.jpg?impolicy=resizecrop&rw=598&ra=fit',
          badge: '#2 en popularidad',
          address: 'Ruta del Sol -E15 (a 2.5Km. de Puerto López).',
          rating: 8.1,
          price: '$12'
        },
        {
          name: 'Hotel Tuzco Lodge',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/256231615.jpg?k=36ee3294be3214e02f0383ec0131c447b47cc3387b76b2f9c833a33e09d78bb4&o=&hp=1',
          badge: 'Popular entre los viajeros',
          address: 'Se encuentra a Tuzco Lodge, a 8 min de la playa',
          rating: 8.3,
          price: '$50'
        }
      ]
    },
    {
      name: 'Montañita',
      hotels: [
        {
          name: 'Hotel Ocean Drive Lodge',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539744655.jpg?k=7f20f24689948842ef093db542caf4a07005edc377f4c721e1da6f5e37d3a28b&o=&hp=1',
          badge: 'La mejor relación calidad-precio',
          address: 'Carretera Principal Via Olon, una cuadra antes del TIA',
          rating: 7.4,
          price: '$9'
        },
        {
          name: 'Hotel Kundalini',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/382057036.jpg?k=cd3bed6bcde0f2a16b93431c557bb3c5e48f7f898a164ea3350f5c89f8d1e52b&o=&hp=1',
          badge: '#1 en popularidad',
          address: 'Frente al mar 200 metros al Norte del pueblo',
          rating: 8.0,
          price: '$36'
        },
        {
          name: 'Hotel Sumpa',
          image: 'https://media-cdn.tripadvisor.com/media/photo-p/17/6c/0d/fb/piscina.jpg',
          badge: '#2 en popularidad',
          address: '80m Sumpa, Via Spondylus pasando puente rio',
          rating: 8.1,
          price: '$12'
        },
        {
          name: 'Hotel Hanga Roa',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/443755001.jpg?k=e2ff8646eab1bcacb8fc510f5aff5ca2cbe52cef9c88af99a6f790a40b30a461&o=&hp=1',
          badge: 'Popular entre los viajeros',
          address: 'Se encuentra a pocos pasos de la Playa Montañita',
          rating: 8.3,
          price: '$50'
        }
      ]
    },
    {
      name: 'Baños',
      hotels: [
        {
          name: 'Hotel Floresta',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/319005550.jpg?k=2c6980776028c99fb83813f471eeae118d63d458546f976a8541b7d372586417&o=&hp=1',
          badge: 'La mejor relación calidad-precio',
          address: 'Se encuentra a 0.7 Km del centro de Baños',
          rating: 7.4,
          price: '$9'
        },
        {
          name: 'Hotel ILÉ',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/352026093.jpg?k=bdb6964ff140d37a99486de7e70e88461f4d60e1d05a1a0a591cc90815b6581e&o=&hp=1',
          badge: '#1 en popularidad',
          address: 'Ubicado en Juan Montalvo y Baños de Agua Santa',
          rating: 8.0,
          price: '$36'
        },
        {
          name: 'Azuluna Ecolodge',
          image: 'https://images.squarespace-cdn.com/content/v1/5d23b57617786c0001fcbeda/1570566405243-3P28XGIY78H0NO9AI2CO/Alojamiento-Hotel-Sangay-04.jpg',
          badge: '#2 en popularidad',
          address: 'Plazoleta Isidro Ayora 100, Baños de agua Santa',
          rating: 8.1,
          price: '$12'
        },
        {
          name: 'Hotel Monte Selva Spa',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/206143936.jpg?k=4807dbde54a3c0efaeb86a7a3505f6bedb2fd74d768de33d69e522b920389b13&o=&hp=1',
          badge: 'Popular entre los viajeros',
          address: 'Thomas Halflants, Baños de Agua Santa',
          rating: 8.3,
          price: '$50'
        }
      ]
    },
    {
      name: 'Galápagos',
      hotels: [
        {
          name: 'Hotel Acacia',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/3d/e6/78/fachada-con-piscina-hotel.jpg',
          badge: 'La mejor relación calidad-precio',
          address: 'C/ Floreana y Matazarnos, Puerto Ayora',
          rating: 7.4,
          price: '$9'
        },
        {
          name: 'Hotel Maidith',
          image: 'https://maidithgalapagosinn.com/wp-content/uploads/2023/12/MaidIth-Hotel-57-scaled.jpg',
          badge: '#1 en popularidad',
          address: 'Se encuentra ubicado en Cucuve 341, Puerto Ayora',
          rating: 8.0,
          price: '$36'
        },
        {
          name: 'Hotel Fiesta',
          image: 'https://www.galapagosislands.com/images/galapagos-hotels/fiesta/full/fiesta.jpg',
          badge: '#2 en popularidad',
          address: 'Se encuentra ubicado en Moisés Brito, Puerto Ayora',
          rating: 8.1,
          price: '$12'
        },
        {
          name: 'Hotel Ikala',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/141942318.jpg?k=602212ad716eb584c6970058c6e47fcb813662df7d50aa67f542d60db1bbf768&o=&hp=1',
          badge: 'Popular entre los viajeros',
          address: 'Ubicado en el centro de la ciudad Puerto Ayora',
          rating: 8.3,
          price: '$50'
        }
      ]
    }
  ];
  // Propiedades para gestionar el modal de detalles del hotel seleccionado
  selectedHotel: any = null;
  isModalOpen = false;

   // Método para abrir los detalles de un hotel
  openHotelDetails(hotel: any, event: Event): void {
    event.preventDefault();
    this.selectedHotel = hotel;
    this.isModalOpen = true;
  }

  // Método para cerrar el modal de detalles del hotel
  closeModal(): void {
    this.isModalOpen = false;
    this.selectedHotel = null;
  }
}
