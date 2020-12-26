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
    /* 
      let result = [];
      $(".row .coffee-cups__wrapper").each(function() {
          const category = $(this).find("h2").text();
          const items = $(this).nextUntil("img").each(function() {
              const selector = '.wp-block-group__inner-container';
              const selector2 = '.wp-block-columns .wp-block-column';
              result.push({
                  name: $(this).find(`${selector} ${selector2} h4`).text().trim(),
                  description: $(this).find(`${selector} ${selector2} p`).text().trim(),
                  recipe: $(this).find("> div > p:last").text().trim(),
                  category 
              });
          });
      })
    */
  } catch (error) {
    console.log(`Error in fetching data`, error);
  }
};
startServer();
