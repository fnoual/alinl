/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import {createApp} from 'vue';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import ExampleComponent from './components/ExampleComponent.vue';

const app = createApp({});

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDxAvmO3Ob2pem2VzG5vxeUG394puIUnUg',
        language: 'fr',
    },
});
app.component('example-component', ExampleComponent);
app.mount('#app');
