# Offline Cache Vault

Offline Cache Vault is a browser extension with a backend server that allows you to save any web page for offline viewing.  
You can convert web pages into **PDF** or **Markdown** format with a single click.

---

## Features

- **Browser Extension** (Manifest v3) to save active tabs
- **PDF Conversion** using Puppeteer
- **Markdown Conversion** by stripping HTML tags
- Backend API built with **Express.js**
- Simple popup UI for user interaction

---

## Project Structure

```
offline-cache-vault-main/
├── backend/              # Node.js backend server
│   ├── index.js          # Main server code
│   ├── package.json      # Dependencies
│   └── .gitignore
├── extension/            # Browser extension
│   ├── background.js
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── styles.css
└── .gitignore
```

---

## Installation & Setup

### Backend

1. Navigate to the backend folder:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm start
    ```

    The backend runs on [http://localhost:3001](http://localhost:3001).

### Browser Extension

1. Open Google Chrome or any Chromium-based browser.
2. Go to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the `extension` folder.
5. The extension will appear in your browser toolbar.

---

## API Endpoints

### Convert to PDF

- **POST** `/convert-to-pdf`
- **Body:**

  ```json
  {
     "url": "https://example.com"
  }
  ```

- **Returns:**

  ```json
  {
     "pdfPath": "path/to/generated.pdf"
  }
  ```

### Convert to Markdown

- **POST** `/convert-to-markdown`
- **Body:**

  ```json
  {
     "url": "https://example.com"
  }
  ```

- **Returns:**

  ```json
  {
     "markdownPath": "path/to/generated.md"
  }
  ```

---

## Dependencies

- **Express.js** – Backend web framework
- **Puppeteer** – Headless browser for PDF generation
- **markdown-pdf** – Markdown file handling

---

## License

This project is licensed under the MIT License.

---

## Contributing

Open source contributions are welcome!  
Feel free to open issues or submit pull requests to improve the project.

If you have ideas, suggestions, or want to collaborate, reach out at [kkishlay502@gmail.com](mailto:kkishlay502@gmail.com).

---

## LinkedIn Post (Humanized, No Emojis)

> Excited to share a project I’ve been working on – **Offline Cache Vault**.  
> It’s a combination of a browser extension and a Node.js backend that allows you to save any web page for offline viewing in PDF or Markdown format.  
>
> **Key highlights**:  
> - Save your current tab instantly using the extension’s popup.  
> - Backend built with Express.js for handling conversions.  
> - Puppeteer integration for accurate PDF snapshots.  
> - Simple HTML-to-Markdown conversion for lightweight offline notes.  
>
> This project was a great opportunity to work with browser extension APIs (Manifest v3) and backend automation tools like Puppeteer. It was also a solid exercise in connecting a frontend extension with an API-based backend.  
>
> Looking forward to refining this further and exploring features like scheduled offline saving and better styling for markdown exports.  
>
> Feedback and suggestions are always welcome.  
> Open source contributors are invited! Contact me at kkishlay502@gmail.com.

