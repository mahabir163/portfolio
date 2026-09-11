# Dark Modern Flask Portfolio

A single-page dark modern portfolio built with:

- HTML
- CSS
- JavaScript
- Python
- Flask

## Run locally

### 1. Open terminal in this folder

```bash
cd dark_modern_portfolio
```

### 2. Create virtual environment

Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Install Flask

```bash
pip install -r requirements.txt
```

### 4. Start Flask

```bash
python app.py
```

### 5. Open

http://127.0.0.1:5000

## Customize

Edit `templates/index.html` to change:

- Name
- About section
- Skills
- Projects
- GitHub / LinkedIn / email
- Education / experience

The contact form sends data to the Flask `/contact` route.
For production, connect that route to email or a database.
