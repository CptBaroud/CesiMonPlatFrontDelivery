<template>
  <v-container fluid>
    <v-row>
      <v-col
        lg="12"
        md="12"
      >
<v-card flat color="background">
    <v-card-title>
        Livraisons terminées
    </v-card-title>
  <v-data-iterator
    :items="delivery"
    no-data-text="Aucune livraison pour l'instant"
  >
    <template>
    <!-- <template #default="{items}"> -->
      <v-row>
        <v-col
          v-for="item in doneTrue"
          :key="item._id"
        >
        <CompletedDelivery
            :item="item"
        />
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</v-card>
</v-col>
    </v-row>
  </v-container>
</template>

<script>

import CompletedDelivery from '../components/completedDelivery.vue'

export default {
  components: CompletedDelivery,
  computed: {
    delivery: {
      get () {
        return this.$store.getters['delivery/delivery']
      }
    },
    doneTrue () {
      return this.delivery.filter(item => item.done === true && item.status === 5)
    }
  },
  mounted () {
    this.$store.dispatch('delivery/fetch', this.$auth.getToken('local'))
  }
}

</script>

<style scoped>

</style>
