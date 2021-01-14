import { createContext } from 'react'

type ContextProps = {
  [props:string]:any;
  "txt": {
    "leftMenu": {
      "label": {
        "payments": string,
        "statements": string,
        "dashboard": string
      }
    };
    "header":{
      "logout": string
    };
    "pages": {
      "auth": {
        "titleLogin": string,
        "titleRegister": string,
        "email": string,
        "password": string,
        "loginButton": string,
        "registerButton": string,
        "loginQuestion": string,
        "loginLink": string,
        "registerLink": string,
        "googleButton": string,
        "checkPasswords": string,
        "firstName": string,
        "lastName": string,
        "confirmPassword": string,
        "registerQuestion": string
      },
      "dashboard": {
        "header": string,
        "title": string
      },
      "statements": {
        "header": string,
        "title": string,
        "iconTextExplain": {
          "statementBalance": string,
          "billingPeriod": string,
          "dueDate": string
        }
        "mainState": {
          "hideDetails": "Hide Details"
        },
        "statementsDetails": {
          "title": string
        },
        "statementItem": {
          "period": string,
          "balance": string,
          "remaining": string,
          "status": string,
          "paidOn": string
        }
      },
      "payments": {
        "header": string,
        "title": string,
        "cardContainer": {
          "button": string,
          "buttonBack": string,
          "pay": string,
          "done": string
        },
        "amount": {
          "amount": string
        },
        "paymentsDetailsHeader": string
      }
    };
  };
};

const TextContext = createContext<Partial<ContextProps>>({})

export default TextContext
