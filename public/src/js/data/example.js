const examples = [
    {
        explanation: "A modal with a success icon and message which you can use to inform a user about their operation being successful. ",
        config: {
            theme: "light",
            alertIcon: "success",
            text: "Your task has been completed.",
            centerContent: true,

            confirmButton: {
                showButton: true,
                textColor: "#fff",
                text: "Confirm",
                closeOnClick: true,
            }

        }
    },
    {
        explanation: "A modal with an error message which you can use to inform the user about their outcome of the operation and will be lead out of the situation.",
        config: {
            theme: "light",
            alertIcon: "error",
            text: "operation failed, wish to go further ?",
            centerContent: true,

            confirmButton: {
                showButton: true,
                textColor: "#fff",
                text: "YES",
                closeOnClick: true,
            },
            denyButton: {
                showButton: true,
                textColor: "#fff",
                text: "NO, go back",
                closeOnClick: true,
            },

        }
    },
    {
        explanation: "A positioned info modal which you can use to notify the user about the outcome of their operation and you can display it anywhere you want.",
        config: {
            position: 'top-right',
            theme: "light",
            alertIcon: "info",
            text: "changes has been saved !",
            centerContent: true,
            showCloseButton: true,

            confirmButton: {
                showButton: false,
            }
        }
    },
    {
        explanation: "An auto close modal with a custom time to notify user with a custom message in a period of time.",
        config: {
            timer: 1500,
            userIcon: '/src/images/lightTimeout.png',
            theme: "light",
            title: "You are so cute",
            centerContent: true,

            confirmButton: {
                showButton: false,
            }

        }
    },
    {
        explanation: "A dark theme pop-up message. (you can also change the theme of the modal you want to light/dark) ",
        config: {
            timer: 1500,
            userIcon: '/src/images/darkTimeout.png',
            theme: "dark",
            title: "You are not cute at all.",
            centerContent: true,

            confirmButton: {
                showButton: false,
            }

        }
    },
    {
        explanation: "A simple login modal which you can use to make a login form for your users with custom input types and etc.",
        config: {
            theme: "light",
            userIcon: "/src/images/loginExample.png",
            title: "Login Page",
            centerContent: true,
            text: "enter your account information",
            footer: "<a>forgot your password?</a>",
            showCloseButton: true,

            confirmButton: {
                textColor: "#fff",
                text: "Confirm",
                closeOnClick: false,
            },
            cancelButton: {
                textColor: "#000",
                text: "Cancel",
                closeOnClick: true,
            },

            input: [
                {
                    label: "Username",
                    type: "text",
                    placeHolder: "Enter your user name",
                    textAlign: 'left',
                    fontSize: '16px',
                },
                {
                    label: "Email",
                    type: "email",
                    placeHolder: "Enter your email",
                    textAlign: 'left',
                    fontSize: '16px',
                },
                {
                    label: "Password",
                    type: "password",
                    placeHolder: "Enter your password",
                    hint: 'must contain 8 characters',
                    inputMaxLength: 8,
                    textAlign: 'left',
                    fontSize: '16px',
                },]
        },
    }
];


export default examples
