import recipes from "./recipes.mjs";

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe-box">
            <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                ${tagsTemplate(recipe.tags)}
                <h1 class="recipe-title">${recipe.name}</h1>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </div>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML

    let html = '';

    for(let tag of tags){
        html += `<span class="tag">${tag}</span>`;
    }

	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`;
// our ratings are always out of 5, so create a for loop from 1 to 5


    for(let i = 1; i <= 5; i++){
        // check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        // else output an empty star
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }


	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}



function renderRecipes(recipeList){
    const container = document.querySelector('main');
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');

    container.innerHTML = recipeHTML;
}

function init() {
    const recipe = getRandomListEntry(recipes);

    renderRecipes([recipe]);
}


function filter(query) {
	const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLocaleLowerCase().includes(query) ||
            recipe.description.toLocaleLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLocaleLowerCase().includes(query)) ||
            recipe.recipeIngredient.some(recipeIngredient => recipeIngredient.toLocaleLowerCase().includes(query))
        );
    });
	// sort by name
	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
		return sorted;

}

function searchHandler(e) {
	e.preventDefault()

    // get the search input
    const searchInput = document.querySelector('#recipe-textbox');

    // convert the value in the input to lowercase
    const query = searchInput.value.toLocaleLowerCase();
    // use the filter function to filter our recipes
    const filteredRecipes = filter(query);
    // render the filtered list
    renderRecipes(filteredRecipes);

}



init();

const searchButton = document.querySelector('#img-button');
searchButton.addEventListener('click', searchHandler);


const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));