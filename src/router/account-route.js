import Login from '../views/account/Login.vue';
import Register from '../views/account/Registration.vue';
import LayoutAuth from '../layouts/_Layout-Auth.vue';

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: "/",
        name: "Login",
        component: Login,
        meta: { layout: LayoutAuth }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { layout: LayoutAuth }
    }

];

export default routes;