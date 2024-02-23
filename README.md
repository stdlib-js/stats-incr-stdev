<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrstdev

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a [corrected sample standard deviation][sample-stdev] incrementally.

<section class="intro">

The [corrected sample standard deviation][sample-stdev] is defined as

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" alt="Equation for the corrected sample standard deviation."> -->

```math
s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}
```

<!-- <div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/stdev/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for the corrected sample standard deviation.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import incrstdev from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-stdev@esm/index.mjs';
```

#### incrstdev( \[mean] )

Returns an accumulator `function` which incrementally computes a [corrected sample standard deviation][sample-stdev].

```javascript
var accumulator = incrstdev();
```

If the mean is already known, provide a `mean` argument.

```javascript
var accumulator = incrstdev( 3.0 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [corrected sample standard deviation][sample-stdev]. If not provided an input value `x`, the accumulator function returns the current [corrected sample standard deviation][sample-stdev].

```javascript
var accumulator = incrstdev();

var s = accumulator( 2.0 );
// returns 0.0

s = accumulator( 1.0 ); // => sqrt(((2-1.5)^2+(1-1.5)^2) / (2-1))
// returns ~0.7071

s = accumulator( 3.0 ); // => sqrt(((2-2)^2+(1-2)^2+(3-2)^2) / (3-1))
// returns 1.0

s = accumulator();
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import incrstdev from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-stdev@esm/index.mjs';

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrstdev();

// For each simulated datum, update the sample standard deviation...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/kurtosis`][@stdlib/stats/incr/kurtosis]</span><span class="delimiter">: </span><span class="description">compute a corrected sample excess kurtosis incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mstdev`][@stdlib/stats/incr/mstdev]</span><span class="delimiter">: </span><span class="description">compute a moving corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/skewness`][@stdlib/stats/incr/skewness]</span><span class="delimiter">: </span><span class="description">compute a corrected sample skewness incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/summary`][@stdlib/stats/incr/summary]</span><span class="delimiter">: </span><span class="description">compute a statistical summary incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/variance`][@stdlib/stats/incr/variance]</span><span class="delimiter">: </span><span class="description">compute an unbiased sample variance incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-stdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-stdev

[test-image]: https://github.com/stdlib-js/stats-incr-stdev/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-incr-stdev/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-stdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-stdev?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-stdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-stdev/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-stdev/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-stdev/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-stdev/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-stdev/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-stdev/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-stdev/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-stdev/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-stdev/main/LICENSE

[sample-stdev]: https://en.wikipedia.org/wiki/Standard_deviation

<!-- <related-links> -->

[@stdlib/stats/incr/kurtosis]: https://github.com/stdlib-js/stats-incr-kurtosis/tree/esm

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats-incr-mean/tree/esm

[@stdlib/stats/incr/mstdev]: https://github.com/stdlib-js/stats-incr-mstdev/tree/esm

[@stdlib/stats/incr/skewness]: https://github.com/stdlib-js/stats-incr-skewness/tree/esm

[@stdlib/stats/incr/summary]: https://github.com/stdlib-js/stats-incr-summary/tree/esm

[@stdlib/stats/incr/variance]: https://github.com/stdlib-js/stats-incr-variance/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
