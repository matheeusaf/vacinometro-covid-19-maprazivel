<template>
  <v-row class="text-center">
    <v-col class="mb-5" cols="12" xs="6" sm="6" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <h5 class="headline mb-2">Doses Distribuídas</h5>
        <v-progress-circular id="dosesDistLoader" indeterminate color="red lighten-2"></v-progress-circular>
        <h4 class="display-1">{{dosesDist}}</h4>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="6" sm="6" md="3" lg="3">
      <v-sheet class="pa-4" elevation="3">
        <h5 class="headline mb-2">Doses Aplicadas</h5>
        <v-progress-circular id="dosesTotaisLoader" indeterminate color="red lighten-2"></v-progress-circular>
        <h4 class="display-1">{{dosesTotais}}</h4>
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
    <v-col class="mb-5" cols="12" xs="12" sm="12" md="6" lg="6">
      <v-sheet class="pa-4" elevation="3">
        <vc-donut :sections="chartporcPopulacaoVacinadaD1" has-legend legend-placement="bottom" :total="100" :start-angle="0" :auto-adjust-text-size="true">
          <h1 style="margin: 0;">
            <v-progress-circular id="ppvloader" indeterminate color="green lighten-2"></v-progress-circular>{{porcPopulacaoVacinada}}%</h1>população vacinada
        </vc-donut>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="12" sm="12" md="6" lg="6">
      <v-sheet class="pa-4" elevation="3">
        <vc-donut :sections="chartporcPopulacaoVacinadaD2" has-legend legend-placement="bottom" :total="100" :start-angle="0" :auto-adjust-text-size="true">
          <h1 style="margin: 0;"><v-progress-circular id="ppv2loader" indeterminate color="blue lighten-2"></v-progress-circular>{{porcPopulacaoVacinadaD2}}%</h1>população vacinada
        </vc-donut>
      </v-sheet>
    </v-col>
    <v-col class="mb-5" cols="12" xs="12" sm="12" md="12" lg="12">
      <v-sheet class="pa-4" elevation="3">
        <vc-donut :sections="chartporcDosesAplicadas" has-legend legend-placement="bottom" :total="100" :start-angle="0" :auto-adjust-text-size="true">
          <h1 style="margin: 0;"><v-progress-circular id="pdaloader" indeterminate color="red lighten-2"></v-progress-circular>{{porcDosesAplicadas}}%</h1>doses aplicadas
        </vc-donut>       
      </v-sheet>
    </v-col>
    <v-col class="mb-4" sm="12" md="12" lg="12">
        <p class="body-1 mb-3" id="updatedat">Atualizado diariamente ao fim do dia (18:00-19:00) ⏲️</p>
    </v-col>
  </v-row>
</template>

<script>
  import CSVJSON from 'csvjson-csv2json';

  const numporcPopulacaoVacinadaD1 = parseFloat(localStorage.getItem("ppv"));
  const numporcPopulacaoVacinadaD2 = parseFloat(localStorage.getItem("ppv2"));
  const numporcDosesAplicadas = parseFloat(localStorage.getItem("pdaM"));

  export default {
    name: "GetVaccinesCityData",
    data() {
      return {
        primeiraDose: null,
        segundaDose: null,
        dosesTotais: null,
        dosesDist: null,
        porcDosesAplicadas: null,
        porcPopulacaoVacinada: null,
        porcPopulacaoVacinadaD2: null,
        series: [44, 55, 41, 17, 15],
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
        chartporcDosesAplicadas: [{
          label: 'Porcentagem de Doses Aplicadas sobre as Doses Distribuídas',
          value: numporcDosesAplicadas,
          color: '#e57373'
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
        errorMessage: null
      };
    },
    async created() {
      // requestOptions to sent a request to cors.bridged.cc
      var data = new Date();
      var myHeaders = new Headers();
      myHeaders.append("origin", "same-origin");
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      // GET request using fetch with error handling
      fetch("https://cors.bridged.cc/https://www.saopaulo.sp.gov.br/wp-content/uploads/" + data.getFullYear() + "/" +
          (data.getMonth() + 1).toString().padStart(2, '0') + "/" + dataAtualFormatada() + "_vacinometro.csv",
          requestOptions)
        .then(async response => {
          const data = await response.text();

          const citydatajson = CSVJSON.csv2json(data);
          for (var i = 0; i < citydatajson.length; i++) {
            if (citydatajson[i].Município === 'MONTE APRAZÍVEL') {
              if (citydatajson[i].Dose === '1° DOSE') {
                this.primeiraDose = citydatajson[i]['Total Doses Aplicadas'];
                document.querySelector("#primeiraDoseLoader").style.display = "none";
              } else {
                this.segundaDose = citydatajson[i]['Total Doses Aplicadas'];
                document.querySelector("#segundaDoseLoader").style.display = "none";
              }
            }
          }
          this.dosesTotais = parseFloat(this.primeiraDose) + parseFloat(this.segundaDose);
          document.querySelector("#dosesTotaisLoader").style.display = "none";
          this.porcPopulacaoVacinada = (this.primeiraDose / 25373) * 100;
          this.porcPopulacaoVacinada = parseFloat(this.porcPopulacaoVacinada.toFixed(2));
          document.querySelector("#ppvloader").style.display = "none";
          localStorage.setItem("ppv", this.porcPopulacaoVacinada);
          this.porcPopulacaoVacinadaD2 = (this.segundaDose / 25373) * 100;
          this.porcPopulacaoVacinadaD2 = parseFloat(this.porcPopulacaoVacinadaD2.toFixed(2));
          document.querySelector("#ppv2loader").style.display = "none";
          localStorage.setItem("ppv2", this.porcPopulacaoVacinadaD2);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });

      // GET request using fetch with error handling
      fetch("https://cors.bridged.cc/https://www.saopaulo.sp.gov.br/wp-content/uploads/" + data.getFullYear() + "/" +
          (data.getMonth() + 1).toString().padStart(2, '0') + "/" + dataAtualFormatada() +
          "_painel_distribuicao_doses.csv", requestOptions)
        .then(async response => {
          const data = await response.text();

          const citydatadistjson = CSVJSON.csv2json(data);
          for (var i = 0; i < citydatadistjson.length; i++) {
            if (citydatadistjson[i].Municipio === 'MONTE APRAZÍVEL') {
              this.dosesDist = citydatadistjson[i]['Qtd-Doses-Distribuidas'];
              document.querySelector("#dosesDistLoader").style.display = "none";
            }
          }
          // setTimeout to wait dosesTotais be loaded
          setTimeout(() => {
            this.porcDosesAplicadas = (this.dosesTotais / this.dosesDist) * 100;
            this.porcDosesAplicadas = parseFloat(this.porcDosesAplicadas.toFixed(2));
            document.querySelector("#pdaloader").style.display = "none";
            localStorage.setItem("pdaM", this.porcDosesAplicadas);
          }, 1000);
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    }
  };

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    if (dia && data.getHours() > 19) {
      // Get the actual day
      dia = dia;
    } else {
      var diad = dia.toString()[0];
      if (diad === "1" || diad === "2" || diad === "3"){
        dia = parseFloat(dia);
        dia = dia - 1;
      }
      else {
        dia = parseFloat(dia);
        dia = dia - 1;
        dia = "0" + dia.toString();
      }
    }
    return ano + "" + mes + "" + dia;
  }
</script>