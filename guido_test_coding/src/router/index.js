import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
        // Componente principal
		{
			path: '/',
			name: 'Home',
			component: () => import('@/components/Home')
		},
    ]
})

export default router