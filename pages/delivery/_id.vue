<template>
  <v-container class="mt-2">
    <v-row>
      <v-col
        cols="3"
      >
        <v-card
          flat
          color="background"
          rounded="xl"
        >
          <v-card-title>
            Qr code de validation
          </v-card-title>
          <v-card-text>
            <v-card
              flat
              color="secondary"
              rounded="xl"
            >
              <v-card-text v-if="delivery">
                <v-row justify="center" align="center">
                  <v-col cols="6">
                    <VueQr
                      :text="src"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="3"
      >
        <v-card
          flat
          color="background"
          rounded="xl"
        >
          <v-card-title>
            La commande
          </v-card-title>
          <v-card-text>
            <v-card
              flat
              color="secondary"
              rounded="xl"
            >
              <v-card-text v-if="order">
                <orderCard
                  v-if="order.article"
                  :item="order"
                />
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import orderCard from '../../components/orderCard'
export default {
  name: 'Id',
  components: {
    orderCard
  },
  computed: {
    delivery: {
      get () {
        return this.$store.getters['delivery/delivery'].filter(i => i._id === this.$route.params.id)[0]
      }
    },

    order: {
      get () {
        return this.$store.getters['order/order'].filter(i => i._id === this.delivery.order._id)[0]
      }
    },

    src () {
      return process.env.client_url + '/delivery/' + this.delivery._id
    }
  }
}
</script>

<style scoped>

</style>
