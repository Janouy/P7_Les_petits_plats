//récupération des datas de recettes
async function getRecipes() {
	fetch("../../data/recipes.json")
		.then((response) => response.json())
		.then((datas) => {
			const pageManager = new Page_M(datas);
			return pageManager;
		})
		.catch((err) => console.log("==== error ====", err));
}

getRecipes();
