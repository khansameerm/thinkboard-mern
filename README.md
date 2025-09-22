<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">

<h1 align="center">📝 Thinkboard</h1>
<p align="center">
  A modern MERN-based Notes App with <b>Rate Limiting</b> to keep things safe & fast 🚀
</p>

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzlydG51NGRsempnZDN3MzdzejF3czloMHRiMnA3bXcwdGs0MmsxYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d3mlE7uhX8KFgEmY/giphy.gif" width="70%" alt="Thinking Banner"/>
</p>

<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">

## ✨ Features

- ➕ Create a new note  
- 🗑️ Delete an existing note  
- 📑 View all notes in one place  
- 🔍 View an individual note in detail  
- ⏳ **Rate Limiting** to prevent spam & abuse  

<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">

## ⚡ Tech Stack

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Extras**: Rate Limiting with `express-rate-limit`  

<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">

## ⏳ Rate Limiting

Thinkboard adds a **security layer** using rate limiting.  

- Each user can only make **100 requests per 15 minutes**.  
- If the limit is exceeded, they’ll see an error response instead of overloading the server.  
- This keeps the app stable and prevents spam or abuse.  
