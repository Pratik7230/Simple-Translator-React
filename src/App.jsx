import { useState, useEffect, useRef } from 'react'
import './App.css'

const languages = [
  { value: 'af-ZA', label: 'Afrikaans' },
  { value: 'sq-AL', label: 'Albanian' },
  { value: 'am-ET', label: 'Amharic' },
  { value: 'ar-SA', label: 'Arabic' },
  { value: 'hy-AM', label: 'Armenian' },
  { value: 'az-AZ', label: 'Azerbaijani' },
  { value: 'bjs-BB', label: 'Bajan' },
  { value: 'rm-RO', label: 'Balkan Gipsy' },
  { value: 'eu-ES', label: 'Basque' },
  { value: 'bem-ZM', label: 'Bemba' },
  { value: 'bn-IN', label: 'Bengali' },
  { value: 'be-BY', label: 'Bielarus' },
  { value: 'bi-VU', label: 'Bislama' },
  { value: 'bs-BA', label: 'Bosnian' },
  { value: 'br-FR', label: 'Breton' },
  { value: 'bg-BG', label: 'Bulgarian' },
  { value: 'my-MM', label: 'Burmese' },
  { value: 'ca-ES', label: 'Catalan' },
  { value: 'ceb-PH', label: 'Cebuano' },
  { value: 'ch-GU', label: 'Chamorro' },
  { value: 'zh-CN', label: 'Chinese (Simplified)' },
  { value: 'zh-TW', label: 'Chinese Traditional' },
  { value: 'zdj-KM', label: 'Comorian (Ngazidja)' },
  { value: 'cop-EG', label: 'Coptic' },
  { value: 'en-GB', label: 'English' },

  { value: 'aig-AG', label: 'Creole English (Antigua and Barbuda)' },
  { value: 'bah-BS', label: 'Creole English (Bahamas)' },
  { value: 'gcl-GD', label: 'Creole English (Grenadian)' },
  { value: 'gyn-GY', label: 'Creole English (Guyanese)' },
  { value: 'jam-JM', label: 'Creole English (Jamaican)' },
  { value: 'svc-VC', label: 'Creole English (Vincentian)' },
  { value: 'vic-US', label: 'Creole English (Virgin Islands)' },
  { value: 'ht-HT', label: 'Creole French (Haitian)' },
  { value: 'acf-LC', label: 'Creole French (Saint Lucian)' },
  { value: 'crs-SC', label: 'Creole French (Seselwa)' },
  { value: 'pov-GW', label: 'Creole Portuguese (Upper Guinea)' },
  { value: 'hr-HR', label: 'Croatian' },
  { value: 'cs-CZ', label: 'Czech' },
  { value: 'da-DK', label: 'Danish' },
  { value: 'nl-NL', label: 'Dutch' },
  { value: 'dz-BT', label: 'Dzongkha' },
  { value: 'eo-EU', label: 'Esperanto' },
  { value: 'et-EE', label: 'Estonian' },
  { value: 'fn-FNG', label: 'Fanagalo' },
  { value: 'fo-FO', label: 'Faroese' },
  { value: 'fi-FI', label: 'Finnish' },
  { value: 'fr-FR', label: 'French' },
  { value: 'gl-ES', label: 'Galician' },
  { value: 'ka-GE', label: 'Georgian' },
  { value: 'de-DE', label: 'German' },
  { value: 'el-GR', label: 'Greek' },
  { value: 'grc-GR', label: 'Greek (Classical)' },
  { value: 'gu-IN', label: 'Gujarati' },
  { value: 'ha-NE', label: 'Hausa' },
  { value: 'haw-US', label: 'Hawaiian' },
  { value: 'he-IL', label: 'Hebrew' },
  { value: 'hi-IN', label: 'Hindi' },
  { value: 'hu-HU', label: 'Hungarian' },
  { value: 'is-IS', label: 'Icelandic' },
  { value: 'id-ID', label: 'Indonesian' },
  { value: 'kl-GL', label: 'Inuktitut (Greenlandic)' },
  { value: 'ga-IE', label: 'Irish Gaelic' },
  { value: 'it-IT', label: 'Italian' },
  { value: 'ja-JP', label: 'Japanese' },
  { value: 'jv-ID', label: 'Javanese' },
  { value: 'kea-CV', label: 'Kabuverdianu' },
  { value: 'kab-DZ', label: 'Kabylian' },
  { value: 'kn-IN', label: 'Kannada' },
  { value: 'kk-KZ', label: 'Kazakh' },
  { value: 'km-KM', label: 'Khmer' },
  { value: 'rw-RW', label: 'Kinyarwanda' },
  { value: 'rn-BI', label: 'Kirundi' },
  { value: 'ko-KR', label: 'Korean' },
  { value: 'ku-TR', label: 'Kurdish' },
  { value: 'ckb-IQ', label: 'Kurdish Sorani' },
  { value: 'ky-KG', label: 'Kyrgyz' },
  { value: 'la-VA', label: 'Latin' },
  { value: 'lo-LA', label: 'Lao' },
  { value: 'lv-LV', label: 'Latvian' },
  { value: 'lt-LT', label: 'Lithuanian' },
  { value: 'lb-LU', label: 'Luxembourgish' },
  { value: 'mk-MK', label: 'Macedonian' },
  { value: 'mg-MG', label: 'Malagasy' },
  { value: 'ms-MY', label: 'Malay' },
  { value: 'dv-MV', label: 'Maldivian' },
  { value: 'mt-MT', label: 'Maltese' },
  { value: 'gv-IM', label: 'Manx Gaelic' },
  { value: 'mi-NZ', label: 'Maori' },
  { value: 'mh-MH', label: 'Marshallese' },
  { value: 'mr-IN', label: 'Marathi' },
  { value: 'men-SL', label: 'Mende' },
  { value: 'mn-MN', label: 'Mongolian' },
  { value: 'mfe-MU', label: 'Morisyen' },
  { value: 'ne-NP', label: 'Nepali' },
  { value: 'niu-NU', label: 'Niuean' },
  { value: 'no-NO', label: 'Norwegian' }
]

