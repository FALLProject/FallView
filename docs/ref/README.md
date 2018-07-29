---
sidebar: auto
---
# Reference
## Options
### Root
- __Type__: `CSS Selector`
## Components
### Interpolation
- Powered By ES6 Template Literals
- Requires use of [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) prefix
``` jsx
<div id="app">
	<h1>${this.data.title}</h1>
	<p>${this.data.content}</p>
</div>

new FallView({
	root: '#app',
	data: {
		title: "This is a title",
		content: "This is some content."
	}
})
```
