/* https://github.com/tc39/proposal-object-values-entries */
(function(){var reduce = Function.bind.call(Function.call, Array.prototype.reduce);var isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);var concat = Function.bind.call(Function.call, Array.prototype.concat);var keys = Reflect.ownKeys;if (!Object.entries) {Object.entries = function entries(O) {return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []), []);};}}());