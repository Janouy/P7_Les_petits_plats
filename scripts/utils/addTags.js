const tagsWrapper = document.querySelector('.tags-wrapper');

function addTag(tag){
    tagsWrapper.innerHTML += `<div class="me-3">${tag}</div>`
}
