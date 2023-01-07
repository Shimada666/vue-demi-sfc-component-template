import TemplateSFC from './TemplateComponent.vue'

const TemplateComponent = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(app: any, options: any) {
    app.component('TemplateComponent', TemplateSFC)
  },
}

export default TemplateComponent
