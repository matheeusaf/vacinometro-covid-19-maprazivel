<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/coronavirus-logo-concept.png')" class="my-3" contain height="300" />
      </v-col>
      <v-col class="mb-4" sm="12" md="12" lg="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Status da Vacinação
        </h1>
        <h2 class="display-1 font-weight-bold mb-3">
          Monte Aprazível
        </h2>
        <p class="subheading font-weight-regular">
          Dados municipais cedidos por <a href="https://www.saopaulo.sp.gov.br/planosp/simi/dados-abertos/" target="_blank" >Governo do Estado de São Paulo</a>
        </p>
      </v-col>
      <GetVaccinesCityData/>
      <v-col class="mb-4" sm="12" md="12" lg="12">
        <h2 class="body-1 mb-3">Feito com: ❤️ por <a href="mailto:mattheus.afernandes@gmail.com">Matheus Fernandes</a></h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GetVaccinesCityData from "./GetVaccinesCityData";

  export default {
    name: 'HomePage',

      components: {
      GetVaccinesCityData
  },

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
