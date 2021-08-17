import { createApp } from 'vue';

import App from './App.vue';
import CardWrapper from "./components/UI/CardWrapper";
import ButtonWrapper from "./components/UI/ButtonWrapper";
import Modal from "./components/UI/Modal";
const app = createApp(App);

app.component('card-wrapper', CardWrapper);
app.component('button-wrapper', ButtonWrapper);
app.component('modal-wrapper', Modal);
app.mount('#app')
