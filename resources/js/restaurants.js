import './bootstrap';
import {createApp} from 'vue';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import RestaurentsList from "./components/RestaurentsList";

const app = createApp({});

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDxAvmO3Ob2pem2VzG5vxeUG394puIUnUg',
        language: 'fr',
    },
});
app.component('restaurants', RestaurentsList);
app.mount('#app');
