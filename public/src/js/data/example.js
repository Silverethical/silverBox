const examples = [
    {
        explanation: "A succes modal",
        config: {
            theme: "light",
            alertIcon: "success",
            text: "Your thing has been completed",
            centerContent: true,

            confirmButton: {
                bgColor: "#3085d6",
                borderColor: "#3085d6",
                textColor: "#fff",
                text: "Confirm",
                closeOnClick: true,
            }

        }
    },
    {
        explanation: "An error modal",
        config: {
            theme: "light",
            alertIcon: "error",
            text: "operation failed, wish to go further ?",
            centerContent: true,

            confirmButton: {
                bgColor: "#3085d6",
                borderColor: "#3085d6",
                textColor: "#fff",
                text: "Confirm",
                closeOnClick: true,
            },
            denyButton: {
                bgColor: "#d23",
                borderColor: "#d23",
                textColor: "#fff",
                text: "Deny",
                closeOnClick: true,
            },

        }
    },
    {
        explanation: "A positioned info modal",
        config: {
            position: 'top-right',
            theme: "light",
            alertIcon: "info",
            text: "changes has been saved !",
            centerContent: true

        }
    },
    {
        explanation: "An auto close modal",
        config: {
            timer: 1500,
            position: "top-center",
            theme: "light",
            text: "this message will be deleted after 1.5s",
            centerContent: true,

        }
    },
    {
        explanation: "A login page modal",
        config: {
            theme: "light",
            userIcon: "https://pic.onlinewebfonts.com/svg/img_568656.png",
            title: "Login Page",
            centerContent: true,
            text: "enter your account informations",
            footer: "<a>forgot your password?</a>",
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
                    label: "User Name",
                    type: "text",
                    placeHolder: "Enter your user name",
                    readOnly: false,
                    textAlign: 'left',
                    fontSize: '20px',
                },
                {
                    label: "Email",
                    type: "email",
                    placeHolder: "Enter your email",
                    readOnly: false,
                    textAlign: 'left',
                    fontSize: '20px',
                },
                {
                    label: "Password",
                    type: "password",
                    placeHolder: "Enter your password",
                    hint: 'must contain 8 charactars',
                    readOnly: false,
                    inputMaxLength: 8,
                    textAlign: 'left',
                    fontSize: '20px',
                },]
        },
    },
];


export default examples
