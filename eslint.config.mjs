// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'vue/no-v-html': 0,
    'vue/require-default-prop': 0,
    'vue/block-order': [
      'warn',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
})
