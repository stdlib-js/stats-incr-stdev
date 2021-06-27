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

# incrstdev

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute a [corrected sample standard deviation][sample-stdev] incrementally.

<section class="intro">

The [corrected sample standard deviation][sample-stdev] is defined as

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" alt="Equation for the corrected sample standard deviation."> -->

<div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/27e2a43c70db648bb5bbc3fd0cdee050c25adc0b/lib/node_modules/@stdlib/stats/incr/stdev/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for the corrected sample standard deviation.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-stdev
```

</section>

<section class="usage">

## Usage

```javascript
var incrstdev = require( '@stdlib/stats-incr-stdev' );
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

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrstdev = require( '@stdlib/stats-incr-stdev' );

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
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-stdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-stdev

[test-image]: https://github.com/stdlib-js/stats-incr-stdev/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-stdev/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-stdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-stdev?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-stdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-stdev/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-stdev/main/LICENSE

[sample-stdev]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
