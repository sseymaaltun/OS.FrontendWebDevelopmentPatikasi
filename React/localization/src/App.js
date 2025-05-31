import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useState, useEffect } from 'react';

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var.",
  },
  "en-US": {
    title: "Hello World",
    description: "You have {count} new messages.",
  },
};

function App() {
  const isLocale = localStorage.getItem("lang"); // localStorage'da dil bilgisi var mı?
  const defaultLocale = isLocale ? isLocale : navigator.language; // browser dil ayarlarına göre varsayılan dil.
  const [lang, setLang] = useState(defaultLocale); //aktif dili tutar.

  useEffect(() => {
    localStorage.setItem("lang", lang); // dil değiştiğinde localStorage'a kaydeder.
  }, [lang]); // lang değiştiğinde tetiklenir.
  return (
    <div className="App">
      <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage id='title'/> 
        {/* id messages tanımındaki keydir. */}
        <p>
          <FormattedMessage id='description' values={{count: 5}} />
        </p>
        <br/>
        <br/>
        <button onClick={() => setLang("tr-TR")}>TR</button>
        <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
