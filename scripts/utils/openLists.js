const selectIngredientArrow = document.querySelector('.arrow-ingredient-select');


function openList(inputLength){
    if(ingredientsListWrapper.classList.contains('d-none') && inputLength >=3){
        ingredientsListWrapper.classList.remove('d-none');
        ingredientsListWrapper.classList.add('d-flex');
        document.querySelector('.select-ingredients svg').setAttribute('transform', 'rotate(180)')
    }else if(ingredientsListWrapper.classList.contains('d-flex') && inputLength <=3){
        ingredientsListWrapper.classList.remove('d-flex');
        ingredientsListWrapper.classList.add('d-none');
        document.querySelector('.select-ingredients svg').setAttribute('transform', '')
    }

}

/*
selectIngredientArrow.addEventListener('click', () => {
    let inputLenght =3;
    openList(inputLenght)
})*/