const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const markdownpdf = require("markdown-pdf");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static("public"));

// Convert HTML to PDF
app.post("/convert-to-pdf", async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).send("URL is required");
    }

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: "domcontentloaded" });

        const pdfBuffer = await page.pdf();
        const pdfPath = path.join(__dirname, "downloads", `${Date.now()}.pdf`);
        fs.writeFileSync(pdfPath, pdfBuffer);
        await browser.close();

        res.status(200).send({ pdfPath });
    } catch (err) {
        res.status(500).send("Error converting to PDF");
    }
});

// Convert HTML to Markdown
app.post("/convert-to-markdown", async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).send("URL is required");
    }

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: "domcontentloaded" });

        const content = await page.content();
        const markdown = content.replace(/<\/?[^>]+(>|$)/g, "");

        const markdownPath = path.join(__dirname, "downloads", `${Date.now()}.md`);
        fs.writeFileSync(markdownPath, markdown);
        await browser.close();

        res.status(200).send({ markdownPath });
    } catch (err) {
        res.status(500).send("Error converting to Markdown");
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
