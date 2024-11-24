# WebWay - Toolkit

**WebWay - Toolkit** — это инструмент для динамической загрузки и регистрации веб-компонентов, позволяющий легко интегрировать внешние HTML-шаблоны в ваше веб-приложение.

## Установка

1. **Клонирование репозитория**

   ```bash
   git clone https://github.com/Mansur2005703/WebWay---Toolkit.git
   ```

2. **Подключение скрипта**

   Добавьте скрипт `toolkit.js` в ваш проект:

   ```html
   <script src="path/to/toolkit.js"></script>
   ```

## Использование

### Динамическая загрузка компонентов

Используйте кастомный элемент `<toolkit-load>` для загрузки компонентов по указанному пути:

```html
<toolkit-load component="path/to/component.html"></toolkit-load>
```

- **Атрибут `component`**: указывает путь к HTML-шаблону компонента.

**Пример:**

```html
<toolkit-load component="components/header.html"></toolkit-load>
```

### Регистрация статических компонентов

Вы можете зарегистрировать компонент для повторного использования с помощью метода `regComponent`:

```javascript
Toolkit.regComponent('custom-element', 'path/to/template.html');
```

После регистрации компонент доступен как обычный HTML-элемент:

```html
<custom-element></custom-element>
```

## Примеры

### Загрузка компонента при подключении элемента

Компонент будет автоматически загружен при добавлении элемента на страницу:

```html
<toolkit-load component="components/footer.html"></toolkit-load>
```

### Динамическое обновление компонента

Вы можете изменить загружаемый компонент, обновив атрибут `component`:

```javascript
const toolkitElement = document.querySelector('toolkit-load');
toolkitElement.setAttribute('component', 'components/new-footer.html');
```

## Особенности

- **Изоляция через Shadow DOM**: компоненты инкапсулируются, предотвращая конфликты стилей.
- **Динамическая загрузка**: позволяет подгружать компоненты по мере необходимости.
- **Простая регистрация**: быстрое создание и использование новых веб-компонентов.

## Требования

- Современный браузер с поддержкой ES6 и веб-компонентов (Chrome, Firefox, Safari).

## Лицензия

Этот проект распространяется под лицензией MIT.
