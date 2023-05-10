const examples = [{
    explanation: "A modal with a success icon and message which you can use to inform a user about their operation being successful. ",
    config: {

        title: {
            text: "Your task has been completed.",
            alertIcon: 'success'
        },
        centerContent: true,

        confirmButton: {
            showButton: false,
        }

    }
},
{
    explanation: "A modal with an error message which you can use to inform the user about their outcome of the operation and will be lead out of the situation.",
    config: {
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
        customIcon: 'public/src/images/lightTimeout.png',
        theme: "light",
        title: {
            text: "You are so cute"
        },
        centerContent: true,

        confirmButton: {
            showButton: false,
        }

    }
},
{
    explanation: "A dark theme pop-up message. (dark theme example) ",
    config: {
        timer: 1500,
        customIcon: 'public/src/images/darkTimeout.png',
        theme: "dark",
        title: {
            text: "You are not cute at all."
        },
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
        customIcon: "public/src/images/loginExample.png",
        title: {
            text: "Login Page"
        },
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
        input: [{
            label: "Username",
            type: "text",
            placeHolder: "Enter your user name",
            fontSize: '16px',
        },
        {
            label: "Email",
            type: "email",
            placeHolder: "Enter your email",
            fontSize: '16px',
        },
        {
            label: "Password",
            type: "password",
            placeHolder: "Enter your password",
            hint: 'must contain 8 characters',
            maxLength: 8,
            fontSize: '16px',
        },

        ]
    },
}
];


export default examples