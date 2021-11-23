<template>
  


  <div class="flex text-xl">
      <div class="border-r border-gray-light text-center px-4">
        <span class="text-blue font-bold block">{{ days | twoDigits }}</span>
        <span class="text-xs uppercase block">day</span>
      </div>
      <div class="border-r border-gray-light text-center px-4">
        <span class="text-blue font-bold block">{{ hours | twoDigits }}</span>
        <span class="text-xs uppercase block">hrs</span>
      </div>

      <div class="border-r border-gray-light text-center px-4">
        <span class="text-blue font-bold block">{{ minutes | twoDigits }}</span>
        <span class="text-xs uppercase block">min</span>
      </div>

      <div class="text-center px-4 pr-0">
        <span class="text-blue font-bold block">{{ seconds | twoDigits }}</span>
        <span class="text-xs uppercase block">sec</span>
      </div>
    </div>
</template>




<script>
export default {
  props: {
    date: null
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      event: this.date,
      finish: false
    }
  },
  mounted () {
    const _self = this
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000)
  },
  computed: {
    secondCount () {
      return this.calculatedDate - this.now
    },
    calculatedDate () {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    seconds () {
      if (this.secondCount < 0) return 0
      return this.secondCount % 60
    },
    minutes () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },
    hours () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },
    days () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    }
  },
  filters: {
    twoDigits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  }
}
</script>
