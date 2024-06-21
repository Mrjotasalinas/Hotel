<script>
import { ref } from 'vue';
import { QForm, QInput, QBtn, QIcon } from 'quasar';

export default {
  components: {
    QForm,
    QInput,
    QBtn,
    QIcon
  },
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');

    const onSubmit = () => {
      // Implementar lógica para enviar el formulario de contacto
      console.log('Formulario enviado:', { name, email, message });
    };

    return {
      name,
      email,
      message,
      onSubmit
    };
  },
};
</script>

<template>
  <div class="contact-page q-pa-md">

    <!-- Información de Contacto -->
    <div class="contact-info">
      <h2>Contacta con Nosotros</h2>
      <p><q-icon name="location_on" /> Dirección: Calle Falsa 123, Ciudad, País</p>
      <p><q-icon name="phone" /> Teléfono: +123 456 789</p>
      <p><q-icon name="email" /> Correo Electrónico: contacto@hotelbahia.com</p>
      <p><q-icon name="schedule" /> Horarios de Atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
    </div>

    <!-- Formulario de Contacto -->
    <div class="contact-form">
      <h2>Envíanos tu Consulta</h2>
      <q-form @submit="onSubmit">
        <q-input v-model="name" label="Nombre" required />
        <q-input v-model="email" label="Correo Electrónico" type="email" required />
        <q-textarea v-model="message" label="Mensaje" required />
        <q-btn label="Enviar" type="submit" color="primary" />
      </q-form>
    </div>

    <!-- Mapa Interactivo -->
    <div class="contact-map">
      <h2>Nuestra Ubicación</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15854.93647827798!2d-73.1390263!3d6.5552118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c729403c2405%3A0xadee56ac7b1ce431!2sHotel%20Castillo%20Resort%20San%20Gil!5e0!3m2!1ses-419!2sco!4v1718920496835!5m2!1ses-419!2sco" width="1100" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  </div>
</template>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info, .contact-form, .contact-map {
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  width: 100%;
}

.contact-info h2, .contact-form h2, .contact-map h2 {
  margin-bottom: 1rem;
  text-align: center;
}

.contact-info p {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 0.5rem 0;
}

.contact-info q-icon {
  margin-right: 0.5rem;
}

.contact-form {
  max-width: 600px;
}

.contact-form q-input, .contact-form q-textarea {
  margin-bottom: 1rem;
}

.contact-map iframe {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
