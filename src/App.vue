<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="custom-header">
      <q-toolbar>
        <!-- Contenedor para el título y los botones -->
        <div class="header-content">
          <q-toolbar-title class="header-title">HOTEL Shinigami</q-toolbar-title>

          <!-- Botones -->
          <q-tabs align="center" class="header-tabs">
            <q-route-tab to="/" label="Bienvenida" class="header-tab" />
            <q-route-tab to="/contacto" label="Contacto" class="header-tab" />
            <q-route-tab to="/habitaciones" label="Habitaciones" class="header-tab" />
            <q-route-tab to="/deportes" label="Deportes" class="header-tab" />
            <q-route-tab to="/servicios" label="Servicios" class="header-tab" />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<style scoped>


.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.custom-header {
  background-color: #000;
  color: #fff;
  height: 100px; /* Altura del header ajustada */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: 13vh;
}

.header-title {
  font-size: 48px; /* Tamaño de fuente aumentado */
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "DM Serif Text", serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra en el texto */
}

.header-tab {
  color: #fff;
  font-size: 20px; /* Tamaño de fuente aumentado */
  transition: color 0.3s, background-color 0.3s;
  font-family: 'Roboto', sans-serif; /* Nueva tipografía */
}

.header-tab:hover {
  color: #ff9800;
  background-color: rgba(255, 255, 255, 0.1);
}

.header-tab.q-tab--active {
  color: #ff9800;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>



