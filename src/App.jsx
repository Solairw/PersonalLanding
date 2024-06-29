import './App.css'
import "@fontsource/cascadia-code"
import GetWord from './GetWord.jsx'

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const now = Date.now();
const applyDayDate = new Date(2020, 10, 26);
const diffDays = Math.round(Math.abs((now - applyDayDate) / oneDay));

function App() {
  return (
    <>
      <div className="m-auto">
        <div id="main-view">
          <h1 id="name">Валерий Гончаров</h1>
          <span className="detailsBlock">Разработчик C#, Владивосток</span>
          <span className="detailsBlock">Работаю в DNS {diffDays} {GetWord(diffDays)}</span>
        </div>
      </div>
    </>
  )
}

export default App
