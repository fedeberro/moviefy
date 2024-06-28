import express, { json, urlencoded } from "express";
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";
import { searchRouter } from "./routes/search.js";
import { peopleRouter } from "./routes/people.js";
import { listsRouter } from "./routes/lists.js";
import { usersRouter } from "./routes/users.js";
import { validateToken } from "./utils/accessToken.js";
import initDB from "./config/db.js";
import { handleErrors } from "./middlewares/handleErrors.js";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT ?? 3000;

app.get("/api", (req, res) => {
  res.send("<h1>Bienvenido</h1>");
});

app.use("/api/movies", moviesRouter);
app.use("/api/search", searchRouter);
app.use("/api/people", peopleRouter);
app.use("/api/lists", validateToken, listsRouter);
app.use("/api/users", usersRouter);

app.use(handleErrors);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

initDB();
