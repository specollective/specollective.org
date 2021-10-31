import { applyPolyfills, defineCustomElements } from 'spec-ods/loader'
import 'spec-ods'

applyPolyfills().then(() => {
  defineCustomElements(window)
})
