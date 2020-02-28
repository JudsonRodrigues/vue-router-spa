import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos'
import ContatoDetalhes from './views/contatos/ContatoDetalhes'
import Home from './views/Home'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/contatos',
            component: Contatos,
            children: [
                { path: ':id', component: ContatoDetalhes }, // http://localhost:8080/contatos/1
            ]

        }, // http://localhost:8080/contatos

        { path: '/', component: Home }] // http://localhost:8080/
})
