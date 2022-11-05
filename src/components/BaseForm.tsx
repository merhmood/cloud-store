/**
 * node_modules packages should always be addded to the section
 * denoted as node modules, while other imports should be added to 
 * the section denoted as app created, this helps in organization 
 * of import statements <3 
 */


type Props = {
  buttonText:string
}

const BaseForm = (props:Props) => {
  return (
    <>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
        {
          props
            .buttonText
            .toLowerCase() === 'sign up' 
            && <p 
              className='signup-text'
              // style should reflect,` 
              // the state of the user validation
              style={{}}
            >
              password should 
              contain uppercase, 
              digit, and special character
            </p>
        }
        <input type='checkbox' id='showpassword'/>
        <label htmlFor='showpassword'>Show password</label>
        <button>{props.buttonText}</button>
    </>
  )
}

export default BaseForm