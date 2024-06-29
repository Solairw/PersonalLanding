import './App.css'
import "@fontsource/cascadia-code"

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const now = Date.now();
const applyDayDate = new Date(2020, 10, 26);
const diffDays = Math.round(Math.abs((now - applyDayDate) / oneDay));

let lastDigit = diffDays % 10;
let daysWord;
switch (lastDigit) {
  case 0:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    daysWord = 'дней';
    break;
  case 1:
    daysWord = "день";
    break;
  case 2:
  case 3:
  case 4:
    daysWord = "дня"
    break;
  default:
    daysWord = "дней"
    break;
}

function App() {
  return (
    <>
      <div id="main-view">
        <h1 id="name">Валерий Гончаров</h1>
        <span className="detailsBlock">Разработчик C#, Владивосток</span>
        <span className="detailsBlock">Работаю в DNS {diffDays} {daysWord}</span>
      </div>
    </>
  )
}

export default App
