<template>
  <Block>
    <div class="ticket">
      <div class="row">
        <div class="col">
          <span class="price">{{ ticket.price }}</span>
        </div>
        <div class="col">
          <img
            src=""
            alt="s7"
            class="ticket-company"
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span class="header">MOW – HKT</span>
          <span class="value">10:45 – 08:00</span>
        </div>
        <div class="col">
          <span class="header">В пути</span>
          <span class="value">21ч 15м</span>
        </div>
        <div class="col">
          <span class="header">2 пересадки</span>
          <span class="value">HKG, JNB</span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span class="header">MOW – HKT</span>
          <span class="value">10:45 – 08:00</span>
        </div>
        <div class="col">
          <span class="header">В пути</span>
          <span class="value">21ч 15м</span>
        </div>
        <div class="col">
          <span class="header">2 пересадки</span>
          <span class="value">HKG, JNB</span>
        </div>
      </div>
    </div>
  </Block>
</template>

<script>
import '@/assets/scss/Ticket.scss'
import Block from './Block.vue'

export default {
  name: 'BlockComponent',
  components: { Block },
  props: {
    ticket: Object
  }
}
</script>
