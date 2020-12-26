import "reflect-metadata";
import { createConnection } from "typeorm";

const bootstrap = async () => {
  const connection = createConnection();
};
bootstrap();
