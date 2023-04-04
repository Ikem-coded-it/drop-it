import './style.css';

export default class Dropdown {

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