import monsters from '../data/monsters.json';

function MainContent()
{
    return(
        <main>
            {
                monsters.map(

                    (monster) => (
                        <div key={monster.name}>
                            <h2>{monster.name}</h2>
                            <p>{monster.description}</p>
                            <p><strong>Movies: </strong>{monster.movies.join(', ')}</p>
                        </div>
                    )
                )
            }
        </main>
    );
}

export default MainContent;