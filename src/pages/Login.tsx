/**
 * node_modules packages should always be addded to the section
 * denoted as node modules, while other imports should be added to
 * the section denoted as app created, this helps in organization
 * of import statements <3
 */


//app created
import Logo from '../components/Logo'
import BaseForm from '../components/BaseForm'

const Login = () => {
  return (
    <form>
      <Logo />
      <BaseForm buttonText='Log In'/>
    </form>
  )
}

export default Login