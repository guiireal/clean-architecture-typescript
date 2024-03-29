import express from "express";
import { personRoutes } from "./infrastructure/routes/person.route";

const app = express();

app.use(express.json());

app.use("/api/people", personRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
