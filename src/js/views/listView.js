import { elements } from './base';

export const renderItem = item => {
    const markup = `
                <li class="shopping__item" data-itemid="${item.id}">
                    <div class="shopping__count">
                        <input type="number" value="${item.count}" min="0" step="${item.count}" class="shopping__item-value">
                        <p>${item.unit}</p>
                    </div>
                    <p class="shopping__description">${item.ingredient}</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>
`;
    elements.shoppingList.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    item.parentElement.removeChild(item);
};

export const deleteAllItems = () => {
    elements.clearList.nextElementSibling.innerHTML = '';
};

export const toggleClearAll = numItems => {
    elements.clearList.style.visibility = numItems > 0 ? 'visible' : 'hidden';
};