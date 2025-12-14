import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [fromLanguage, setFromLanguage] = useState('')
  const [toLanguage, setToLanguage] = useState('')

  const translateText = () => {
    if(text === '') {
      alert('Please enter text to translate')
      return
    }
    if(fromLanguage === '') {
      alert('Please select a from language')
      return
    }
    if(toLanguage === '') {
      alert('Please select a to language')
      return
    }
    if(fromLanguage === toLanguage) {
      alert('Please select different languages')
      return
    }

    console.log(fromLanguage, toLanguage);
    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`)
      .then(response => response.json())
      .then(data =>
        setTranslatedText(data.responseData.translatedText))
      .catch(error => console.error('Error:', error));

    console.log(translatedText);
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Simple Translator</h1>

          <div className="mb-3">
            <label htmlFor="textInput" className="form-label">Enter text to translate</label>
            <input
              type="text"
              id="textInput"
              className="form-control"
              placeholder="Enter text to translate"
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="fromLanguage" className="form-label">From language:</label>
              <select
                id="fromLanguage"
                className="form-select"
                onChange={(e) => setFromLanguage(e.target.value)}
              >
                <option>Select a language</option>
                <option value="af-ZA">Afrikaans</option>
                <option value="sq-AL">Albanian</option>
                <option value="am-ET">Amharic</option>
                <option value="ar-SA">Arabic</option>
                <option value="hy-AM">Armenian</option>
                <option value="az-AZ">Azerbaijani</option>
                <option value="bjs-BB">Bajan</option>
                <option value="rm-RO">Balkan Gipsy</option>
                <option value="eu-ES">Basque</option>
                <option value="bem-ZM">Bemba</option>
                <option value="bn-IN">Bengali</option>
                <option value="be-BY">Bielarus</option>
                <option value="bi-VU">Bislama</option>
                <option value="bs-BA">Bosnian</option>
                <option value="br-FR">Breton</option>
                <option value="bg-BG">Bulgarian</option>
                <option value="my-MM">Burmese</option>
                <option value="ca-ES">Catalan</option>
                <option value="ceb-PH">Cebuano</option>
                <option value="ch-GU">Chamorro</option>
                <option value="zh-CN">Chinese (Simplified)</option>
                <option value="zh-TW">Chinese Traditional</option>
                <option value="zdj-KM">Comorian (Ngazidja)</option>
                <option value="cop-EG">Coptic</option>
                <option value="aig-AG">Creole English (Antigua and Barbuda)</option>
                <option value="bah-BS">Creole English (Bahamas)</option>
                <option value="gcl-GD">Creole English (Grenadian)</option>
                <option value="gyn-GY">Creole English (Guyanese)</option>
                <option value="jam-JM">Creole English (Jamaican)</option>
                <option value="svc-VC">Creole English (Vincentian)</option>
                <option value="vic-US">Creole English (Virgin Islands)</option>
                <option value="ht-HT">Creole French (Haitian)</option>
                <option value="acf-LC">Creole French (Saint Lucian)</option>
                <option value="crs-SC">Creole French (Seselwa)</option>
                <option value="pov-GW">Creole Portuguese (Upper Guinea)</option>
                <option value="hr-HR">Croatian</option>
                <option value="cs-CZ">Czech</option>
                <option value="da-DK">Danish</option>
                <option value="nl-NL">Dutch</option>
                <option value="dz-BT">Dzongkha</option>
                <option value="en-GB">English</option>
                <option value="eo-EU">Esperanto</option>
                <option value="et-EE">Estonian</option>
                <option value="fn-FNG">Fanagalo</option>
                <option value="fo-FO">Faroese</option>
                <option value="fi-FI">Finnish</option>
                <option value="fr-FR">French</option>
                <option value="gl-ES">Galician</option>
                <option value="ka-GE">Georgian</option>
                <option value="de-DE">German</option>
                <option value="el-GR">Greek</option>
                <option value="grc-GR">Greek (Classical)</option>
                <option value="gu-IN">Gujarati</option>
                <option value="ha-NE">Hausa</option>
                <option value="haw-US">Hawaiian</option>
                <option value="he-IL">Hebrew</option>
                <option value="hi-IN">Hindi</option>
                <option value="hu-HU">Hungarian</option>
                <option value="is-IS">Icelandic</option>
                <option value="id-ID">Indonesian</option>
                <option value="kl-GL">Inuktitut (Greenlandic)</option>
                <option value="ga-IE">Irish Gaelic</option>
                <option value="it-IT">Italian</option>
                <option value="ja-JP">Japanese</option>
                <option value="jv-ID">Javanese</option>
                <option value="kea-CV">Kabuverdianu</option>
                <option value="kab-DZ">Kabylian</option>
                <option value="kn-IN">Kannada</option>
                <option value="kk-KZ">Kazakh</option>
                <option value="km-KM">Khmer</option>
                <option value="rw-RW">Kinyarwanda</option>
                <option value="rn-BI">Kirundi</option>
                <option value="ko-KR">Korean</option>
                <option value="ku-TR">Kurdish</option>
                <option value="ckb-IQ">Kurdish Sorani</option>
                <option value="ky-KG">Kyrgyz</option>
                <option value="la-VA">Latin</option>
                <option value="lo-LA">Lao</option>
                <option value="lv-LV">Latvian</option>
                <option value="lt-LT">Lithuanian</option>
                <option value="lb-LU">Luxembourgish</option>
                <option value="mk-MK">Macedonian</option>
                <option value="mg-MG">Malagasy</option>
                <option value="ms-MY">Malay</option>
                <option value="dv-MV">Maldivian</option>
                <option value="mt-MT">Maltese</option>
                <option value="gv-IM">Manx Gaelic</option>
                <option value="mi-NZ">Maori</option>
                <option value="mh-MH">Marshallese</option>
                <option value="mr-IN">Marathi</option>
                <option value="men-SL">Mende</option>
                <option value="mn-MN">Mongolian</option>
                <option value="mfe-MU">Morisyen</option>
                <option value="ne-NP">Nepali</option>
                <option value="niu-NU">Niuean</option>
                <option value="no-NO">Norwegian</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="toLanguage" className="form-label">To language:</label>
              <select
                id="toLanguage"
                className="form-select"
                onChange={(e) => setToLanguage(e.target.value)}
              >
                <option>Select a language</option>
                <option value="af-ZA">Afrikaans</option>
                <option value="sq-AL">Albanian</option>
                <option value="am-ET">Amharic</option>
                <option value="ar-SA">Arabic</option>
                <option value="hy-AM">Armenian</option>
                <option value="az-AZ">Azerbaijani</option>
                <option value="bjs-BB">Bajan</option>
                <option value="rm-RO">Balkan Gipsy</option>
                <option value="eu-ES">Basque</option>
                <option value="bem-ZM">Bemba</option>
                <option value="bn-IN">Bengali</option>
                <option value="be-BY">Bielarus</option>
                <option value="bi-VU">Bislama</option>
                <option value="bs-BA">Bosnian</option>
                <option value="br-FR">Breton</option>
                <option value="bg-BG">Bulgarian</option>
                <option value="my-MM">Burmese</option>
                <option value="ca-ES">Catalan</option>
                <option value="ceb-PH">Cebuano</option>
                <option value="ch-GU">Chamorro</option>
                <option value="zh-CN">Chinese (Simplified)</option>
                <option value="zh-TW">Chinese Traditional</option>
                <option value="zdj-KM">Comorian (Ngazidja)</option>
                <option value="cop-EG">Coptic</option>
                <option value="aig-AG">Creole English (Antigua and Barbuda)</option>
                <option value="bah-BS">Creole English (Bahamas)</option>
                <option value="gcl-GD">Creole English (Grenadian)</option>
                <option value="gyn-GY">Creole English (Guyanese)</option>
                <option value="jam-JM">Creole English (Jamaican)</option>
                <option value="svc-VC">Creole English (Vincentian)</option>
                <option value="vic-US">Creole English (Virgin Islands)</option>
                <option value="ht-HT">Creole French (Haitian)</option>
                <option value="acf-LC">Creole French (Saint Lucian)</option>
                <option value="crs-SC">Creole French (Seselwa)</option>
                <option value="pov-GW">Creole Portuguese (Upper Guinea)</option>
                <option value="hr-HR">Croatian</option>
                <option value="cs-CZ">Czech</option>
                <option value="da-DK">Danish</option>
                <option value="nl-NL">Dutch</option>
                <option value="dz-BT">Dzongkha</option>
                <option value="en-GB">English</option>
                <option value="eo-EU">Esperanto</option>
                <option value="et-EE">Estonian</option>
                <option value="fn-FNG">Fanagalo</option>
                <option value="fo-FO">Faroese</option>
                <option value="fi-FI">Finnish</option>
                <option value="fr-FR">French</option>
                <option value="gl-ES">Galician</option>
                <option value="ka-GE">Georgian</option>
                <option value="de-DE">German</option>
                <option value="el-GR">Greek</option>
                <option value="grc-GR">Greek (Classical)</option>
                <option value="gu-IN">Gujarati</option>
                <option value="ha-NE">Hausa</option>
                <option value="haw-US">Hawaiian</option>
                <option value="he-IL">Hebrew</option>
                <option value="hi-IN">Hindi</option>
                <option value="hu-HU">Hungarian</option>
                <option value="is-IS">Icelandic</option>
                <option value="id-ID">Indonesian</option>
                <option value="kl-GL">Inuktitut (Greenlandic)</option>
                <option value="ga-IE">Irish Gaelic</option>
                <option value="it-IT">Italian</option>
                <option value="ja-JP">Japanese</option>
                <option value="jv-ID">Javanese</option>
                <option value="kea-CV">Kabuverdianu</option>
                <option value="kab-DZ">Kabylian</option>
                <option value="kn-IN">Kannada</option>
                <option value="kk-KZ">Kazakh</option>
                <option value="km-KM">Khmer</option>
                <option value="rw-RW">Kinyarwanda</option>
                <option value="rn-BI">Kirundi</option>
                <option value="ko-KR">Korean</option>
                <option value="ku-TR">Kurdish</option>
                <option value="ckb-IQ">Kurdish Sorani</option>
                <option value="ky-KG">Kyrgyz</option>
                <option value="la-VA">Latin</option>
                <option value="lo-LA">Lao</option>
                <option value="lv-LV">Latvian</option>
                <option value="lt-LT">Lithuanian</option>
                <option value="lb-LU">Luxembourgish</option>
                <option value="mk-MK">Macedonian</option>
                <option value="mg-MG">Malagasy</option>
                <option value="ms-MY">Malay</option>
                <option value="dv-MV">Maldivian</option>
                <option value="mt-MT">Maltese</option>
                <option value="gv-IM">Manx Gaelic</option>
                <option value="mi-NZ">Maori</option>
                <option value="mh-MH">Marshallese</option>
                <option value="men-SL">Mende</option>
                <option value="mn-MN">Mongolian</option>
                <option value="mfe-MU">Morisyen</option>
                <option value="mr-IN">Marathi</option>
                <option value="ne-NP">Nepali</option>
                <option value="niu-NU">Niuean</option>
                <option value="no-NO">Norwegian</option>
              </select>
            </div>
          </div>

          <div className="d-grid mb-4">
            <button
              className="btn btn-primary btn-lg"
              onClick={translateText}
            >
              Translate
            </button>
          </div>

          {translatedText && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Translated Text</h5>
                <p className="card-text">{translatedText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
