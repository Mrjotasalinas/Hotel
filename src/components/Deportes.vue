<template>
    <q-page padding>
      <q-card class="q-mb-lg">
        <q-img src="../assets/baner.jpg" height="200px" />
        <q-card-section class="text-center">
          <q-typography class="text-h4 text-bold q-mt-md">Deportes Extremos</q-typography>
          <q-typography class="text-subtitle1">Vive la aventura al máximo con nuestras actividades de deportes extremos.</q-typography>
        </q-card-section>
      </q-card>
  
      <q-card class="q-mb-lg">
        <q-card-section>
          <q-typography class="text-h5 text-bold">Parapente</q-typography>
          <q-typography>Deslízate por el aire y disfruta de las vistas panorámicas. Nivel de dificultad: Intermedio.</q-typography>
          <q-typography>Precio: $120 por persona</q-typography>
        </q-card-section>
        <q-img src="../assets/parapente.jpg" alt="Parapente"  height="300px" />
      </q-card>
  
      <q-card class="q-mb-lg">
        <q-card-section>
          <q-typography class="text-h5 text-bold">Rafting</q-typography>
          <q-typography>Desciende por rápidos emocionantes en el río. Nivel de dificultad: Avanzado.</q-typography>
          <q-typography>Precio: $80 por persona</q-typography>
        </q-card-section>
        <q-img src="../assets/raftin.jpg" alt="Rafting" height="300px" />
      </q-card>
  
      <q-card class="q-mb-lg">
        <q-card-section>
          <q-typography class="text-h5 text-bold">Escalada en Roca</q-typography>
          <q-typography>Escala paredes de roca naturales con seguridad. Nivel de dificultad: Principiante a Avanzado.</q-typography>
          <q-typography>Precio: $50 por persona</q-typography>
        </q-card-section>
        <q-img src="../assets/escalada.jpeg" alt="Escalada en Roca" height="300px" />
      </q-card>
  
      <q-card class="q-mb-lg">
        <q-card-section>
          <q-typography class="text-h5 text-bold">Buceo</q-typography>
          <q-typography>Explora el mundo submarino con nuestras sesiones de buceo. Nivel de dificultad: Intermedio.</q-typography>
          <q-typography>Precio: $150 por persona</q-typography>
        </q-card-section>
        <q-img src="../assets/buceo.jpeg" alt="Buceo" height="300px" />
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'DeportesExtremos',
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
  
  .text-h4 {
    font-family: 'DM Serif Text', serif;
  }
  
  .text-h5 {
    font-family: 'DM Serif Text', serif;
  }
  
  .q-card-section {
    padding: 16px;
  }
  </style>
  