// https://github.com/BayBreezy/nuxt3-vuetify3-starter
// https://github.com/azoom-nguyen-van-nam/nuxt3-example
import type { IconAliases, IconProps, IconSet, ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import { Icon } from '#components'

const defaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f9f9f7',
    surface: '#f9f9f7',
    primary: '#284E68',
    secondary: '#9333ea',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b',
    created: '',
    ready: '',
    doing: '',
    done: '#22c55e',
    failed: '#FF5252',
    canceled: '',
  },
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0C111B',
    surface: '#1f2937',
    primary: '#6366f1',
    secondary: '#9333ea',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b',
    created: '',
    ready: '',
    doing: '',
    done: '#22c55e',
    failed: '#FF5252',
    canceled: '',
  },
}

const aliases: IconAliases = {
  collapse: 'ph:caret-up',
  complete: 'ph:check',
  cancel: 'ph:x-circle',
  close: 'ph:x',
  delete: 'ph:trash',
  clear: 'ph:x-circle',
  success: 'ph:check-circle',
  info: 'ph:info',
  warning: 'ph:warning',
  error: 'ph:x-circle',
  prev: 'ph:caret-left',
  next: 'ph:caret-right',
  checkboxOn: 'ph:check-square-fill',
  checkboxOff: 'ph:square',
  checkboxIndeterminate: 'ph:square-logo-fill',
  delimiter: 'ph:circle-fill',
  sort: 'ph:arrows-down-up-fill',
  expand: 'ph:caret-down',
  menu: 'ph:list',
  subgroup: 'ph:caret-down-fill',
  dropdown: 'ph:caret-down-fill',
  radioOn: 'ph:radio-button-fill',
  radioOff: 'ph:circle',
  edit: 'ph:note-pencil',
  ratingEmpty: 'ph:star',
  ratingFull: 'ph:star-fill',
  ratingHalf: 'ph:star-half-fill',
  loading: 'ph:spinner',
  first: 'ph:caret-double-left-duotone',
  last: 'ph:caret-double-right-duotone',
  unfold: 'ph:arrows-down-up',
  file: 'ph:paperclip',
  plus: 'ph:plus',
  minus: 'ph:minus',
  sortAsc: 'ph:sort-ascending',
  sortDesc: 'ph:sort-descending',
}

const custom: IconSet = {
  component: (props: IconProps) =>
  // Return render function
    h(Icon, {
      name: props.icon /** The Icon component requires the name prop in order to render the correct icon */,
      tag: props.tag,
      disabled: props.disabled,
    }),
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    defaults: {
      global: {
        ripple: false,
        elevation: 0,
        flat: true,
      },
      VAppBar: {
        elevation: 0,
      },
      VBtn: {
        color: 'primary',
        // minWidth: 40,
        // minHeight: 32,
      },
      VTextField: {
        hideDetails: 'auto',
        color: 'primary',
      },
      VSelect: {
        hideDetails: 'auto',
        clearable: true,
        color: 'primary',
      },
      VRadioGroup: {
        hideDetails: 'auto',
        color: 'primary',
      },
      VRadio: {
        hideDetails: 'auto',
        color: 'primary',
      },
      VCheckbox: {
        hideDetails: 'auto',
        color: 'primary',
      },
      VRow: {
        justify: 'center',
        align: 'center',
        dense: true,
      },
      VCard: {
        color: 'background',
      },
    },
    theme: {
      defaultTheme: 'defaultTheme',
      themes: {
        defaultTheme,
        darkTheme,
      },
    },
    icons: {
      defaultSet: 'custom',
      aliases,
      sets: { custom },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
