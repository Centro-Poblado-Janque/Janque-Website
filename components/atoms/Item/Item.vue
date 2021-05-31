<template>
   <li class="item-list" :class="[className, forLink && 'linkItem']">
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
