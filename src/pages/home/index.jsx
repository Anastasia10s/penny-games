import GameCard from '../../component/game-card'
import './styles.css'


const Home = () => {
  return(
    <div className='mainDiv'>
        <main className="main-content">
            <div className="game--selection" id="classic_games">
                <GameCard title="Tic Tac Toe" location="/tic-tac-toe" description="Connect Three"/>
                <GameCard title="Connect Four" location="/connect-four" description="Connect Four"/>
                <GameCard title="Matching Game" location="/matching-memory" description="Match Me"/>
            </div>
            <div className="game--selection" id="trending_games">
                <GameCard title="Tetris" location="/tetris" description="Make them disappear"/>
                <GameCard title="Settlers of Catan" location="/catan" description="Catan"/>
                <GameCard title="Uno" location="/uno" description="Uno"/>
            </div>
        </main>
        
        </div>
    )
}

export default Home