import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const scrape = async () => {
    setLoading(true);
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);
      const content = await page.content();
      const $ = cheerio.load(content);
      const title = $("title").text();
      setResults(title);

      console.log(results);
    } catch (e) {
      console.log("Error handled: ", e);
    }
    setLoading(false);
  };

  return (
    <>
      <label htmlFor="url">URL</label>
      <input type="text" value={url} onChange={handleInputChange} />
      <button onClick={scrape}>{loading ? "Scraping..." : "Scrape"}</button>
    </>
  );
}

export default App;
