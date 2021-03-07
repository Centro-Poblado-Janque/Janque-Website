<template>
  <span v-if="false"/>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: 'https://cp-janque/_nuxt/img/banner_1.cb5f12a.png'
    },
    url:{
      type: String,
      required: true
    }
  },

  head() {
    return {
      title: this.title,
      link: [
        { hid: 'url', rel: 'canonical', href: 'https://cp-janque.com/' + this.url }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'tw-title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'tw-description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'tw-image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og-image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og-image:alt',
          property: 'og:image:alt',
          content: this.title
        }
      ]
    }
  }
}
</script>
