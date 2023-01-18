import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Translate
import { createI18n } from 'vue-i18n'
import { pt_BR } from '@/locales/pt_BR'
import { en } from '@/locales/en'

const languages = {
  pt_BR,
  en
}

const i18n = createI18n({
  locale: 'pt_BR',
  fallbackLocale: 'pt_BR',
  messages: languages
})


// V-viewer e MdbVue
import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'


import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import ScrollTop from 'primevue/scrolltop';
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import CascadeSelect from 'primevue/cascadeselect';

const app = createApp(App);
app.use(router);
app.use(VueViewer)
app.use(PrimeVue)
app.use(i18n)
app.component('DialogComponent', Dialog);
app.component('CascadeSelect ', CascadeSelect)
app.component('ScrollTop', ScrollTop);
app.component('ButtonComponent', Button);
app.component('CarouselComponent', Carousel);
app.component('CardComponent', Card);
app.component('DividerComponent', Divider);

app.mount('#app');




