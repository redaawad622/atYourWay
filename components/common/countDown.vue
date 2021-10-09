<template>
  <ul class="vuejs-countdown">
    <li v-if="days > 0">
      <p class="digit">{{ days | twoDigits }}</p>
      <p class="text">{{ days > 1 ? 'days' : 'day' }}</p>
    </li>
    <li>
      <p class="digit">{{ hours | twoDigits }}</p>
      <p class="text">{{ hours > 1 ? 'hours' : 'hour' }}</p>
    </li>
    <li>
      <p class="digit">{{ minutes | twoDigits }}</p>
      <p class="text">min</p>
    </li>
    <li>
      <p class="digit secondary--text">{{ seconds | twoDigits }}</p>
      <p class="text">Sec</p>
    </li>
  </ul>
</template>

<script>
let interval = null

export default {
  name: 'vuejsCountDown',
  props: {
    deadline: {
      type: String,
    },
    end: {
      type: String,
    },
    stop: {
      type: Boolean,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      diff: 0,
    }
  },
  created() {
    if (!this.deadline && !this.end) {
      throw new Error("Missing props 'deadline' or 'end'")
    }

    const endTime = this.deadline ? this.deadline : this.end
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000)

    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline' or 'end'")
    }

    interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60
    },

    minutes() {
      return Math.trunc(this.diff / 60) % 60
    },

    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24
    },

    days() {
      return Math.trunc(this.diff / 60 / 60 / 24)
    },
  },
  watch: {
    now(value) {
      this.diff = this.date - this.now
      if (this.diff <= 0 || this.stop) {
        this.diff = 0
        // Remove interval
        clearInterval(interval)
        this.$emit('finish')
      }
    },
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    },
  },
  destroyed() {
    clearInterval(interval)
  },
}
</script>
<style>
.vuejs-countdown {
  padding: 0 !important;
  margin: 0;
}
.vuejs-countdown li {
  display: inline-block;
  margin: 0 2px;
  text-align: center;
  position: relative;
}
.vuejs-countdown li p {
  margin: 0;
}

.vuejs-countdown li:first-of-type {
  margin-left: 0;
}
.vuejs-countdown li:last-of-type {
  margin-right: 0;
}
.vuejs-countdown li:last-of-type::after {
  content: '';
}
.vuejs-countdown .digit {
  color: var(--v-primary-base);
  display: block;
  font-size: 24px;
  overflow: hidden;
  text-align: center;
  font-weight: 600;
  position: static;
  width: 64px;
  height: 64px;
  line-height: 68px;
  background: #fff;
  border-radius: 100%;
  margin-bottom: 15px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 6%);
}
.vuejs-countdown .text {
  font-size: 12px;
  display: block;
  width: 100%;
  color: #666;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
}
</style>
