```js
const config = {
	timer: 1500,
	position: 'top-right',
	icon: "warning",
	title: "Title",
	text: "Description",
	isForm:true,
	showCancelButton: false,
	showDenyButton: true,
	showConfirmButton: false,
	confirmButtonColor: "#3085d6",
	confirmButtonText: "Yes",
	cancelButtonColor: "#d33",
	cancelButtonText: "Cancel",
	denyButtonText: "Deny",
	disableConfirmButton: true,
	inputs: [
		{
			label: "label",
			type: "text",
			placeHolder: "test",
			readOnly: true,
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
```js
const config2 = {
	// baraye button hay paein safte 
	// agar ham in array dade nashod:
	// default yes / no beshan va ye color begiran
	buttons:[
		{
		confirmButtonText : "confirm",
		confirmColor: "red",
		cancelButtonText: "cancel",
		cancelColor: "blue",
		disabledConfirmButton: true // agar in bod 
		// va key hay bala ham vared shode bodan, hazf beshan key ha
		};
	],
	// type ha: success/warning/info/danger/question
	alert: [
	{
		type: "success", // icon success + gif success bad az description
		title: "title",
		text: "description",
	};
	],
	// type ha: email/text/textarea/password/number
	// pishnahad: search/file
	inputs: [
		{
			label: "email",
			type: "email",
			placeholder: "email",
			readOnly:true; // agar ham vared nashod value default false bashe
		}
	];

};
```
