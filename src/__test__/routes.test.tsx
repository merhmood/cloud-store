/**
 * node_modules packages should always be addded to the section
 * denoted as node modules, while other imports should be added to
 * the section denoted as app created, this helps in organization
 * of import statements <3
 */

//node_modules
import React from 'react';

//app created
import routes from '../pages/routes'

it('Checks routes length', ()=>{
    const appsRoutesLength = 3
    expect(routes).toHaveLength(appsRoutesLength)
})