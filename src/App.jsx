import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [fromLanguage, setFromLanguage] = useState('')
  const [toLanguage, setToLanguage] = useState('')

  const translateText = () => {
    console.log(fromLanguage, toLanguage);
    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`)
      .then(response => response.json())
      .then(data =>
        setTranslatedText(data.responseData.translatedText))
      .catch(error => console.error('Error:', error));

    console.log(translatedText);
  }

  return (
    <>
      <input type="text" placeholder="Enter text to translate" onChange={(e) => setText(e.target.value)} />
      from language:
      <select onChange={(e) => setFromLanguage(e.target.value)}>
        <option >Select Language From</option>
        <option value="en-GB">English</option>
        <option value="fr-FR">French</option>
        <option value="es-ES">Spanish</option>
        <option value="de-DE">German</option>
        <option value="it-IT">Italian</option>
        <option value="pt-PT">Portuguese</option>

      </select>
      To language:
      <select onChange={(e) => setToLanguage(e.target.value)}>
        <option >Select Language To</option>
        <option value="en-GB">English</option>
        <option value="fr-FR">French</option>
        <option value="es-ES">Spanish</option>
        <option value="de-DE">German</option>
        <option value="it-IT">Italian</option>
        <option value="pt-PT">Portuguese</option>

      </select>
      <button onClick={translateText}>Translate</button>

      <div>
        <p>{translatedText}</p>
      </div>
    </>
  )
}

export default App
