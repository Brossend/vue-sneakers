import {createApp} from 'vue'
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {VueFire, VueFireAuth} from "vuefire";
import {initializeApp} from "firebase/app";
import pinia from './store/index.js';
import router from './router/index.js';

const firebaseConfig = {
    apiKey: "AIzaSyAk-kEnWMV3HDPmawAwe05JoyGX9AlamME",
    authDomain: "vue-sneakers-3e5b9.firebaseapp.com",
    projectId: "vue-sneakers-3e5b9",
    storageBucket: "vue-sneakers-3e5b9.appspot.com",
    messagingSenderId: "1070960383578",
    appId: "1:1070960383578:web:68c9a83ef3311e12d1ea63",
    measurementId: "G-R18G1STMRN"
};

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);
const firebaseApp = initializeApp(firebaseConfig);

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
})

app.use(pinia);
app.use(autoAnimatePlugin);
app.use(router);
app.use(vuetify);

app.mount('#app');
