/**
 * node_modules packages should always be addded to the section
 * denoted as node modules, while other imports should be added to 
 * the section denoted as app created, this helps in organization 
 * of import statements <3 
 */

//node_modules
import React from 'react'
//import validator from 'validator'

//app created
import Logo from '../components/Logo'
import BaseForm from '../components/BaseForm'

const SignUp = () => {
  return (
    <form>
      <Logo />
      <input type='text' placeholder='Username' />
      <BaseForm buttonText='Sign Up'/>
    </form>
  )
}

export default SignUp