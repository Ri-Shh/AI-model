import React, { useState } from 'react';
import { SayButton } from 'react-say';
import styles from './speechInput.module.css';
import { SlChemistry } from "react-icons/sl";

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={styles.container}>
    <div className={styles.header}>
        Try it Out! <SlChemistry />
    </div>
    <div className={styles.header2}>
        Text to Speech Converter
    </div>
    <div className={styles.divider}></div>
    <div className={styles.content}>
        The following model allows the user to elevate your text into captivating speech instantly!
        Seamlessly convert your words into dynamic audio with a single click. 
    </div>
    <div className={styles.divider}></div>
    <div className="input">
    Enter Text and click on button:
    </div>
    <div className={styles.divider}></div>
      <input className={styles.input} type="text" value={text} onChange={handleTextChange} />
      <div className={styles.sayButton}>
      <SayButton
        speak={text}
        onClick={() => {
            console.log('Speech started:', text);
        }}
        />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content2}>
            Discover and create your own models using our AIModel Explorer. 
            Craft bespoke models tailored to your needs and explore cutting-edge AI technology.
            The website also features a blog section for tech-enthusiasts.
            Now, rate the models you enjoyed and catch them often in Spotlight.
            Use various categories and libraries to refine your ideas effortlessly
            and filter out whatever you seek. Check Out your models and blogs in the profile section
            and share it with others on the models and blogs page respectively. Dive into the world of
            AI with our AI Model Explorer!
    </div>
    </div>
  );
};

export default TextToSpeech;
