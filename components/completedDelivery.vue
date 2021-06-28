<template>
<v-container>
    <v-card class="mx-auto my-8" max-width="374">

        <v-card-title>
            Livraison achevée
        </v-card-title>
        <v-card-subtitle style="padding-top: 0">
            Achevée le {{ date() }}
        </v-card-subtitle>
        <v-divider class="mx-12"></v-divider>
        <v-card-text>
            <div class="text-subtitle-1 text-center">
                Merci pour votre course à cette adresse :
            </div>
            <div class="text-subtitle-1 font-weight-bold mt-3 text-center">
                {{ item.address }}
            </div>

            <v-card-text v-if="item.status === 5" class="text-center"> Vous avez bien terminé cette livraison. </v-card-text>

        </v-card-text>
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
    date () {
      const dateDelivery = new Date(this.item.deliveryTime)
      const options = { hour: '2-digit', minute: '2-digit' }
      const createdDate = dateDelivery.toLocaleDateString('fr-FR', options)
      return createdDate
    },
    dateCreated () {
      const dateCreated = new Date(this.item.created)
      const options = { hour: '2-digit', minute: '2-digit' }
      const createdDate = dateCreated.toLocaleDateString('fr-FR', options)
      return createdDate
    }
  }
}

</script>
<style scoped></style>
