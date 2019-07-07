import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default function makeConfig (commandOptions) {

  const minimize = commandOptions['config-minimize']

  const plugins = [babel({
    exclude: 'node_modules/**'
  })]

  if (minimize) {
    plugins.push(uglify())
  }

  return {
    input: 'src/index.js',
    plugins,
    output: [
      {
        // umd
        file: minimize ? 'build-umd/svd-js.min.js' : 'build-umd/svd-js.js',
        format: 'umd',
        name: 'SVDJS',
        sourcemap: !minimize
      }
    ]
  }
}
