/* 
  create the Homepage component and return it
*/

/*   HOMEPAGE COMPONENT
  Let's use pokeAPI to fetch Pokemon and display them on the page.

    We'll need to track the ID of the pokemon we're fetching, as well as its data.
        create a state variable to track the pokemonId that we want to fetch
        create a state variable to hold the pokemon data
        create a controlled input that displays and updates the pokemonId

    We'll want to make sure that the pokemon data is updated whenever the ID changes.
        create a function that will update the pokemonId state variable safely
            we only want to fetch if there is an ID present in the input
        create a useEffect hook that will call the fetchPokemon function when the pokemonId state variable changes

    We'll also want to create a pokemon "card" that displays the pokemon data we want to see.
        create a <h1> to display the pokemon's name at the top
        create an <img> tag to display the pokemon's image in the middle
        create 3 UL elements that list pokemon Types / Abilities / Stats at the bottom

    bonus:
        create a button that will allow the user to fetch a random pokemon
        refactor the pokemon search to be its own component.
          refactor search to allow for a search by name or by ID.
        refactor the pokemon card to be its own component.
*/

const HomepageContainer = () => {
  return (
    <div>HOMEPAGE</div>
  );
}

export default HomepageContainer;