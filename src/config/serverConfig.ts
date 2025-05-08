import dotenv from "dotenv";

type configServer = {
  PORT: number;
};

export function loadenv() {
  dotenv.config();
}

loadenv();

export const serverConfig: configServer = {
  PORT: Number(process.env.PORT),
};
