<template>
  <v-container fluid>
    <v-row>
      <v-col
        lg="12"
        md="12"
      >
<v-card flat color="background">
    <v-card-title>
        Livraison en cours
    </v-card-title>
  <v-data-iterator
    :items="delivery"
    no-data-text="Aucune livraison pour l'instant"
  >
    <template>
    <!-- <template #default="{items}"> -->
      <v-row>
        <v-col
          v-for="item in doneFalse"
          :key="item._id"
        >
        <AcceptedDelivery
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

import AcceptedDelivery from '../components/acceptedDelivery.vue'

export default {
  components: AcceptedDelivery,
  computed: {
    delivery: {
      get () {
        return this.$store.getters['delivery/delivery']
      }
    },
    doneFalse () {
      return this.delivery.filter(item => item.done === false && (item.status === 1 || item.status === 3))
    }
  },
  mounted () {
    this.$store.dispatch('delivery/fetch', this.$auth.getToken('local'))
  }
}

</script>

<style scoped>

</style>
