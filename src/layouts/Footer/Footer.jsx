import Logotype from '@/components/Logotype'
import Navigation from '@/components/Navigation'
import Addition from '@/components/Addition'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <Logotype color = 'light'/>
      <Navigation color = 'light'/>
      <Addition color = 'light'/>
    </footer>
  )
}

export default Footer