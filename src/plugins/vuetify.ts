/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: '#F3F3F3',
          toolbar: '#062140',
          footer: '#062140',
          primary: '#7bc6ff',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
