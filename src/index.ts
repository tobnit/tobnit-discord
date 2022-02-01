import express from "express";
import "dotenv/config";
import cors from "cors";

// import router from "@api/router";
import Client from "@bot/client";

new Client({
  intents: 32767,
  presence: {
    status: "online",
    afk: false,
    activities: [
      {
        name: "/comandos",
        type: "LISTENING",
      },
    ],
  },
}).init();

const server = express();
const PORT = process.env.PORT || 3000;

// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));
// server.use(cors());
// server.use("/api", router);

server.listen(PORT);
