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

2. 2. **Credentials for the .env file**: 

CPANEL
EMAIL_USER='user@domain.com'
PASSWORD='password123
PORT=587
HOST="mail.domain.com"
EMAIL='user@domain.com'


GMAIL
MAIL_USERNAME="user@gmail.com"
MAIL_PASSWORD="password123"

to get this data from gmail you create a google cloud account and then to get the last two credentials you go to https://developers.google.com/oauthplayground
OAUTH_CLIENTID=""
OAUTH_CLIENT_SECRET=""
OAUTH_ACCESS_TOKEN=""
OAUTH_REFRESH_TOKEN="".

3. **Comments**: You uncomment the lines of code to be used in controllers/mail.js.

## If you need help you can contact me.

