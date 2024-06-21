import Contacto from "../components/Contacto.vue"
import Deportes from "../components/Deportes.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Servicios from "../components/Servicios.vue"
import Bienvenida from "../components/Bienvenida.vue"
import {createRouter, createWebHashHistory} from 'vue-router'

const routes=[
  {path:"/",component:Bienvenida},
  {path:"/contacto", component:Contacto},
  {path:"/deportes", component:Deportes},
  {path:"/habitaciones", component:Habitaciones},
  {path:"/servicios", component:Servicios}
  
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})