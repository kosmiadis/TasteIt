const recipesContainer = document.querySelector('.recipes-container')
const search = document.querySelector('input')

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

const searchInput = {
    addEventListener: function () {
        search.addEventListener('keydown', e => {
            if (e.key == 'Enter') {
                recipes.fetchRecipes(search.value)
        
            }
        })
    }
}

window.addEventListener('load', e => {
    searchInput.addEventListener()
})
function chickenCarouselRecipes() {
    recipes.fetchRecipes("chicken")
}

function displaySearchRecipes(r) {
    recipesContainer.innerHTML = ''
    for (const recipe of r) {
        let ing = recipe.ingredients
        let finalIngredients = proccessedIngredients(ing)
        
        recipesContainer.insertAdjacentHTML('afterbegin', 
        `
            <div class='recipe'>
                <p class='recipe-title'>${recipe.title}</p>
                <div class='ingredients'>
                    <p class='title'>Ingredients</p>
                    <p>
                        ${finalIngredients}
                    </p>
                </div>

                <div class='instructions'>
                    <p class="title">Instructions</p>
                    <p>${recipe.instructions}</p> 
                </div>
            </div>

        
        `)
    }
}

function proccessedIngredients(ingredients) {
    let curr = ingredients
    let flag = /tb/g
    
    return curr.replace(flag, "tablespoon").replace(/c/g, "cups").replace(/tbs/g, 'tablespoons')
    .replace(/md/g, "medium").replace(/cn/g, "can").replace(/c/g, 'cup').replace(/;/g, "").replace(/===/g, '')
    .replace(/\|/g, "<br>")
}
