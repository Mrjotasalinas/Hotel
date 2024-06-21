<template>
    <q-page padding>
      <q-card class="q-mb-lg">
        <q-img src="../assets/baner.jpg" alt="Servicios del Hotel" height="400px" />
        <q-card-section class="text-center">
          <q-typography class="text-h4 text-bold q-mt-md">Servicios del Hotel Shinigami</q-typography>
          <q-typography class="text-subtitle1">Descubre todos los servicios de lujo que ofrecemos para una estancia inolvidable.</q-typography>
        </q-card-section>
      </q-card>
  
      <div class="q-gutter-lg">
        <!-- Servicios de Habitaciones -->
        <q-card class="q-mb-lg">
          <q-card-section>
            <q-typography class="text-h5 text-bold">Habitaciones</q-typography>
            <q-typography>Disfruta de nuestras confortables y elegantes habitaciones diseñadas para tu comodidad.</q-typography>
          </q-card-section>
          <q-img src="../assets/habitacion1.jpg" alt="Habitaciones" height="200px" />
          <q-card-actions align="right">
            <q-btn label="Más información" color="primary" @click="goTo('habitaciones')" />
          </q-card-actions>
        </q-card>
  
        <!-- Servicios de Restaurantes -->
        <q-card class="q-mb-lg">
          <q-card-section>
            <q-typography class="text-h5 text-bold">Restaurantes</q-typography>
            <q-typography>Saborea deliciosos platillos en nuestros restaurantes de clase mundial.</q-typography>
          </q-card-section>
          <q-img src="../assets/restaurante.jpg" alt="Restaurantes" height="200px" />
          <q-card-actions align="right">
            <q-btn label="Más información" color="primary" @click="goTo('')" />
          </q-card-actions>
        </q-card>
  
        <!-- Servicios de Spa -->
        <q-card class="q-mb-lg">
          <q-card-section>
            <q-typography class="text-h5 text-bold">Spa</q-typography>
            <q-typography>Relájate y rejuvenece en nuestro lujoso spa con tratamientos de belleza y terapias.</q-typography>
          </q-card-section>
          <q-img src="../assets/spa.jpg" alt="Spa" height="200px" />
          <q-card-actions align="right">
            <q-btn label="Más información" color="primary" @click="goTo('')" />
          </q-card-actions>
        </q-card>
  
        <!-- Servicios de Deportes Extremos -->
        <q-card class="q-mb-lg">
          <q-card-section>
            <q-typography class="text-h5 text-bold">Deportes Extremos</q-typography>
            <q-typography>Vive la aventura con nuestras actividades de deportes extremos.</q-typography>
          </q-card-section>
          <q-img src="../assets/baner.jpg" alt="Deportes Extremos" height="200px" />
          <q-card-actions align="right">
            <q-btn label="Más información" color="primary" @click="goTo('deportes')" />
          </q-card-actions>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
  
      function goTo(route) {
        router.push({ path: `/${route}` });
      }
  
      return {
        goTo,
      };
    },
  };
  </script>
  
  <style scoped>
  .q-page {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .q-mb-lg {
    margin-bottom: 24px;
  }
  
  .text-h4,
  .text-h5 {
    font-family: 'DM Serif Text', serif;
  }
  
  .q-card-section {
    padding: 16px;
  }
  
  .q-img {
    border-radius: 10px;
    overflow: hidden;
  }
  </style>
  