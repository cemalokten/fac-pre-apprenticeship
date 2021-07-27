# 🔗 Advanced DOM

## Questions to consider

1 - What is a `NodeList`? 
- - How is it different from an `Array`?
- - What’s the different between “live” and “static” `NodeList`s?-

2 - What is the `<template>` element? 
- - How can we use this to render dynamic UI?

### NodeLists

- `NodeList` objects are collections of nodes
- `NodeList` is not an Array, it can be iterated over with `forEach()`
- A `NodeList` is a collection of `DOM` nodes extracted from the HTML document
- There are two types of `NodeList`, `live` and `static`

#### Live NodeLists
- Changes to the `DOM` automatically update the collection
- `Node.childNodes` is live

#### Static NodeLists
- Changes to the `DOM` do not affect the content of the collection
- `document.querySelectorAll()` returns a static `NodeList`

- Its possible to loop over a `NodeList` with for loop:

```js
for (let i = 0; i < myNodeList.length; i++) {
  let item = myNodeList[i];
}
```

### <template> Element

- The `<template>` HTML element is a mechanism for holding HTML that is not rendered immediately
-  `<template>` elements can be used in conjunction with JS
- For example:

```html
<template id="articleTemplate">
  <article class="card">
    <img alt="" class="card__image">
    <div class="card__body">
      <h3 class="card__title"></h3>
      <p></p>
    </div>
  </article>
</template>
```
- Templates are useful when you have the same element repeated multiple times

```html
<template id="my-paragraph">
  <p>My paragraph</p>
</template>
```

```js
let template = document.getElementById('my-paragraph');
let templateContent = template.content;
document.body.appendChild(templateContent);
```

### Further Reading
[Using templates and slots - MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)