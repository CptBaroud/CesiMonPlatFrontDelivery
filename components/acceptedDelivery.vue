<template>
<v-container>
    <v-card class="mx-auto my-8" max-width="374">

        <v-card-title>
            Votre course
        </v-card-title>
        <v-card-subtitle style="padding-top: 0">
        Vous avez pris en charge cette livraison
        </v-card-subtitle>
        <v-divider class="mx-12"></v-divider>
        <v-card-text>
            <div class=" text-subtitle-1">
                Arrivée estimée {{ date() }}
                {{ item._id }}
            </div>

            <v-img src="https://media.gettyimages.com/vectors/city-map-with-navigation-icons-vector-id1267502766?k=6&m=1267502766&s=612x612&w=0&h=oIYKQt8xr6y038K7sWRVd_syxzmk-D2yRp_2dGgNl8M="></v-img>

            <v-card-text v-if="item.status === 1" > Vous avez accepté cette livraison. Elle vous attend chez le restaurateur. Lorsque vous avez récupéré la commande, prévenez le client en appuyant sur le bouton ci-dessous. </v-card-text>
            <v-card-text v-if="item.status === 3" > Une fois que vous avez effectué la livraison, vous pouvez cliquer sur le bouton ci-dessous. </v-card-text>

            <div class="text-subtitle-1 font-weight-bold mt-3 text-center">
                {{ item.address }}
            </div>

            </v-card-text>
            <v-card-actions v-if="item.status === 1">
      <v-spacer />
      <v-btn rounded color="warning" small @click="taken">
        Commande récupérée
      </v-btn>
    </v-card-actions>
            <v-card-actions v-if="item.status === 3">
      <v-spacer />
      <v-btn rounded color="success" small @click="close">
        Livraison faite
      </v-btn>
    </v-card-actions>
    </v-card>
</v-container>
</template>

<script>
export default {
  name: 'Deliveries',
  props: {
    item: {
      type: Object,
      default () {
        return {
          status: 0,
          created: '',
          done: false,
          _id: [],
          deliveryMan: 0,
          client: 0,
          address: '',
          deliveryTime: ''
        }
      }
    }
  },
  methods: {
    open () {
      this.$store.dispatch('delivery/open', { token: this.$auth.getToken('local'), _id: this.item._id })
    },
    close () {
      this.$store.dispatch('delivery/close', { token: this.$auth.getToken('local'), _id: this.item._id })
    },
    taken () {
      this.$store.dispatch('delivery/taken', { token: this.$auth.getToken('local'), _id: this.item._id })
    },
    date () {
      const dateDelivery = new Date(this.item.deliveryTime)
      const options = { hour: '2-digit', minute: '2-digit' }
      const createdDate = dateDelivery.toLocaleDateString('fr-FR', options)
      return createdDate
    }
  }
}

</script>
<style scoped></style>
