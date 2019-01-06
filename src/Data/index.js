

  const arrayMethods= [
    {
      'index': 0,
      'name': 'concat',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
      'mutator': false,
      'iterator': false
    },
    {
      'index': 1,
      'name': 'copyWithin',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
      'mutator': true,
      'iterator': false
    },
    {
      'index': 2,
      'name': 'every',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
      'mutator': null,
      'iterator': true
    },
    {
      'index': 3,
      'name': 'fill',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
      'mutator': true,
      'iterator': false
    },
    {
      'index': 4,
      'name': 'filter',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
      'mutator': null,
      'iterator': true
    },
    {
      'index': 5,
      'name': 'find',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
      'mutator': null,
      'iterator': true
    },
    {
      'index': 6,
      'name': 'findIndex',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
      'mutator': null,
      'iterator': true
    },
    {
      'index': 7,
      'name': 'forEach',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      'mutator': null,
      'iterator': true
    },
    {
      'index': 8,
      'name': 'from',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
      'mutator': null,
      'iterator': null
    },
    {
      'index': 9,
      'name': 'includes',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
      'mutator': false,
      'iterator': false
    },
    {
      'index': 10,
      'name': 'indexOf',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
      'mutator': false,
      'iterator': false
    },
    {
      'index': 11,
      'name': 'isArray',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray',
      'mutator': null,
      'iterator': false
    },
    {
      'index': 12,
      'name': 'join',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
      'mutator': false,
      'iterator': false
    },
    {
      'index': 13,
      'name': 'keys',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
      'mutator': null,
      'iterator': true
    },
    {
      'index': 14,
      'name': 'lastIndexOf',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
      'mutator': false,
      'iterator': false
    },
    {
      'index': 15,
      'name': 'of',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of',
      'mutator': null,
      'iterator': null
    },
    {
      'index': 16,
      'name': 'map',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
      'mutator': null,
      'iterator': true
    },
    {
      'index': 17,
      'name': 'pop',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
      'mutator': true,
      'iterator': false
    },
    {
      'index': 18,
      'name': 'push',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
      'mutator': true,
      'iterator': false
    },
    {
      'index': 19,
      'name': 'reduce',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
      'mutator': null,
      'iterator': true
    },
    {
      'index': 20,
      'name': 'reverse',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
      'mutator': true,
      'iterator': false
    },
    {
      'index': 21,
      'name': 'shift',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
      'mutator': true,
      'iterator': false
    },
    {
      'index': 22,
      'name': 'slice',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
      'mutator': false,
      'iterator': false
    },
    {
      'index': 23,
      'name': 'some',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
      'mutator': null,
      'iterator': true
    },
    {
      'index': 24,
      'name': 'sort',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
      'mutator': true,
      'iterator': false
    },
    {
      'index': 25,
      'name': 'splice',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
      'mutator': true,
      'iterator': false
    },
    {
      'index': 26,
      'name': 'toString',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString',
      'mutator': false,
      'iterator': false
    },
    {
      'index': 27,
      'name': 'unshift',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
      'mutator': true,
      'iterator': false
    },
    {
      'index': 28,
      'name': 'values',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values',
      'mutator': null,
      'iterator': true
    }
  ]

  const stringMethods = [
    {
      'index': 0,
      'name': 'charAt',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt',
      'answer': 'yes'
    },
    {
      'index': 1,
      'name': 'charCodeAt',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt',
      'answer': 'yes'
    },
    {
      'index': 2,
      'name': 'concat',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat',
      'answer': 'yes'
    },
    {
      'index': 3,
      'name': 'endsWith',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
      'answer': 'yes'
    },
    {
      'index': 4,
      'name': 'includes',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes',
      'answer': 'yes'
    },
    {
      'index': 5,
      'name': 'indexOf',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf',
      'answer': 'yes'
    },
    {
      'index': 6,
      'name': 'lastIndexOf',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf',
      'answer': 'yes'
    },
    {
      'index': 7,
      'name': 'padEnd',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd',
      'answer': 'yes'
    },
    {
      'index': 8,
      'name': 'padStart',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart',
      'answer': 'yes'
    },
    {
      'index': 9,
      'name': 'repeat',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat',
      'answer': 'yes'
    },
    {
      'index': 10,
      'name': 'replace',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
      'answer': 'yes'
    },
    {
      'index': 11,
      'name': 'search',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search',
      'answer': 'yes'
    },
    {
      'index': 12,
      'name': 'slice',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice',
      'answer': 'yes'
    },
    {
      'index': 13,
      'name': 'split',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
      'answer': 'yes'
    },
    {
      'index': 14,
      'name': 'startsWith',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWitht',
      'answer': 'yes'
    },
    {
      'index': 15,
      'name': 'substring',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring',
      'answer': 'yes'
    },
    {
      'index': 16,
      'name': 'toUpperCase',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase',
      'answer': 'yes'
    },
    {
      'index': 17,
      'name': 'trim',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim',
      'answer': 'yes'
    },
    {
      'index': 18,
      'name': 'trimEnd',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd',
      'answer': 'yes'
    },
    {
      'index': 19,
      'name': 'trimStart',
      'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart',
      'answer': 'yes'
    }
  ]

const objectMethods = [
  {
    'index': 0,
    'name': 'charAt',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt',
    'answer': 'yes'
  }
]

module.exports = {
  stringMethods,
  arrayMethods,
  objectMethods
}