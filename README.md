<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/app.py`

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

</details>

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```

# 🚀 OpenAI Chat App - Unified Edition

**The most beautiful, simple-to-deploy OpenAI chat interface you've ever seen!** ✨

This is a unified Next.js application that combines a gorgeous Notion-inspired frontend with built-in API routes, making deployment and usage incredibly simple.

## 🎯 What Makes This Special

- 🎨 **Notion-Inspired Design**: Clean, minimal interface that's a joy to use
- 🚀 **One-Click Deployment**: Deploy to Vercel in seconds  
- 🔄 **Real-time Streaming**: Watch responses flow in real-time
- 🏗️ **Unified Architecture**: Frontend + Backend in one Next.js app
- 🔧 **Auto API Detection**: No manual configuration needed
- 🧪 **Still Testable**: Components can be tested separately
- 📱 **Responsive**: Beautiful on desktop and mobile

## ⚡ Quick Start (Recommended)

**The easiest way to get started:**

```bash
./start.sh
```

Choose option 1 (Unified App) and you're done! 🎉

## 🏃‍♂️ Manual Setup

If you prefer manual setup:

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 and start chatting!

## 📁 Project Structure

```
├── frontend/              # Next.js app with everything
│   ├── pages/
│   │   ├── api/          # Built-in API routes (replaces FastAPI)
│   │   │   ├── chat.ts   # Streaming chat endpoint
│   │   │   ├── health.ts # Health check
│   │   │   └── index.ts  # Welcome message
│   │   ├── index.tsx     # Main chat interface
│   │   └── _app.tsx      # App wrapper
│   ├── components/       # React components
│   └── styles/          # Notion-inspired styles
├── api/                 # Legacy FastAPI backend (for testing)
├── start.sh            # Unified startup script
└── README.md           # This file
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Set root directory to `frontend/`**
4. **Deploy!** ✨

Your app will be live with both frontend and API working automatically.

### Option 2: Other Platforms

The unified app works on any platform that supports Next.js:
- Railway
- Render  
- Netlify
- Heroku

## 🎛️ Usage

1. **Visit your deployed app** (or http://localhost:3000 locally)
2. **Enter your OpenAI API key** in the interface
3. **Select your preferred model** (GPT-4.1, GPT-4.1 Mini, GPT-4.1 Nano)
4. **Start chatting!** 💬

### Advanced Settings

Click "Advanced Settings" to:
- Use a custom API endpoint (if you have your own backend)
- Configure different base URLs for testing

## 🧪 Testing Separately

Want to test components separately? You still can!

### Test Frontend Only:
```bash
cd frontend
npm run dev
```

### Test Legacy FastAPI Backend:
```bash
./start.sh
# Choose option 3 (Backend Only)
```

### Test Both Separately:
```bash
./start.sh  
# Choose option 2 (Separate Services)
```

## ✨ Features

- **🎨 Beautiful UI**: Notion-inspired design with perfect typography
- **🔄 Streaming Responses**: Real-time AI responses  
- **🏥 Health Monitoring**: Built-in API health checks
- **🔒 Secure**: Password-masked API key input
- **📱 Responsive**: Works on all devices
- **⚡ Fast**: Optimized for performance
- **🎯 Simple**: Just enter your API key and go!

## 🔧 How It Works

### Unified Architecture

Instead of separate FastAPI + Next.js apps, everything runs as one Next.js application:

- **Frontend**: React components with Notion-inspired styling
- **Backend**: Next.js API routes that handle OpenAI requests
- **Deployment**: Single app that deploys to Vercel seamlessly

### Auto API Detection

The app automatically detects its API endpoints:
- **Local**: `http://localhost:3000/api`  
- **Production**: `https://your-app.vercel.app/api`

No manual configuration needed!

## 🎉 Migration from Separate Apps

If you were using the separate FastAPI + Next.js setup:

1. **Everything still works** - the legacy setup is preserved
2. **Try the unified app** with `./start.sh` → option 1
3. **Deploy the unified version** for simpler management

## 🛠️ Development

### Adding Features

- **Frontend**: Add components in `frontend/components/`
- **Backend**: Add API routes in `frontend/pages/api/`
- **Styling**: Customize in `frontend/styles/globals.css`

### Environment Variables

For production, set these in Vercel:
```bash
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Test with `./start.sh`
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Next.js, OpenAI, and a lot of coffee** ☕

*P.S. - If this README made you smile, we've succeeded! 😊*
