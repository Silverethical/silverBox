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
                bgColor: "#3085d6",
                borderColor: "#3085d6",
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
                bgColor: "#3085d6",
                borderColor: "#3085d6",
                textColor: "#fff",
                text: "YES",
                closeOnClick: true,
            },
            denyButton: {
                showButton: true,
                bgColor: "#d23",
                borderColor: "#d23",
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
            userIcon: '//cdn-icons-png.flaticon.com/128/8928/8928656.png',
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
            userIcon: '//freepngimg.com/thumb/star_wars/98619-baby-yoda-download-free-image.png',
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
            userIcon: "https://pic.onlinewebfonts.com/svg/img_568656.png",
            title: "Login Page",
            centerContent: true,
            text: "enter your account informations",
            footer: "<a>forgot your password?</a>",
            showCloseButton: true,

            confirmButton: {
                textColor: "#fff",
                text: "Confirm",
                iconRight: "../src/images/anya.png",
                iconLeft: "../src/images/anya.png",
                closeOnClick: false,
            },
            cancelButton: {
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
                    fontSize: '16px',
                },
                {
                    numberOnly: true,
                    label: "Email",
                    type: "email",
                    placeHolder: "Enter your email",
                    readOnly: false,
                    textAlign: 'left',
                    fontSize: '16px',
                },
                {
                    label: "Password",
                    type: "password",
                    placeHolder: "Enter your password",
                    hint: 'must contain 8 charactars',
                    readOnly: false,
                    inputMaxLength: 8,
                    textAlign: 'left',
                    fontSize: '16px',
                },]
        },
    },
    {
        explanation: "A code verification modal wich you can display on screen to verify the code you sent to your user. (you can multiply a single styled input many times to match the requirements for this modal)",
        config: {
            theme: "light",
            userIcon: "https://cdn-icons-png.flaticon.com/512/181/181535.png",
            text: "please check your email for the code we've sent you.",
            title: "Code verification",
            centerContent: true,
            footer: "<a>resend the code.</a>",
            showCloseButton: true,

            confirmButton: {
                bgColor: '#72b072',
                borderColor: '#72b072',
                textColor: "#000",
                text: "Verify",
                closeOnClick: false,
            },
            cancelButton: {
                bgColor: "#fff",
                borderColor: "#000",
                textColor: "#000",
                text: "Cancel",
                closeOnClick: true,
            },

            input: [
                {
                    type: "text",
                    numberOnly: true,
                    placeHolder: "0",
                    readOnly: false,
                    textAlign: 'center',
                    fontSize: '50px',
                    inputWidth: "80px",
                    inputHeight: "80px",
                    inputMaxLength: 1,
                    multiplyBy: 4,
                },
            ]
        },
    },
];


export default examples
