/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('add-task', require('./components/AddTaskComponent.vue').default);
Vue.component('edit-task', require('./components/EditTaskComponent.vue').default);

import Home from './components/HomeComponent.vue';
import Task from './components/TaskComponent.vue';


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tasks',
        component: Task
    }
]

const router = new VueRouter({
    routes 
  })

const app = new Vue({
    router
  }).$mount('#app')
