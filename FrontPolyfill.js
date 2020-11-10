let fs   = require( 'fs' );
let path = require( 'path' );


/**
 * Handle browser polyfilling
 * @class
 */
class FrontPolyfill {

    // List of only activate polyfill
    _neededPolyfillList;

    _polyfillResourceDir;


    /**
     * cosntructor
     *
     * @param {String} [wantedPolyfillFilename=@config/packages/frontPolyfill.json]
     */
    constructor( wantedPolyfillFilename = '@config/packages/frontPolyfill.json' ) {

        const POLYFILL_LIST         = require( './Ressources/config/polyfill.json' );
        const WANTED_POLYFILL_LIST  = require( wantedPolyfillFilename );
        this._polyfillResourceDir   = path.join( __dirname, 'Ressources/js' );

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

        this._neededPolyfillList = neededPolyfillList;
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

            this._neededPolyfillList.forEach( polyFill => {
                returnArray.push( `{"${ testTag }":${ polyFill.test },"${ nameTag }":"${ polyFill.key }"}` );
            } );

            return `[${ returnArray.join( ',' ) }]`;
        }

        return this._neededPolyfillList;
    }


    _getContent( list ) {
        let returnArray, returnString;

        returnArray = [];

        list.forEach( polyfillName => {
            let filename, polyfill;

            polyfill = this._neededPolyfillList.find( pf => pf.key === polyfillName );

            if ( !polyfill ) {
                return '';
            }

            filename = path.join( this._polyfillResourceDir, polyfill.file );

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
    getPolyfillContent = polyfill_list => {
        let list;

        if ( !polyfill_list || !polyfill_list.length ) {
            return '';
        }

        list = new Set( polyfill_list.split( '-' ) );

        return this._getContent( Array.from( list ) );
    }
}

module.exports = FrontPolyfill;
