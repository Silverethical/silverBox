```js
const config = {
	timer: 1500,
	position: 'top-right',
	icon: "warning",
	title: "Title",
	text: "text",
	html: "<h1>text</h1>",
	isForm: true,
	showCancelButton: false,
	showDenyButton: true,
	showConfirmButton: false,
	confirmButtonColor: "#3085d6",
	confirmButtonText: "Yes",
	confirmButtonIconRight: "/path/to/icon",
	cancelButtonColor: "#d33",
	cancelButtonText: "Cancel",
	denyButtonText: "Deny",
	disableConfirmButton: true,
	footer: "",
	inputs: [
		{
			label: "label",
			type: "text",
			placeHolder: "test",
			readOnly: true,
			afterHtml: "",
		},
		{
			label: "enter email",
			type: "textarea",
			placeHolder: "test2",
			readOnly: false,
		},
	],
};
```
