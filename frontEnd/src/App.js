import "./App.css";
import { useState } from "react";
import { url } from "./utils/url";
import axios from "axios";

function App() {
  const [message, setMessage] = useState();
  const handleClick = async () => {
    try {
      const response = await axios.get(`${url}/message`);
      setMessage(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1> My Own server </h1>
      <h3> Intro</h3>
      <p>
        This page which is created using react is being servered by my own
        server which is at my home :)
      </p>
      <p>
        Yeah I know there is minimal or actually "NO" css. I had very less time
        to do this like 46 minutes to create, build and deploy this single page
        application so sorry for the inconvenience and enjoy the reading
      </p>
      <hr></hr>
      <h3> What made me to create my own server</h3>
      <p>
        Initially I was fed up with paid services which provide limited cloud
        storage like 15gb for free. Which sparked a question in me{" "}
        <u>
          "Why not I have my own cloud storage which I can access through
          internet"
        </u>{" "}
        In this magical world of internet this idea seemed to be legit, I want
        such a storage i.e. a hard disk at my home in which all the photos or
        files which i want are stored ( and now I need not worry about the
        security cause it is me how will configure it :D ) so this is the first
        stage to have my own server
      </p>
      <div>
        <b>
          Here is the glimpse of my project which is on going and access it's
          code here ->{" "}
        </b>
        <a
          href="https://github.com/Suhas-Kalagotla/CloudStorage"
          target="_blank"
          rel="noreferrer"
        >
          Cloud Storage
        </a>
        <div className="cloudContainer">
          <img src="./cloud.png" className="cloudImage" alt="cloud home page" />
        </div>
      </div>
      <hr></hr>
      <h3>What are my learnings </h3>
      <p> I have got crystal clear understanding of following topics</p>
      <ol>
        <li>IP Address</li>
        <li>DNS</li>
        <li> Dns records - cname , A records </li>
        <li>DDNS ( yes both are different )</li>
        <li> Domain names</li>
        <li>https and http</li>
        <li> Getting https certificate using cerbot </li>
        <li>Router configuration ( port forwarding , dhcp reserve ) </li>
        <li>
          How to deploy react application with backend using apache2 ( don't
          believe me??){" "}
          <button style={{ cursor: "pointer" }} onClick={() => handleClick()}>
            click here
          </button>
        </li>
        <p className="error">
          {" "}
          {message && (
            <>
              {message}
              <button
                onClick={() => setMessage(null)}
                style={{ cursor: "pointer" }}
              >
                {" "}
                Ok
              </button>
            </>
          )}
        </p>
      </ol>
      <hr></hr>
      <h3> Cost of Setup</h3>
      <ol>
        <li>
          <a
            href="https://www.amazon.in/dp/B09TTNF8BT?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
            target="_blank"
            rel="noreferrer"
          >
            Raspberry Pi 4
          </a>
          - 5,795
        </li>
        <li>
          <a
            href="https://www.amazon.in/dp/B07XY8F3P7?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
            target="_blank"
            rel="noreferrer"
          >
            Raspberry Pi Charger
          </a>
          - 775
        </li>
        <li>
          <a
            href="https://www.amazon.in/dp/B07G3YNLJB?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
            target="_blank"
            rel="noreferrer"
          >
            SSD 240GB
          </a>
          -1,249
        </li>
        <li>
          <a
            href="https://www.amazon.in/dp/B0CQPDWP6R?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
            target="_blank"
            rel="noreferrer"
          >
            SATA Adapter
          </a>
          -299
        </li>
        <li>
          <a
            href="https://www.amazon.in/dp/B07V1RFFYT?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
            target="_blank"
            rel="noreferrer"
          >
            Raspberry pi 4 case
          </a>
          -337
        </li>
      </ol>
      Total cost is 8,455 rupees
      <hr></hr>
      <h3>Conclusion </h3>
      <p>
        Thank you for reading, I would love to here your suggestions and review
        in linkedIn comments ;)
      </p>
      <p>Thank you for my design team</p>
    </div>
  );
}

export default App;
