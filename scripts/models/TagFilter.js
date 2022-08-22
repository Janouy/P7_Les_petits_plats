//class affichant la liste des tags selon le type de tag (ingredients, ustensil, appareils)
class TagFilter {
	constructor(items, title, style, titleFr, recipe_M) {
		this.items = items;
		this.title = title;
		this.style = style;
		this.titleFr = titleFr;
		this.ingredientsTag = [];
		this.isItemsShown = false;
		const tagfilter = this;
		this.newTag = "";
		document.getElementById(`search-input-${tagfilter.title}`).addEventListener("input", (e) => {
			if (e.target.value.length >= 1) {
				tagfilter.isItemsShown = true;
				tagfilter.updateArrow(tagfilter.isItemsShown);
				tagfilter.applyFilter(e.target.value, recipe_M);
			} else {
				tagfilter.isItemsShown = false;
			}
		});
		document.querySelector(`.arrow-${tagfilter.title}-select`).addEventListener("click", () => {
			document.querySelectorAll(".arrow").forEach((arrow) => {
				if (!arrow.classList.contains(`arrow-${tagfilter.title}-select`)) {
					arrow.setAttribute("transform", "");
				}
			});
			document.querySelector(".items-list").setAttribute("style", `${this.style}`);
			tagfilter.isItemsShown = !tagfilter.isItemsShown;
			tagfilter.updateArrow(tagfilter.isItemsShown);
			tagfilter.showItems(tagfilter.isItemsShown, tagfilter.items, recipe_M);
		});
	}
	//affiche la liste des tags
	showItems(boolean, data, recipe_M) {
		const itemsListWrapper = document.querySelector(".items-list");
		if (boolean) {
			itemsListWrapper.innerHTML = data.reduce((totalItem, nextItem) => totalItem.concat(`<div data-name="${nextItem}" class="item mx-3">${nextItem}</div>`), "");
			document.querySelectorAll(".item").forEach((item) =>
				item.addEventListener("click", () => {
					recipe_M.addTag(item.dataset.name, this.title);
					document.getElementById(`search-input-${this.title}`).value = "";
					document.getElementById(`search-input-${this.title}`).placeholder = this.titleFr;
					this.updateArrow(false);
				}),
			);
		} else {
			itemsListWrapper.innerHTML = "";
		}
	}
	//modifie la flèche selon que la liste soit ouverte ou femrée
	updateArrow(boolean) {
		const tagfilter = this;
		const itemsListWrapper = document.querySelector(".items-list");
		if (boolean) {
			itemsListWrapper.setAttribute("style", `${this.style}`);
			itemsListWrapper.classList.remove("d-none");
			itemsListWrapper.classList.add("d-flex");
			document.querySelector(`.arrow-${tagfilter.title}-select`).setAttribute("transform", "rotate(180)");
		} else {
			itemsListWrapper.classList.remove("d-flex");
			itemsListWrapper.classList.add("d-none");
			document.querySelector(`.arrow-${tagfilter.title}-select`).setAttribute("transform", "");
			document.getElementById(`search-input-${tagfilter.title}`).placeholder = "";
			document.getElementById(`search-input-${tagfilter.title}`).placeholder = tagfilter.titleFr;
		}
	}
	//filtre la liste des tags selon les recettes affcihées
	applyFilter(value, recipe_M) {
		if (value.length >= 3) {
			this.showItems(
				true,
				this.items.filter((item) => item.toLowerCase().includes(value.toLowerCase())),
				recipe_M,
			);
		} else if (value.length < 3) {
			this.showItems(true, this.items, recipe_M);
		}
	}
}
