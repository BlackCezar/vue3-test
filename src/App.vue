<template>
  <div class="page">
    <img src="@/assets/imgs/Logo.svg" alt="Logo" class="logo" />
    <div class="page-content">
      <aside>
        <button class="filterShowButton primary">Фильтры</button>
        <Block title="Количество пересадок">
          <Field
            v-for="transferCount in transferCounts"
            :key="transferCount.count"
            type="checkbox"
            :fieldId="`transferCount-${transferCount.count}`"
            name="transferCount"
            :fieldLabel="transferCount.title"
          ></Field>
        </Block>
        <Block title="Компания">
          <Field
            v-for="company in companies"
            :fieldId="`company-${company.name}`"
            :key="company.name"
            name="company"
            :fieldLabel="company.title"
            type="radio"
          ></Field>
        </Block>
      </aside>
      <main>
        <ButtonGroup>
          <button>Самый дешевый</button>
          <button>Самый быстрый</button>
          <button>Оптимальный</button>
        </ButtonGroup>

        <template v-for="ticket in tickets"  :key="ticket.id">
          <Ticket :ticket="ticket" />
        </template>
        <button class="primary">Показать еще 5 билетов!</button>
      </main>
    </div>
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Field from "./components/Field.vue";
import Ticket from "./components/Ticket.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import tickets from '../../tickets.json'

import { ref } from "vue";
import "@/assets/scss/App.scss";

export default {
  name: "App",
  components: { Block, Field, ButtonGroup, Ticket },
  setup() {
    const transferCounts = [
      { title: "Без пересадок", count: 0 },
      { title: "1 пересадка", count: 1 },
      { title: "2 пересадки", count: 2 },
      { title: "3 пересадки", count: 3 },
    ];
    const companies = [
      { title: "S7 Airlines", name: "s7" },
      { title: "XiamenAir", name: "xiamen" },
    ];

    const filters = ref([]);
    return {
      transferCounts,
      companies,
      filters,
      tickets
    };
  },
};
</script>