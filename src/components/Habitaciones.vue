<script>
import { ref } from 'vue';
import { QForm, QInput, QSelect, QBtn } from 'quasar';

export default {
  components: {
    QForm,
    QInput,
    QSelect,
    QBtn
  },
  setup() {
    const slide = ref(1);
    const name = ref('');
    const email = ref('');
    const checkIn = ref('');
    const checkOut = ref('');
    const roomType = ref('');
    const roomOptions = ref([
      'Habitación Estándar',
      'Suite Deluxe',
      'Junior Suite'
    ]);

    const onSubmit = () => {
      // Implementar lógica de reserva
      console.log('Reserva realizada:', { name, email, checkIn, checkOut, roomType });
    };

    return {
      slide,
      name,
      email,
      checkIn,
      checkOut,
      roomType,
      roomOptions,
      onSubmit
    };
  },
};
</script>

<template>
  <div class="q-pa-md custom-carousel-container">

    <!-- Habitación Estándar -->
    <div class="room-description">
      <h2>Habitación Estándar</h2>
      <p>Disfruta de una cómoda estancia en nuestra habitación estándar, equipada con cama king size, aire acondicionado, Wi-Fi gratuito y televisión por cable. Precio: $100/noche.</p>
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="orange"
      navigation
      padding
      arrows
      height="380px"
      class="bg-brown-6 shadow-5 rounded-borders custom-carousel"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion1.jpg" />
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion2.jpg" />
          <q-img class="rounded-borders col-3.5 full-height custom-img" src="../assets/habitacion3.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion4.jpg" />
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion5.jpg" />
          <q-img class="rounded-borders col-3.5 full-height custom-img" src="../assets/habitacion6.jpg" />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Suite Deluxe -->
    <div class="room-description">
      <h2>Suite Deluxe</h2>
      <p>La Suite Deluxe ofrece un espacio lujoso con vista al mar, jacuzzi, minibar y una amplia sala de estar. Precio: $200/noche.</p>
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="orange"
      navigation
      padding
      arrows
      height="380px"
      class="bg-brown-6 shadow-5 rounded-borders custom-carousel"
    >
    <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion1.jpg" />
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion2.jpg" />
          <q-img class="rounded-borders col-3.5 full-height custom-img" src="../assets/habitacion3.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion4.jpg" />
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion5.jpg" />
          <q-img class="rounded-borders col-3.5 full-height custom-img" src="../assets/habitacion6.jpg" />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Junior Suite -->
    <div class="room-description">
      <h2>Junior Suite</h2>
      <p>Nuestra Junior Suite combina elegancia y comodidad, con una cama queen size, zona de estar, y vistas panorámicas de la ciudad. Precio: $150/noche.</p>
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="orange"
      navigation
      padding
      arrows
      height="380px"
      class="bg-brown-6 shadow-5 rounded-borders custom-carousel"
    >
    <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion1.jpg" />
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion2.jpg" />
          <q-img class="rounded-borders col-3.5 full-height custom-img" src="../assets/habitacion3.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion4.jpg" />
          <q-img class="rounded-borders col-4 full-height custom-img" src="../assets/habitacion5.jpg" />
          <q-img class="rounded-borders col-3.5 full-height custom-img" src="../assets/habitacion6.jpg" />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Formulario de reserva -->
    <div class="reservation-form">
      <h2>Reserva tu Habitación</h2>
      <q-form @submit="onSubmit">
        <q-input v-model="name" label="Nombre" required />
        <q-input v-model="email" label="Correo Electrónico" type="email" required />
        <q-input v-model="checkIn" label="Fecha de Check-in" type="date" required />
        <q-input v-model="checkOut" label="Fecha de Check-out" type="date" required />
        <q-select v-model="roomType" :options="roomOptions" label="Tipo de Habitación" required />
        <q-btn label="Reservar" type="submit" color="primary" />
      </q-form>
    </div>
  </div>
</template>

<style scoped>
.custom-carousel-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.custom-carousel {
  border-radius: 1rem;
  overflow: hidden;
}

.custom-img {
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.q-carousel-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rounded-borders {
  border-radius: 3rem;
}

.room-description {
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.reservation-form {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.reservation-form h2 {
  margin-bottom: 1rem;
  text-align: center;
}
</style>
