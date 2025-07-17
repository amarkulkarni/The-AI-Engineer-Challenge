# 🚀 OpenAI Chat API Backend

**Welcome to the most beautiful FastAPI backend you've ever seen!** ✨

This bad boy serves up streaming OpenAI chat responses faster than you can say "artificial intelligence." Built with FastAPI, it's like having a lightning-fast waiter serving up AI conversations on a silver platter.

## 🎯 What This Beast Does

- 💬 **Streaming Chat**: Real-time responses that flow like butter
- 🏥 **Health Checks**: Because even APIs need wellness checks
- 🔒 **CORS Ready**: Plays nice with frontends from any domain
- 📚 **Auto Docs**: Swagger UI that'll make you weep tears of joy
- ⚡ **Lightning Fast**: FastAPI + uvicorn = pure speed magic

## 🛠️ Prerequisites (The Boring But Important Stuff)

- **Python 3.8+** (because we're not animals)
- **pip** (your trusty package sidekick)
- **OpenAI API Key** (your golden ticket to AI wonderland)

## 🏃‍♂️ Quick Start (Let's Get This Party Started!)

### Step 1: Clone Into This Directory
```bash
cd api  # You're probably already here if you're reading this!
```

### Step 2: Create Your Python Fortress (Virtual Environment)
```bash
python -m venv venv

# Activate your fortress
# On macOS/Linux:
source venv/bin/activate

# On Windows (if you're brave enough):
venv\Scripts\activate
```

### Step 3: Install The Magic Dependencies
```bash
pip install -r requirements.txt
```

**Pro tip**: This installs:
- `fastapi` - The speed demon web framework
- `uvicorn` - ASGI server that's faster than your morning coffee
- `openai` - Direct line to the AI gods
- `pydantic` - Data validation that actually makes sense
- `python-multipart` - For handling those chunky requests

### Step 4: Fire Up The Engines! 🔥
```bash
python app.py
```

**BOOM!** 💥 Your API is now live at `http://localhost:8000`

## 🎪 API Endpoints (The Main Show)

### 💬 Chat Endpoint - Where The Magic Happens
**The star of the show!** This endpoint takes your messages and returns streaming AI goodness.

- **URL**: `POST /api/chat`
- **What it wants**:
```json
{
    "developer_message": "You are a helpful assistant",
    "user_message": "Tell me a joke about coding",
    "model": "gpt-4.1-mini",  // Optional, defaults to gpt-4.1-mini
    "api_key": "sk-your-super-secret-openai-key"
}
```
- **What you get**: A beautiful stream of AI consciousness, delivered hot and fresh!

### 🏥 Health Check - Is This Thing On?
- **URL**: `GET /api/health` 
- **Returns**: `{"status": "ok"}` (if everything's peachy)

Perfect for making sure your API isn't taking a coffee break.

## 📖 Interactive Docs (Prepare To Be Amazed)

Once your server is purring along, feast your eyes on these auto-generated docs:

- **Swagger UI**: `http://localhost:8000/docs` 🎭
- **ReDoc**: `http://localhost:8000/redoc` 📚

Click around, test endpoints, live your best API life!

## 🌍 CORS Configuration (Playing Nice With Others)

We're configured to accept requests from anywhere (`*`) because we believe in an open and inclusive API world. 

Want to lock it down? Check out the `CORSMiddleware` settings in `app.py` and customize to your heart's content.

## 🛡️ Error Handling (When Things Go Sideways)

Don't worry, we've got your back! The API gracefully handles:

- 🔑 **Invalid API Keys**: "That key ain't it, chief"
- 🚫 **OpenAI API Errors**: When the AI gods are temporarily unavailable
- 💥 **General Server Hiccups**: Because computers aren't perfect

All errors come with helpful messages and a 500 status code (because honesty is the best policy).

## 🎯 Pro Tips

1. **Keep your API key secret!** Treat it like your Netflix password
2. **Use environment variables** for production deployments
3. **Monitor your OpenAI usage** - those tokens add up!
4. **Test with the health endpoint** before going live

## 🤝 Connecting to the Frontend

This backend pairs perfectly with our beautiful Notion-inspired frontend! Make sure both are running:

- **Backend**: `http://localhost:8000` (this beast)
- **Frontend**: `http://localhost:3000` (the pretty face)

## 🚀 Ready for Production?

This baby is Vercel-ready! Check out `vercel.json` for deployment configuration.

---

**Happy coding, you magnificent human!** 🎉

*P.S. - If this README made you smile even once, we've done our job right.* 