<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
  setup () {
    const slide = ref(1);
    const router = useRouter();

    const goToReservations = () => {
      router.push('/contacto');
    };

    return {
      slide,
      goToReservations
    }
  }
}
</script>

<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      height="700px"
    > 
      <q-carousel-slide :name="1" img-src="../assets/hotel1.jpg" />
      <q-carousel-slide :name="2" img-src="../assets/hotel2.jpg" />
      <q-carousel-slide :name="3" img-src="../assets/hotel3.jpg" />
      <q-carousel-slide :name="4" img-src="../assets/hotel4.jpg" />
    </q-carousel>
  </div>

  <div class="contenedor">
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="29" class="col">
        <q-card-section>
          <div class="descripcion">
            🏨 <strong>Bienvenido al Hotel Shinigami</strong> 🏨<br><br>
            Situado en el corazón de la ciudad, el <span class="highlight">Hotel Shinigami</span> combina lujo y confort con servicios excepcionales. Disfrute de nuestras impresionantes piscinas, tanto interiores como exteriores, rodeadas de hermosos jardines. 🌴🌺 Saboree deliciosos platillos en nuestros <span class="highlight">restaurantes de clase mundial</span> 🍽️, que ofrecen una variedad de cocinas internacionales y locales. Relájese en nuestro spa de última generación con tratamientos terapéuticos y de belleza 💆‍♀️💆‍♂️. Además, contamos con un gimnasio completamente equipado 💪 y modernas salas de reuniones. En el Hotel Shinigami, cada detalle está pensado para brindar una experiencia inolvidable. ✨
          </div>
          <div class="cta-container">
            
          </div>
        </q-card-section>
      </q-responsive>

      <q-responsive :ratio="2" class="col">
        <q-card class="column" flat bordered>
          <q-img class="col" src="../assets/spa.jpg" />
          <q-card-section>
            <div class="spa">Descubra un oasis de relajación con nuestros tratamientos de masaje, terapias faciales y sesiones de hidroterapia. Nuestro equipo profesional utiliza productos de alta calidad para rejuvenecer su cuerpo y mente. Encuentre la tranquilidad en un ambiente sereno y lujoso en el Spa del Hotel Shinigami.</div>
          </q-card-section>
        </q-card>
      </q-responsive>
    </div>
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="2" class="col">
        <q-card class="column" flat bordered>
          <q-img class="col" src="../assets/restaurante.jpg" />
          <q-card-section>
            <div class="restaurante">Deléitese con una experiencia culinaria excepcional en nuestro restaurante de clase mundial. Ofrecemos una variedad de platos internacionales y locales, preparados con ingredientes frescos y de alta calidad. Nuestro ambiente elegante y acogedor, junto con un servicio impecable, garantiza una velada inolvidable.</div>
          </q-card-section>
        </q-card>
      </q-responsive>

      <q-responsive :ratio="2" class="col">
        <q-card class="column" flat bordered>
          <q-img class="col" src="../assets/piscina.jpg" />
          <q-card-section>
            <div class="piscina">Disfrute de un refrescante escape en nuestra impresionante piscina, rodeada de exuberantes jardines. Relájese en cómodas áreas de descanso o sumérjase en el agua cristalina para una experiencia revitalizante. Nuestra piscina ofrece un entorno perfecto para relajarse y disfrutar del sol.</div>
          </q-card-section>
        </q-card>
      </q-responsive>
    </div>
    <q-btn label="Explora Más" color="black" @click="goToReservations" class="cta-button" />
  </div>
</template>

<style scoped>
.q-pa-md {
  margin-top: -13px;
}

.carrusel {
  width: 100%;
  height: 10vh;
}

.restaurante {
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.piscina {
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.spa {
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.descripcion {
  font-size: 23px;
  font-family: "DM Serif Text", serif;
  color: #333;
  line-height: 1.6;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 10px;
  width: 920px;
  margin: 0 auto;
}

.descripcion strong {
  font-size: 26px;
  color: #2c3e50;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.descripcion .highlight {
  color: #e74c3c;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.descripcion span {
  display: inline-block;
  margin: 5px 0;
}

.contenedor {
  display: grid;
  grid-template-columns: 2fr, 3fr;
  width: 98.6%;
  margin: 10px;
  gap: 10px;
}

.custom-carousel {
  height: 5000px; 
}

.custom-carousel .q-carousel-slide {
  background-size: cover;
  background-position: center;
  height: 100%;
}

.cta-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.cta-button {
  font-size: 18px;
  padding: 10px 20px;
}
</style>
