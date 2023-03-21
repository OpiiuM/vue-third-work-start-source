import { isAdmin } from '@/middlewares';

export default [
	{
		name: 'HomeView',
		path: '/',
		component: () => import('@/views/HomeView.vue'),
		children: [
			{
				path: '/:id',
				name: 'TaskView',
				component: () => import('@/views/TaskView.vue'),
				meta: {
					layout: 'AppLayoutMain',
				},
			},
			{
				path: '/tasks/create',
				name: 'TaskCreate',
				component: () => import('@/views/TaskCreate.vue'),
				meta: {
					layout: 'AppLayoutMain',
					middlewares: [isAdmin],
				},
			},
			{
				path: '/tasks/edit/:id',
				name: 'TaskEdit',
				component: () => import('@/views/TaskEdit.vue'),
				meta: {
					layout: 'AppLayoutMain',
					middlewares: [isAdmin],
				},
			},
		],
		meta: {
			layout: 'AppLayoutMain',
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/AppLogin.vue'),
		meta: {
			layout: 'AppLayoutDefault',
		},
	},
];
