# Concepts I come across often or find troubling

### JQuery

This is a small and fast feature rich JavaScript library that makes HTML and DOM traversal easy.

```javascript
$( "button.continue" ).html( "Next Step..." )
```

[Source](https://jquery.com/)


### Ajax

Stands for asynchronous JavaScript and XML. Allows browsers to fetch data in the background so that only small portions of the page refresh.

Examples include: Autocomplete, Form verification, Chat functionality, Social media, Voting and rating system.

### Variable Scope

In JavaScript ES6 they introduced block-level scoping that allows variables to be defined in the block {} they are defined in.

```javascript
function display_scopes() {
    // declare variable in local scope
    let message = "local";

    if (true) {

        // declare block-level variable
        let message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

display_scopes();
```