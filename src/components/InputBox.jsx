import React from "react";
import data from "../memesData";
import { useState } from "react";

const InputBox = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([data.data.memes]);

  const submitHandler = (e) => {
    e.preventDefault();
    let random = Math.floor(Math.random() * data.data.memes.length);
    const url = data.data.memes[random].url;
    setMeme({ ...meme, image: url });
  };

  return (
    <div className="box">
      <section>
        <h1 className="heading">Welcome to Meme Generator</h1>

        <form onSubmit={submitHandler} className="input_form">
          <input
            type="text"
            placeholder="Top text"
            className="top"
            onChange={(e) => setMeme({ ...meme, topText: e.target.value })}
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="bottom"
            onChange={(e) => setMeme({ ...meme, bottomText: e.target.value })}
            value={meme.bottomText}
          />
          <button className="input_btn">Get a new meme image 🖼</button>
        </form>
      </section>
      <section className="meme_image_section">
        <img src={meme.image} className="meme_image" />
        <h2 className="top_text">{meme.topText}</h2>
        <h2 className="bottom_text">{meme.bottomText}</h2>
      </section>
    </div>
  );
};

export default InputBox;
