# E-MAIL SERVICE
***
## Description
service for sending messages, forms, etc. to e-mail addresses

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [FAQs](#faqs)
### General Info
***

## Technologies
***
A list of technologies used within the project:
* [NODEJS]
* [EXPRESS]
* [NODEMAILER]
* [dotenv]
* [morgan]

## Installation
***
A little intro about the installation. 
```
$ git clone https://github.com/Giozar/nodemailer.git
$ pnpm install
$ pnpm run dev
```
Side information: To use the application in a special environment use ```lorem ipsum``` to start
## Collaboration
***
- Giozar

1. **.env file**: Create an .env file in your project's root and depending on what services you are going to use, enter the necessary credentials.

2. **Credentials for the .env file**: 

###### CPANEL Email environment variables <br>
EMAIL_USER='user@domain.com' <br>
EMAIL_PASSWORD='password123 <br>
EMAIL_PORT=587 <br>
EMAIL_HOST="mail.domain.com" <br>
EMAIL='user@domain.com' <br>


###### GMAIL environment variables <br>
GMAIL_USERNAME="user@gmail.com" <br>
GMAIL_PASSWORD="password123" <br>

to get this data from gmail you create a google cloud account and then to get the last two credentials you go to https://developers.google.com/oauthplayground <br> \ \

OAUTH_CLIENTID="" <br>
OAUTH_CLIENT_SECRET="" <br>
OAUTH_ACCESS_TOKEN="" <br>
OAUTH_REFRESH_TOKEN="" <br>

3. **Comments**: You uncomment the lines of code to be used in controllers/mail.js.

## If you need help you can contact me.

