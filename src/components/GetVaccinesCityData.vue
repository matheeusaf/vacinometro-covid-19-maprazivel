<template>
  <v-row class="text-center">
    <v-col class="mb-5" cols="12" xs="6" sm="6" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <h5 class="headline mb-2">Dose Única</h5>
        <v-progress-circular id="doseUnicaLoader" indeterminate color="red lighten-2"></v-progress-circular>
        <h4 class="display-1">{{doseUnica}}</h4>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="6" sm="6" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <h5 class="headline mb-2">Primeira Dose</h5>
        <v-progress-circular id="primeiraDoseLoader" indeterminate color="red lighten-2"></v-progress-circular>
        <h4 class="display-1">{{primeiraDose}}</h4>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="6" sm="6" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <h5 class="headline mb-2">Segunda Dose</h5>
        <v-progress-circular id="segundaDoseLoader" indeterminate color="red lighten-2"></v-progress-circular>
        <h4 class="display-1">{{segundaDose}}</h4>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="6" sm="6" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <h5 class="headline mb-2">Terceira Dose</h5>
        <v-progress-circular id="terceiraDoseLoader" indeterminate color="red lighten-2"></v-progress-circular>
        <h4 class="display-1">{{terceiraDose}}</h4>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="12" sm="12" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <vc-donut :sections="chartporcPopulacaoVacinadaDU" has-legend legend-placement="bottom" :total="100"
          :start-angle="0" :auto-adjust-text-size="true">
          <h1 style="margin: 0;">
            <v-progress-circular id="ppuloader" indeterminate color="deep-purple lighten-2"></v-progress-circular>
            {{porcPopulacaoVacinadaDU}}%
          </h1>
        </vc-donut>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="12" sm="12" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <vc-donut :sections="chartporcPopulacaoVacinadaD1" has-legend legend-placement="bottom" :total="100"
          :start-angle="0" :auto-adjust-text-size="true">
          <h1 style="margin: 0;">
            <v-progress-circular id="ppvloader" indeterminate color="green lighten-2"></v-progress-circular>
            {{porcPopulacaoVacinadaD1}}%
          </h1>
        </vc-donut>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="12" sm="12" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <vc-donut :sections="chartporcPopulacaoVacinadaD2" has-legend legend-placement="bottom" :total="100"
          :start-angle="0" :auto-adjust-text-size="true">
          <h1 style="margin: 0;">
            <v-progress-circular id="ppv2loader" indeterminate color="blue lighten-2"></v-progress-circular>
            {{porcPopulacaoVacinadaD2}}%
          </h1>
        </vc-donut>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="12" sm="12" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <vc-donut :sections="chartporcPopulacaoVacinadaD3" has-legend legend-placement="bottom" :total="100"
          :start-angle="0" :auto-adjust-text-size="true">
          <h1 style="margin: 0;">
            <v-progress-circular id="ppv3loader" indeterminate color="indigo lighten-2"></v-progress-circular>
            {{porcPopulacaoVacinadaD3}}%
          </h1>
        </vc-donut>
      </v-sheet>
    </v-col>
    <v-col class="mb-4" sm="12" md="12" lg="12">
      <p class="body-1 mb-3" id="updatedat">Atualizado diariamente após as 20:00 horário de brasília ⏲️</p>
    </v-col>
  </v-row>
</template>

