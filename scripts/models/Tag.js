//class affichant un tag
class Tag {
	constructor(title, type, recipes_M) {
		this.recipes = recipes_M.recipes;
		const tagsWrapper = document.querySelector(".tags-wrapper");
		tagsWrapper.innerHTML += `<div class="tag-${type} me-3" data-tag="${title}">${title}<i class="fa-regular fa-circle-xmark deleteTagIngredientButton"></i></i></div>`;
		document.querySelectorAll(".deleteTagIngredientButton").forEach((item) =>
			item.addEventListener("click", (e) => {
				recipes_M.deleteItemTag(e.target, e.target.parentNode.dataset.tag);
			}),
		);
	}
}
