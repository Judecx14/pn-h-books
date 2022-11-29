import { createRouter, createWebHistory } from "vue-router";
import Books from '../components/Admin/Libros.vue'
import Category from '../components/Admin/Categoria.vue'
import Cita from '../components/Admin/Cita.vue'
import Login from '../components/Admin/Login.vue'
import App from '../App.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',component:App,children:[
            //home {path:'',component:},
            //404 {path:'/:catchAll(.*)',component:},
            {path:'admin',children:[
                {path:'book', component:Books},
                {path:'category', component:Category},
                {path:'cita',component:Cita},
                {path:'login', component:Login}
            ]}
        ]}
    ]
})

export default router