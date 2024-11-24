class Toolkit extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['component'];
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'component' && oldValue !== newValue) {
            await this.#loadComponent(newValue);
        }
    }

    async #loadComponent(url) {
        try {
            const template = await this.#loadComponentTemplate(url);
            this.shadow.innerHTML = ''; // Очищаем содержимое Shadow DOM
            this.shadow.appendChild(template.content.cloneNode(true));
        } catch (error) {
        }
    }

    async #loadComponentTemplate(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Не удалось загрузить шаблон компонента по адресу: ${url}`);
        }

        const html = await response.text();
        const template = document.createElement('template');
        template.innerHTML = html;

        return template;
    }

    static async regComponent(componentName, templateUrl) {
        const template = await Toolkit.#loadStaticComponentTemplate(templateUrl);

        class CustomComponent extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: 'open' });
                const content = template.content.cloneNode(true);
                shadow.appendChild(content);
            }
        }

        customElements.define(componentName, CustomComponent);
    }

    static async #loadStaticComponentTemplate(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Не удалось загрузить шаблон компонента по адресу: ${url}`);
        }

        const html = await response.text();
        const template = document.createElement('template');
        template.innerHTML = html;

        return template;
    }
}

// Регистрируем <toolkit-load> как кастомный элемент
customElements.define('toolkit-load', Toolkit);
