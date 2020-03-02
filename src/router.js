import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContatoEditar'
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
                { path: ':id', component: ContatoDetalhes, name: 'contato' }, // http://localhost:8080/contatos/1
                {
                    path: ':id/editar', components: {
                        default: ContatoEditar,
                        'contato-detalhes': ContatoDetalhes
                    }
                }, // http://localhost:8080/contatos/1/editar
                { path: '', component: ContatosHome }
            ]

        }, // http://localhost:8080/contatos

        { path: '/', component: Home }] // http://localhost:8080/
})