function SearchableSelect({ id, label, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)

  const selectedLanguage = languages.find(lang => lang.value === value)

  const filteredLanguages = languages.filter(lang =>
    lang.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (lang) => {
    onChange(lang.value)
    setIsOpen(false)
    setSearchTerm('')
  }

  return (
    <div className="searchable-select-wrapper" ref={dropdownRef}>
      <label htmlFor={id} className="form-label">{label}</label>
      <div className={`searchable-select ${isOpen ? 'open' : ''}`}>
        <div
          className="searchable-select-input"
          onClick={() => {
            setIsOpen(!isOpen)
            if (!isOpen) {
              setTimeout(() => inputRef.current?.focus(), 0)
            }
          }}
        >
          <input
            ref={inputRef}
            type="text"
            id={id}
            className="form-control"
            placeholder={placeholder || 'Select a language'}
            value={isOpen ? searchTerm : (selectedLanguage?.label || '')}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setIsOpen(true)
            }}
            onFocus={() => setIsOpen(true)}
            readOnly={!isOpen}
          />
          <span className="searchable-select-arrow">▼</span>
        </div>
        {isOpen && (
          <div className="searchable-select-dropdown">
            {filteredLanguages.length > 0 ? (
              <ul className="searchable-select-list">
                {filteredLanguages.map((lang) => (
                  <li
                    key={lang.value}
                    className={`searchable-select-option ${value === lang.value ? 'selected' : ''}`}
                    onClick={() => handleSelect(lang)}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="searchable-select-no-results">No languages found</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function App() {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [fromLanguage, setFromLanguage] = useState('')
  const [toLanguage, setToLanguage] = useState('')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const translateText = () => {

    if (text === '') {
      alert('Please enter text to translate')
      return
    }

    if (fromLanguage === '') {
      alert('Please select a from language')
      return
    }

    if (toLanguage === '') {
      alert('Please select a to language')
      return
    }

    if (fromLanguage === toLanguage) {
      alert('Please select different languages')
      return
    }

    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`)
      .then(response => response.json())
      .then(data =>
        setTranslatedText(data.responseData.translatedText))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="text-center mb-0 flex-grow-1">Simple Translator</h1>
            <button
              className="btn btn-outline-secondary theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

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
              <SearchableSelect
                id="fromLanguage"
                label="From language:"
                value={fromLanguage}
                onChange={setFromLanguage}
                placeholder="Select a language"
              />
            </div>
            <div className="col-md-6">
              <SearchableSelect
                id="toLanguage"
                label="To language:"
                value={toLanguage}
                onChange={setToLanguage}
                placeholder="Select a language"
              />
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
