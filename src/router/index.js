import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlunosView from '../views/AlunosView.vue'
import ProfessoresView from '../views/ProfessoresView.vue'
import MatriculaView from '../views/MatriculaView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/alunos',
    name: 'alunos',
    component: () => import(/* webpackChunkName: "alunos" */ '../views/AlunosView.vue'),

  },
  {
    path: '/professores',
    name: 'professores',
    component: () => import(/* webpackChunkName: "professores" */ '../views/ProfessoresView.vue'),

  },
  {
    path: '/matricula',
    name: 'matricula',
    component: () => import(/* webpackChunkName: "matricula" */ '../views/MatriculaView.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
