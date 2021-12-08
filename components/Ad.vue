<template>
  <div>
    <template v-if="isDev">
      [ADSENSE PLACEHOLDER]
    </template>
    <template v-else>
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-4670880031318337"
           data-ad-slot="1163269869"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </template>
  </div>
</template>

<script>
export default {
  head() {
    let productionScripts = []
    if (!this.isDev) {
      return {
        scripts: [
          { hid: 'adsense', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', defer: true, 'data-ad-client': 'ca-pub-4670880031318337' },
        ]
      }
    }

    return { }
  },  
  data() {
    return {
       isDev: process.env.NODE_ENV !== 'production'
    }
  },
  mounted() {
    if (!this.isDev) {
      this.$nextTick(() => {
        try {
          // this is required for each ad slot (calling this once will only load 1 ad)
          (adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
          console.error(error)
        }
      })
    }
  },
  components: {

  }
}
</script>
