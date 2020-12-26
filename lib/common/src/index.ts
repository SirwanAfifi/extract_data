import axios from "axios";
import * as cheerio from "cheerio";
import dotenv from "dotenv";
dotenv.config({});

const startServer = async () => {
  try {
    const { data } = await axios.get(process.env.URL);
    const $ = cheerio.load(data);
    console.log(
      $(".row .coffee-cups__wrapper .col-12 .smart-toc__anchor").length
    );
  } catch (error) {
    console.log(`Error in fetching data`, error);
  }
};
startServer();
