# karma-mocha-power-assert-webpack-babel-test-boilerplate

use karma + mocha + power assert + webpack + babel to test modern-frontend application, component or lib.

## Usage

```bash
# checkout project
~ $ git clone git@github.com:Yuliang-Lee/karma-mocha-power-assert-webpack-babel-test-boilerplate.git test-demo

~ $ cd karma-mocha-power-assert-webpack-babel-test-boilerplate

# install dependencies
~ $ npm i

# run tests
~ $ npm run test
```

## Output

```bash
> karma-mocha-power-assert-webpack-babel-test-boilerplate@1.0.0 test $HOME/test-demo
> cross-env NODE_ENV=test karma start test/karma.conf.js --single-run

Hash: 670200bb3dca3630c209
Version: webpack 3.10.0
Time: 46ms
webpack: Compiled successfully.
webpack: Compiling...
14 01 2018 13:11:59.117:INFO [karma]: Front-end scripts not present. Compiling...
Hash: d209945c32c7aa92726f
Version: webpack 3.10.0
Time: 3133ms
   Asset    Size  Chunks                    Chunk Names
index.js  845 kB       0  [emitted]  [big]  index.js
   [0] ./src/utils.js 1.54 kB {0} [built]
   [1] ./src/HelloWorld.vue 2.02 kB {0} [built]
   [2] ./node_modules/vue/dist/vue.esm.js 288 kB {0} [built]
   [3] ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/HelloWorld.vue 2.8 kB {0} [built]
   [4] ./test/index.js 654 bytes {0} [built]
   [5] (webpack)/buildin/global.js 509 bytes {0} [built]
   [6] ./test/specs \.spec$ 192 bytes {0} [built]
   [7] ./test/specs/utils.spec.js 1.43 kB {0} [optional] [built]
   [8] ./test/specs/vue.spec.js 1.52 kB {0} [optional] [built]
   [9] ./node_modules/vue-style-loader!./node_modules/css-loader?{"minimize":false,"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-671062ce","scoped":true,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?{"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/HelloWorld.vue 1.87 kB {0} [built]
  [10] ./node_modules/css-loader?{"minimize":false,"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-671062ce","scoped":true,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?{"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/HelloWorld.vue 929 bytes {0} [built]
  [12] ./node_modules/vue-style-loader/lib/addStylesClient.js 6.05 kB {0} [built]
  [14] ./node_modules/vue-loader/lib/component-normalizer.js 2.9 kB {0} [built]
  [15] ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-671062ce","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/HelloWorld.vue 2.79 kB {0} [built]
  [16] ./src ^\.\/(?!main(\.js)?$) 225 bytes {0} [built]
    + 2 hidden modules
webpack: Compiled successfully.
14 01 2018 13:11:59.529:INFO [karma]: Karma v2.0.0 server started at http://0.0.0.0:9876/
14 01 2018 13:11:59.530:INFO [launcher]: Launching browser Chrome with unlimited concurrency
14 01 2018 13:11:59.534:INFO [launcher]: Starting browser Chrome
14 01 2018 13:12:00.461:INFO [Chrome 63.0.3239 (Mac OS X 10.13.1)]: Connected on socket m93SOq7L45mL5I4wAAAA with id 82255821
Chrome 63.0.3239 (Mac OS X 10.13.1) INFO LOG: 'Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools'

  first test
    ✓ test string reverse => true
    ✗ test string reverse => false
        AssertionError:   # test/specs/utils.spec.js:9

          assert(reverseString('abc') === 'cba1')
                 |                    |
                 "cba"                false

          --- [string] 'cba1'
          +++ [string] reverseString('abc')
          @@ -1,4 +1,3 @@
           cba
          -1

  HelloWorld.vue
    ✓ should render correct contents

Chrome 63.0.3239 (Mac OS X 10.13.1): Executed 3 of 3 (1 FAILED) (0.053 secs / 0.044 secs)
TOTAL: 1 FAILED, 2 SUCCESS


1) test string reverse => false
     first test
     AssertionError:   # test/specs/utils.spec.js:9

  assert(reverseString('abc') === 'cba1')
         |                    |
         "cba"                false

  --- [string] 'cba1'
  +++ [string] reverseString('abc')
  @@ -1,4 +1,3 @@
   cba
  -1

  # error path info

=============================== Coverage summary ===============================
Statements   : 100% ( 2/2 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 2/2 )
================================================================================
```

## License

[MIT](./LICENSE)

Copyright (c) 2018-present, xlaoyu