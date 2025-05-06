import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/calculadora">Calculadora</Link>
                </li>
                <li>
                    <Link to="/massa">Massa</Link>
                </li>
                <li>
                    <Link to="/compras">Compras</Link>
                </li>
            </ul>
        </div>
    );
}
