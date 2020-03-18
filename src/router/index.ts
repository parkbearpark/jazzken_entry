import Vue from 'vue'
import VueRouter from 'vue-router'

import EntryForm from '@/pages/EntryForm.vue'
import EntryConfirm from '@/pages/EntryConfirm.vue'
import EntryComplete from '@/pages/EntryComplete.vue'

import BandList from '@/pages/BandList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EntryForm',
    component: EntryForm,
  },
  {
    path: '/confirm',
    name: 'EntryConfirm',
    component: EntryConfirm,
  },
  {
    path: '/complete',
    name: 'EntryComplete',
    component: EntryComplete,
  },
  {
    path: '/list',
    name: 'BandList',
    component: BandList,
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
