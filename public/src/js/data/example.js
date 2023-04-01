const examples = [
    {
        explanation: "show a modal with 2 inputs",
        config: {
            theme: "light",
            userIcon: "../src/images/anya.png",
            title: "AYAYA",
            centerContent: true,
            html: "<p>weebs</p>",
            footer: "<p>Abjim footer AYAYA</p>",
            showCloseButton: true,

            confirmButton: {
                bgColor: "#3085d6",
                borderColor: "#3085d6",
                textColor: "#fff",
                text: "Confirm",
                iconRight: "../src/images/anya.png",
                iconLeft: "../src/images/anya.png",
                closeOnClick: false,
            },
            cancelButton: {
                bgColor: "#fff",
                borderColor: "#000",
                textColor: "#000",
                text: "Cancel",
                iconRight: "/path/to/icon",
                iconLeft: "/path/to/icon",
                closeOnClick: true,
            },

            input: [
                {
                    label: "Name",
                    type: "text",
                    placeHolder: "Enter your name",
                    readOnly: false,
                    textAlign: 'center',
                    fontSize: '20px',
                },
                {
                    label: "Password",
                    type: "password",
                    placeHolder: "Enter your password",
                    hint: 'must contain 8 chars',
                    readOnly: false,
                    inputMaxLength: 8,
                    textAlign: 'center',
                    fontSize: '20px',
                },

            ]
        },
    },
    {
        explanation: "show a succes modal",
        config: {
            theme: "light",
            alertIcon: 'success',
            title: "AYAYA",
            centerContent: true,
            html: "<p>weebs</p>",
            showCloseButton: true

        },
    },
];


export default examples
