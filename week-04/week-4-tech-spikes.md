# 🧱 CSS Architecture

## Questions to consider

1 - Why are CSS naming conventions useful?
2 - When might specificity become a problem?
3 - How can composition help us build UI's?

### Notes on: CSSGuidelin.es

#### General Style Advice (Basics)
- two (2) space indents, no tabs;
- 80 character wide columns;
- multi-line CSS;
- meaningful use of whitespace.
-  Split discrete chunks of code into their own files
-  Use a table of contents at the top of the file
-  Use a title for sections of code: 
    
```
/*------------------------------------*\
    #SECTION-TITLE
\*------------------------------------*/

.selector { }
```
- When multiple classes are related to each other, consider grouping them in square brackets ([ and ]), like so:

```
<div class="[ box  box--highlight ]  [ bio  bio--long ]">
```

#### Commenting (Basics)
- As a rule, you should comment anything that isn’t immediately obvious from the code alone. 

#### Naming Conventions (Basics)
- Naming conventions help your code be more transparent and informative
- It will tell you and your team:
    - What type of thing the class does
    - Where a class can be used
    - What else the class might be related to
- Use BEM naming:
```
    Block: The sole root of the component.
    Element: A component part of the Block.
    Modifier: A variant or extension of the Block.
```
- Elements are delimited with two (2) underscores (__), and Modifiers are delimited by two (2) hyphens (--).
```
.person { }
.person__head { }
.person--tall { }
```
- However, if we were to add `.person__eye {}` to `.person {}` we would not need to write `.person__head__eye {}`

```.person__eye--blue { }```

- Person is the `block`, the eye is the `element` and blue is the `modifier`

#### Javascript 

- It is unwise to bind your CSS and your JS onto the same class in your HTML. 

- Typically, these are classes that are prepended with js-, for example:

```<input type="submit" class="btn  js-btn" value="Follow" />```

#### Specificity
- Overly specific CSS cannot be undone easily
- To override a very a specific CSS style, we need an ever more specific style
- Keep specificity LOW on all selectors
- Simple changes to make:
 ```   not using IDs in your CSS;
    not nesting selectors;
    not qualifying classes;
    not chaining selectors.
```

#### ID's in CSS
- ID's are inherently non-reusable
- ID's are too specific
- Okay to use ID's in HTML and JS, just not CSS
- ID's cannot be overridden by classes

#### Object-oriented CSS (OOCSS)
1 - Break UI components into their underlying structural forms `padding`, `layout` etc
2 - Then layer cosmetic changes sepearately `colours`, `typefaces`

```/**
 * A simple, design-free button object. Extend this object with a `.btn--*` skin
 * class.
 */
.btn {
  display: inline-block;
  padding: 1em 2em;
  vertical-align: middle;
}


/**
 * Positive buttons’ skin. Extends `.btn`.
 */
.btn--positive {
  background-color: green;
  color: white;
}

/**
 * Negative buttons’ skin. Extends `.btn`.
 */
.btn--negative {
  background-color: red;
  color: white;
}
```

```<button class="btn  btn--negative">Delete</button>```

#### Composition
- Compositions are like using lego, tiny single pieces which can be combined in different ways
- UI's should be composed of much smaller, individual parts, rather than inheriting styles from much larger objects
- This keeps your code decoupled - nothing inherently relies on anything else
- Composition makes it easy to:
    - Recycle and reuse functionality
    - Rapidly construct UI's

# 📫 Responsive design

## Questions to consider

1 - What CSS units should we use for dimensions? What are absolute and relative units?
2 - When should you use a media query? Are they only for screen size?
3 - How can mobile-first CSS make responsive styling easier?

#### Units 📏
- Pixels are not a constant size across devices, a `400px` box on my screen is different to yours
- Alot of users adjust font size in their browser, pixels are not relative and do no change
- `em`, `rem`, `ch` and `ex` unis are relative
- `1 rem === 1 * root font size`
- `em` units scale `rem` units

#### Viewport units and Breakpoints
- Breakpoints dont consider the content, ie. text at 960px fills the page, but at 959px the text becomes small
- Viewport units `vw` and `vh` are relative to the browser
- Using `viewport units` and `calc()` we can create an algorithm whereby dimensions are scaled proportionately, but from a minimum value.

```
:root {
  font-size: calc(1rem + 0.5vw);
}
```

- The `1rem` part of the equation ensures the `font-size` never drops below the default (system/browser/user defined) value. That is, `1rem + 0vw` is `1rem`.

#### Mobile First
- A mobile-first approach to styling means that styles are applied first to mobile devices. 
- Advanced styles and other overrides for larger screens are then added into the stylesheet via media queries.
- Code for larger screens is usually more complicated than the codes for smaller screens. This is why coding mobile first helps simplify your code.


# 🖼 Advanced CSS

## Questions to consider

1 - What are “combinator” selectors? Can you provide examples where they’re useful?
2 - What are pseudo-elements? Can you provide examples where they’re useful?
3 - How might you create custom-styled checkboxes using both of the above?

#### CSS Selectors

[CSS Selectors MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

- `*` Universal selector - selects all elements
- `type` selector - ie. main, input, button
- `.class` selector
- `#id` selector
- `[attribute] selector

#### Grouping Selectors

- A `,` comma can be used to group selectors `span, div {}`

#### Combinators

- A space ` ` combinator selects nodes that are descendants of the first element 
- **Example:** `div span` will match all `<span>` elements that are inside a `<div>` element.

- `>` child combinator selects nodes that are direct children of the first element
- **Example:** `ul > li` will match all `<li>` elements that are nested directly inside a `<ul>` element.

- The `~` combinator selects siblings
- **Example:** `p ~ span` will match all `<span>` elements that follow a `<p>`, immediately or not.

- The `+` combinator selects adjacent siblings
- **Example:** `h2 + p` will match all `<p>` elements that directly follow an `<h2>`

#### Pseudo

- The `:` pseudo allow the selection of elements based on state information that is not contained in the document tree.
- **Example:** `a:visited` will match all `<a>` elements that have been visited by the user.

- The `::` pseudo represent entities that are not included in HTML.
- **Example:** `p::first-line` will match the first line of all `<p>` elements.