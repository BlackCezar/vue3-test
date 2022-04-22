import { createApp } from 'vue'
import App from './App.vue'
import Block from './components/Block.vue'
import Field from './components/Field.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import Ticket from './components/Ticket.vue'
import { store } from './store/index'

const app = createApp(App)

app.mount('#app')
app.use(store)

app
  .component('BlockComponent', Block)
  .component('ButtonGroupComponent', ButtonGroup)
  .component('TicketComponent', Ticket)
  .component('FieldComponent', Field)
