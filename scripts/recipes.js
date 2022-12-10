const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b7197f7a5msh77b06ed09b7fe0cp156c3bjsn6470e99d7eda',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};


const recipes = {
    fetchRecipes: function(search) {
        fetch(`https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${search}`, options)
        .then(data => data.json())
        .then(recipes => displaySearchRecipes(recipes))
    }
}

recipes.fetchRecipes("bean soup")

function displaySearchRecipes(r) {
    for (const recipe of r) {
        
    }
}
function chickenCarouselRecipes() {
    recipes.fetchRecipes("chicken")

}
