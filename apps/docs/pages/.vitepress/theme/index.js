import DefaultTheme from 'vitepress/theme'
import MyButton from '@frontiers-fe/ui/components/Button.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyButton', MyButton)
  },
}
