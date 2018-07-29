class FallView {
	constructor({ root, debug = false, data = {} }) {
		this.root = root;
		this.app = document.querySelector(root);
		this.elements = this.brakeElements(
			this.isolateElements(this.app.innerHTML)
		);
		this.data = data;
		this.html = this.app.innerHTML;
		debug ? this.log() : "";
		//this.elements = Array.from(this.app.children);
	}
	log() {
		console.group("app");
		console.log(this);
		console.groupCollapsed("IsolateElements2");
		console.log(this.isolateElements2(this.app.innerHTML));
		console.groupEnd();
	}
	isolateElements() {
		let tests = ["A", "B"];
		for (test in tests) {
			test = `isolateElements${test}()`;
		}
		throw new Error(`Use Isolate Element Tests: ${tests.join("\n")}`);
	}
	isolateElementsA(root) {
		return root
			.replace(new RegExp(/\n/, "g"), "!")
			.replace(new RegExp(/<|>|\s/, "g"), "")
			.split("!");
	}
	isolateElementsB(root) {
		return root
			.replace(new RegExp(/\n/, "g"), "!")
			.replace(/\t/g, "")
			.replace(/<\//g, "!")
			.replace(/>/g, "!")
			.split("!")
			.filter(type => (type != "" ? type : ""));
	}
	brakeElements(arr) {
		let out = [];
		for (let i of arr) {
			out.push(i.split("/")[0]);
		}
		return out.filter(type => (type != "" ? type : ""));
	}
	getTemplate(element) {
		let temp = `template.${element}`;
		return document.querySelector(temp).innerHTML;
	}
	replaceElement(element) {
		app.querySelector(element).outerHTML = globalComponents[element];
	}
	templatify() {
		let html = this.html;
		let params = this.data;
		let names = Object.keys(params);
		let vals = Object.values(params);
		return new Function(...names, `return \`${html}\`;`)(...vals);
	}
}
var compArr = [];
var globalComponents = {};

// console.log(elements);
// for (let element of elements) {
// 	// let element = getElement(element)
// 	globalComponents[element] = getTemplate(element).replace(
// 		new RegExp(/\s/, "g"),
// 		""
// 	);
// }
// console.log(globalComponents);

// function com() {
// 	compArr = Array.from(app.children);
// }

// var app = new FallView({
// 	root: ".app",
// 	debug: true,
// 	data: {
// 		content: "This is some content",
// 	},
// });
