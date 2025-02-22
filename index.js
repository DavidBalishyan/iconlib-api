import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Specify icons with /icon/:name");
})

app.get("/icon/:name", (req, res) => {
    const iconName = req.params.name;
    const iconPath = path.join(__dirname, "icons", `${iconName}.svg`);
    
    res.sendFile(iconPath);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
