# E-MAIL SERVICE
***
## Description
A simple and flexible Node.js service for sending messages, forms, and notifications to email addresses.  
Supports **Gmail** and **cPanel mail servers** via **Nodemailer**.

---

## Table of Contents
1. [General Information](#general-information)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Environment Configuration](#environment-configuration)
5. [Usage Notes](#usage-notes)
6. [Collaboration](#collaboration)
7. [FAQs](#faqs)
8. [Contact](#contact)

---

## General Information
This project provides an email-sending service using **Nodemailer**.  
It allows integration with various email providers (e.g., Gmail, cPanel) through environment variables and OAuth2 credentials.  
You can easily integrate it with forms or backend systems that require email notifications.

---

## Technologies
Technologies used in this project:
- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com)
- [Nodemailer](https://nodemailer.com)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [morgan](https://www.npmjs.com/package/morgan)

---

## Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Giozar/nodemailer.git
cd nodemailer
pnpm install
pnpm run dev
```

Tip: To run the project in a specific environment, configure your `.env` file as described below.

---

## Environment Configuration

1. **Create a `.env` file** in the root of your project.  
   Depending on the email provider, use the following credentials:

### cPanel Email Configuration
```bash
EMAIL_USER=user@domain.com
EMAIL_PASSWORD=password123
EMAIL_PORT=587
EMAIL_HOST=mail.domain.com
EMAIL=user@domain.com
```

### Gmail Configuration
```bash
GMAIL_USERNAME=user@gmail.com
GMAIL_PASSWORD=password123
```

To use OAuth2 with Gmail:
- Go to the **Google Cloud Console** → **APIs & Services** → enable **Gmail API**.
- Create OAuth credentials (Client ID and Client Secret).

Then add:
```bash
OAUTH_CLIENTID=your_client_id
OAUTH_CLIENT_SECRET=your_client_secret
OAUTH_ACCESS_TOKEN=your_access_token
OAUTH_REFRESH_TOKEN=your_refresh_token
```

You can generate the last two tokens using [Google OAuth Playground](https://developers.google.com/oauthplayground).

---

## Usage Notes
- Uncomment and configure the required code lines in `controllers/mail.controller.js` depending on your chosen provider.  
- Make sure your `.env` file matches the configuration for that provider.  
- Restart your development server after editing `.env`.

---

## Collaboration
Developed and maintained by **Giozar**.  
Contributions and feedback are welcome!  

---

## Contact
If you need help or want to collaborate, feel free to contact me:  
**Author:** [Giozar](https://github.com/Giozar)