/**
 * node_modules packages should always be addded to the section
 * denoted as node modules, while other imports should be added to 
 * the section denoted as app created, this helps in organization 
 * of import statements <3 
 */

const Logo = () => {

  return (
      <p style={
        {
            marginBottom: '1em',
            color: 'black',
            fontSize: '2rem',
            fontWeight: '600',
            textAlign: 'center'
        }
    }>
        Cloud
      <span style={{ color: '#6a2a94'}}>Store</span>
    </p>
  )
}

export default Logo