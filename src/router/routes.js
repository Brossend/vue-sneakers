const Header = () => import('../components/header/header.vue');
const Home = () => import('../pages/home/home.vue');
const Favorites = () => import('../pages/favorites/favorites.vue');
const Profile = () => import('../pages/profile/profile.vue');
const Auth = () => import('../pages/auth/Auth.vue');
const Reg = () => import('../pages/registration/Registration.vue');

const routes = [{
    name: 'Home',
    path: '/',
    component: Header,
    children: [{
        path: '',
        component: Home,
        name: 'Main',
        meta: {
            pageTitle: 'Главная'
        }
    }, {
        path: 'favorites',
        component: Favorites,
        name: 'Favorites',
        meta: {
            pageTitle: 'Избранное'
        }
    }, {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: {
            pageTitle: 'Профиль'
        }
    }]
}, {
    path: '/auth',
    component: Auth,
    name: 'Auth',
    meta: {
        pageTitle: 'Вход в аккаунт'
    }
},
    {
        path: '/reg',
        component: Reg,
        name: 'Registration',
        meta: {
            pageTitle: 'Регистрация'
        }
    }
];

export default routes;