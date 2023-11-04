import { objectify } from 'postcss-js';
import tailwindNesting from '@tailwindcss/nesting'

export default {
  plugins: [
    tailwindNesting,
  ],
  stringifier: function (root, builder) {
    builder(`export default ${JSON.stringify(objectify(root))}`)
  }
}
