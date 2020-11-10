import fs           from 'fs';
import path         from 'path';


/**
 * Handle browser polyfilling
 * @class
 */
export default class FrontPolyfill {

    // List of only activate polyfill
    #neededPolyfillList;

    #polyfillResourceDir;


    /**
     * cosntructor
     * 
     * @param {String} [wantedPolyfillFilename=@config/packages/frontPolyfill.json] 
     */
    async constructor( wantedPolyfillFilename = '@config/packages/frontPolyfill.json' ) {

        const POLYFILL_LIST         = await import( './Ressources/config/polyfill.json' );
        const WANTED_POLYFILL_LIST  = await import( wantedPolyfillFilename );
        this.#polyfillResourceDir   = path.join( __dirname, 'Ressources/js' );

        let neededPolyfillList = [];

        Object
                .keys( WANTED_POLYFILL_LIST.polyfill )
                .forEach( polyfillKey => {
                    if ( WANTED_POLYFILL_LIST.polyfill[ polyfillKey ].active ) {
                        neededPolyfillList.push( {
                            ...POLYFILL_LIST[ polyfillKey ],
                            "key": polyfillKey
                        } );
                    }
                } );

        this.#neededPolyfillList = neededPolyfillList;
    }


    /**
     *
     * @param {String} returnType
     * @param {String} nameTag
     * @param {String} testTag
     *
     * @return {String|Array}
     */
    getPolyfillList = ( returnType = 'list', nameTag = 'name', testTag = 'test' ) => {
        if ( returnType == 'js' ) {
            let returnArray = [];

            this.#neededPolyfillList.forEach( polyFill => {
                returnArray.push( `{"${ testTag }":${ polyFill.test },"${ nameTag }":"${ polyFill.key }"}` );
            } );

            return `[${ returnArray.join( ',' ) }]`;
        }

        return this.#neededPolyfillList;
    }


    #getContent( list ) {
        let returnArray, returnString;

        returnArray = [];

        list.forEach( polyfillName => {
            let filename, polyfill;

            polyfill = this.#neededPolyfillList.find( pf => pf.key === polyfillName );

            if ( !polyfill ) {
                return '';
            }

            filename = path.join( this.#polyfillResourceDir, polyfill.file );

            if ( !fs.existsSync( filename ) ) {
                return '';
            }

            returnArray.push( fs.readFileSync( filename ) );
        } );

        returnString = returnArray.join( '\n' );

        return returnString;
    }


    /**
     * Get all needed polyfill
     *
     * @param {Request} request
     *
     * @return {String}
     */
    getPolyfillContent = ( request ) => {
        let list;

        if ( !request || !request.params || !request.params.polyfill_list || !request.params.polyfill_list.length ) {
            return '';
        }

        list = new Set( request.params.polyfill_list.split( '-' ) );

        return this.#getContent( Array.from( list ) );
    }
}