<script>
  import CSVJSON from 'csvjson-csv2json';

  const numporcPopulacaoVacinadaDU = parseFloat(localStorage.getItem("ppu"));
  const numporcPopulacaoVacinadaD1 = parseFloat(localStorage.getItem("ppv"));
  const numporcPopulacaoVacinadaD2 = parseFloat(localStorage.getItem("ppv2"));
  const numporcPopulacaoVacinadaD3 = parseFloat(localStorage.getItem("ppv3"));

  export default {
    name: "GetVaccinesCityData",
    data() {
      return {
        doseUnica: null,
        primeiraDose: null,
        segundaDose: null,
        terceiraDose: null,
        porcPopulacaoVacinadaDU: null,
        porcPopulacaoVacinadaD1: null,
        porcPopulacaoVacinadaD2: null,
        porcPopulacaoVacinadaD3: null,
        chartOptions: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 200,
            options: {
              chart: {
                width: 200,
                height: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        chartporcPopulacaoVacinadaDU: [{
          label: 'Porcentagem da População vacinada com apenas a Dose Única',
          value: numporcPopulacaoVacinadaDU,
          color: '#9575CD'
        }],
        chartporcPopulacaoVacinadaD1: [{
          label: 'Porcentagem da População vacinada com a Primeria Dose',
          value: numporcPopulacaoVacinadaD1,
          color: '#81C784'
        }],
        chartporcPopulacaoVacinadaD2: [{
          label: 'Porcentagem da População vacinada com a Segunda Dose',
          value: numporcPopulacaoVacinadaD2,
          color: '#64B5F6'
        }],
        chartporcPopulacaoVacinadaD3: [{
          label: 'Porcentagem da População vacinada com a Terceira Dose',
          value: numporcPopulacaoVacinadaD3,
          color: '#7986CB'
        }],
        errorMessage: null
      };
    },
    async created() {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      // GET request using fetch with error handling
      fetch("https://covid19-sp-api.vercel.app/api/vacinometro",
          requestOptions)
        .then(async response => {
          const data = await response.json();
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].Município === 'MONTE APRAZÍVEL') {
              if (data.data[i].Dose === 'UNICA') {
                this.doseUnica = data.data[i]['Total Doses Aplicadas'];
                document.querySelector("#doseUnicaLoader").style.display = "none";
              } else if (data.data[i].Dose === '1° DOSE') {
                this.primeiraDose = data.data[i]['Total Doses Aplicadas'];
                document.querySelector("#primeiraDoseLoader").style.display = "none";
              } else if (data.data[i].Dose === '2° DOSE') {
                this.segundaDose = data.data[i]['Total Doses Aplicadas'];
                document.querySelector("#segundaDoseLoader").style.display = "none";
              } else {
                this.terceiraDose = data.data[i]['Total Doses Aplicadas'];
                document.querySelector("#terceiraDoseLoader").style.display = "none";
              }
            }
          }
          // Unique
          this.porcPopulacaoVacinadaDU = (this.doseUnica / 25373) * 100;
          this.porcPopulacaoVacinadaDU = parseFloat(this.porcPopulacaoVacinadaDU.toFixed(2));
          document.querySelector("#ppuloader").style.display = "none";
          localStorage.setItem("ppu", this.porcPopulacaoVacinadaDU);
          // First
          this.porcPopulacaoVacinadaD1 = (this.primeiraDose / 25373) * 100;
          this.porcPopulacaoVacinadaD1 = parseFloat(this.porcPopulacaoVacinadaD1.toFixed(2));
          document.querySelector("#ppvloader").style.display = "none";
          localStorage.setItem("ppv", this.porcPopulacaoVacinadaD1);
          // Second
          this.porcPopulacaoVacinadaD2 = (this.segundaDose / 25373) * 100;
          this.porcPopulacaoVacinadaD2 = parseFloat(this.porcPopulacaoVacinadaD2.toFixed(2));
          document.querySelector("#ppv2loader").style.display = "none";
          localStorage.setItem("ppv2", this.porcPopulacaoVacinadaD2);
          // Third
          this.porcPopulacaoVacinadaD3 = (this.terceiraDose / 25373) * 100;
          this.porcPopulacaoVacinadaD3 = parseFloat(this.porcPopulacaoVacinadaD3.toFixed(2));
          document.querySelector("#ppv3loader").style.display = "none";
          localStorage.setItem("ppv3", this.porcPopulacaoVacinadaD3);
          //
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    }
  };

</script>