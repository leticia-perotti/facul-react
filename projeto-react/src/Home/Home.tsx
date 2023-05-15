
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

  return (
    <div className="home">
      <div className="card">
        <h1>Bem vindo!</h1>

        <Link to="/imc" className="link-botao">IMC</Link>
        <Link to="/sua-metade" className="link-botao">Sua Metade</Link>
      </div>
    </div>
  )
}

export default Home
