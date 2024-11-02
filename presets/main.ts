import Aura from "@primevue/themes/aura";
import { definePreset } from '@primevue/themes';
const preset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#ADC6FF',
  100: '#4179FC',
  200: '#185DFC',
  300: '#0348E9',
  400: '#033BC0',
  500: '#022F98',
  600: '#011E61',
  700: '#010D29',
  800: '#000000',
  900: '#000000',
  950: '#000000'
        }
    },
});
export default preset;