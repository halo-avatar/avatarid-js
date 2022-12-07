import resolve from 'rollup-plugin-node-resolve'; 
import commonjs from 'rollup-plugin-commonjs'; 
import babel from "rollup-plugin-babel"; 

export default {

  input: './lib/main.js', 
  output:{
    name: 'avatarid-js-sdk',  
    file: './bin/main.js',
    format: 'umd' 
  },
  plugins: [  
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    // eslint({ 
    //   throwOnError: true,
    //   include: ['src/**'],
    //   exclude: ['node_modules/**']
    // })
  ],
  ignore: [
    "node_modules/**" 
  ]
  
}