import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

export const useVuetify = () => {
    return createVuetify({ components, directives })
}