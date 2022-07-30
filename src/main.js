import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import MasonryWall from '@yeger/vue-masonry-wall'


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

const app = createApp(App);
app.use(router);
app.use(VueViewer)
app.use(MasonryWall)
app.use(PrimeVue)
app.component('DialogComponent', Dialog);
app.component('ScrollTop', ScrollTop);
app.component('ButtonComponent', Button);
app.component('CarouselComponent', Carousel);
app.component('CardComponent', Card);
app.component('DividerComponent', Divider);

app.mount('#app');




