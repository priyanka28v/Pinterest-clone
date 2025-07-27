import{Link} from 'react-router-dom';
export function Footer(props){
return(
  <>
  <h6 className={props.className}>By continuing,you agree to Pinterest's <Link to='/Terms of service'>Terms of Service</Link> and acknowledge you 've read our <Link to='/Privacy Policy'>Privacy policy</Link>.<span>Notice at collection</span>  </h6>
  </>
 
)
}