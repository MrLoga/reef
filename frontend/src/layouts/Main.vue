<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('FETCH_CURRENCY')
  }
}
</script>
