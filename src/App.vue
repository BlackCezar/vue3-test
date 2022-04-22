<!--<script lang="ts">-->
<!--import { Options, Vue } from 'vue-class-component';-->
<!--import HelloWorld from './components/HelloWorld.vue';-->

<!--@Options({-->
<!--  components: {-->
<!--    HelloWorld,-->
<!--  },-->
<!--})-->
<!--export default class App extends Vue {}-->
<!--</script>-->
<script lang="ts">
import { ref, defineComponent } from 'vue'
import {Ticket} from './models/Ticket'
import '@/assets/scss/App.scss'

export default defineComponent({
  setup () {
    const transferCounts = [
      { title: 'Без пересадок', count: 0 },
      { title: '1 пересадка', count: 1 },
      { title: '2 пересадки', count: 2 },
      { title: '3 пересадки', count: 3 }
    ]
    const tickets: Ticket[] = []
    const companies = [
      { title: 'S7 Airlines', name: 's7' },
      { title: 'XiamenAir', name: 'xiamen' }
    ]

    const filters = ref([])

    return {
      transferCounts, tickets, companies, filters
    }
  }
})
</script>
<template>
  <div class="page">
    <img
      src="@/assets/imgs/Logo.svg"
      alt="Logo"
      class="logo"
    >
    <div class="page-content">
      <aside>
        <button class="filterShowButton primary">
          Фильтры
        </button>
        <Block title="Количество пересадок">
          <Field
            v-for="transferCount in transferCounts"
            :key="transferCount.count"
            type="checkbox"
            :field-id="`transferCount-${transferCount.count}`"
            name="transferCount"
            :field-label="transferCount.title"
          />
        </Block>
        <Block title="Компания">
          <Field
            v-for="company in companies"
            :key="company.name"
            :field-id="`company-${company.name}`"
            name="company"
            :field-label="company.title"
            type="radio"
          />
        </Block>
      </aside>
      <main>
        <ButtonGroup>
          <button>Самый дешевый</button>
          <button>Самый быстрый</button>
          <button>Оптимальный</button>
        </ButtonGroup>

        <template v-if="tickets && tickets.length">
          <template
            v-for="ticket in tickets"
            :key="ticket.id"
          >
            <Ticket :ticket="ticket" />
          </template>
        </template>

        <button class="primary">
          Показать еще 5 билетов!
        </button>
      </main>
    </div>
  </div>
</template>


