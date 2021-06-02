module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    themeColor: "#fafafa",
    msTileColor: "#e57373",
    name: "Vacinômetro Covid-19 Monte Aprazível",
    manifestOptions: {
      icons: [
        {
          src: "src/assets/img/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "src/assets/img/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "src/assets/img/android-chrome-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "src/assets/img/android-chrome-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "src/assets/img/apple-touch-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "src/assets/img/apple-touch-icon-76x76.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          src: "src/assets/img/apple-touch-icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "src/assets/img/apple-touch-icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "src/assets/img/apple-touch-icon-180x180.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "src/assets/img/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "src/assets/img/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "src/assets/img/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "src/assets/img/msapplication-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "src/assets/img/mstile-150x150.png",
          sizes: "150x150",
          type: "image/png",
        },
      ],
    },
  },
}
