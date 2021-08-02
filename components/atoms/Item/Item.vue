<template>
   <li :class="[forLink ? 'link-item' : 'list-item', className]">
      <slot></slot>
   </li>
</template>

<script>
export default {
   props: {
      className: String,
      forLink: Boolean,
   },
}
</script>
