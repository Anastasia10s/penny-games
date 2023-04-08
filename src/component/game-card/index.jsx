import { Link } from 'react-router-dom'
import './styles.css'

export const GameCard = (props) => {
return (
    <div className="game-card">
        This is the game card
        <div>
        <Link to={props.location}>{props.title}</Link>
        </div>

    </div>
)

}

export default GameCard