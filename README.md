# Front polyfill bundle by CWS


## Use ES6+ syntax

* let, const
* class
* Set
* Template literals string

## Polyfill list

A sample of the configuration file can be found here: `Ressources/frontPolyfill-settings.sample.json`.

**List**

* Array.findIndex()
* Array.fill()
* Array.find()
* Array.from()
* Array.includes()
* Array.of()
* new Blob()
* Element.classList
* Element.closest()
* Element.append
* Element.nextElementSibling
* NodeList.forEach()
* Element.matches()
* window.matchMedia()
* Object.assign()
* Object.entries()
* Object.values()
* HTMLPictureElement
* requestAnimationFrame()
* requestIdleCallback()
* Promise
* Promise.finally
* fetch()
* URLSearchParams
* AbortController
* IntersectionObserver
* IntersectionObserverEntry.isIntersecting


## Configuration

**Polyfill tests**

Create a configuration based on `Ressources/frontPolyfill-settings.sample.json` somewhere in your project and set to true the `active` property of all the polyfill you want to be tested in the browser.

**Twig extensions**

Add `get_front_polyfill_list` and `get_front_polyfill_content` extentions to Twig:

```js
// path/to/frontPolyfill.json is created form Ressources/frontPolyfill-settings.sample.json
const frontPolyfill = new FrontPolyfill( 'path/to/frontPolyfill.json' );

Twig.extendFunction( 'get_front_polyfill_list',    frontPolyfill.getPolyfillList );
Twig.extendFunction( 'get_front_polyfill_content', frontPolyfill.getPolyfillContent );
```

**Route**

Add a route to handle the call.

**/!\\** The route MUST CONTAINS the `:polyfill_list` param.

```js
app.get(
    '/path/to/config-:polyfill_list.js',
    function( request, response, next ) {
        response.render( 'my_template_file.html.twig', {
            "polyfill_list": request.params.polyfill_list
        } );
    }
);
```


**Twig template**

Insert the polyfills in the response:

```html
{{ get_front_polyfill_content( polyfill_list ) }}
// Other JS stuff...
```


## Javascript support tests

Get the active polyfill list:

**With an object list**

```html
{% set polyfillList = get_front_polyfill_list() %}

<script>
var myPolyfillArray = [
{%- for name, polyfill in polyfillList.list -%}
    {
        "test": {{ polyfill.test|raw }},
        "name": "{{ name|raw }}"
    }{{ loop.last ? '' : ',' }}
{%- endfor -%}
];
</script>
```

**With a JS array-like string**

```js
var myPolyfillArray = {{ get_front_polyfill_list('js') }};
```

This will give :

```js
var myPolyfillArray = [
    {
        "test": test1,
        "name": "test1"
    },{
        "test": test2,
        "name": "test2"
    },
    ...
];
```

You can change the name of the properties:

```js
var myPolyfillArray = {{ get_front_polyfill_list('js', 'a', 'b') }};
```

Results in :

```js
var myPolyfillArray = [{
        "b": test1,
        "a": "test1"
    },{
        "b": test2,
        "a": "test2"
    },
    ...
];
```


Here a full example to create an url like 'js/polyfill-pf1-pf2-pf3.js':

```php
{% set polyfillArrayString = get_front_polyfill_list('js') %}

<script>
    let polyfillContentUrl;

    {%- if polyfillArrayString is defined and polyfillArrayString|length > 2 -%}
        let neededPolyfill = [];

        {{ polyfillArrayString }}
            .forEach( function( polyfill ) {
                if (typeof polyfill.test === 'function' && polyfill.test() ||
                    typeof polyfill.test !== 'function' && polyfill.test) {
                    neededPolyfill.push( polyfill.name );
                }
            });

        if ( neededPolyfill.length ) {
            polyfillContentUrl = `js/polyfill-${ neededPolyfill.join( '-' ) }.js`;
        }
    {%- endif -%}

    [
        polyfillContentUrl,
        'other-file.js',
        'some-lib.js'
    ].forEach( function( src ) {
        if ( !src ) {
            return;
        }
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    } );
</script>
```


## Polyfill loading

Use the array of test to create an url to load the polyfill content.

There is 2 ways to load the polyfills:


The polyfill names are contained in the filename itself and separated by `-`

This is the **recommended way** to do it because this way allow you **to create a real file**. Handy as if the file exists, **it will not be rerendered**.

```
<script src="js/polyfill-domch-eachnl-picture.js"></script>
```

Inside the Twig file that render the response for `polyfill-domch-eachnl-picture.js` (and save the file if you want):

```
{{ get_front_polyfill_content( polyfill_list ) }}

// Other stuff in JS
```

If your router is correctly setup, you should be able to access `request.params.polyfill_list` which contains all the polyfill to load and will be used by `get_front_polyfill_content`.

The route to this file **MUST** contains a placeholder. By default its name is `polyfill_list`. So, in our example `/js/polyfill-domch-eachnl-picture.js`, the route must be `/js/polyfill-{polyfill_list}.js`


**When there is a clear cache action, it is recommended to delete those generated files as well.**
