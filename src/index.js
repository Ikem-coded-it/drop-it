import './style.css';

class Dropdown {

    create(container) {
        container.classList.add('drop-down');

        const button = container.childNodes[0];
        button.classList.add('drop-down-button');

        const content = container.childNodes[1];
        content.classList.add('drop-down-content');

        this.listener(button, content);
    }

    listener(button, content) {
        button.addEventListener('click', () => {
            content.classList.toggle('show');
        })

        return
    }
}

// function initializeTest() {
//     const body = document.getElementsByTagName('body')[0]
//     const container = document.createElement('div');
//     container.innerHTML = `<button>Menu</button><div><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></div>`;
//     body.appendChild(container)
//     const dropDown = new Dropdown()
//     dropDown.create(container);
// }

// initializeTest()
export { Dropdown }