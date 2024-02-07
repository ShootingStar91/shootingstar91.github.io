import { useState } from 'react'
import { oodikoneContent } from './content/oodikone'
import { taivuttajaContent } from './content/taivuttaja'
import { tmcCliRustContent } from './content/tmcCliRust'

const ShowPage = ({ name }) => {
  const content = {
    oodikone: oodikoneContent,
    taivuttaja: taivuttajaContent,
    'tmc-cli-rust': tmcCliRustContent
  }

  const page = content[name]
  if (!page) return <p>Error, no page found. App is broken.</p>
  const { title, description, exampleTasks, technologies, images } = page.content
  return (
    <div>
      <h1 className="py-2">{title}</h1>
      <p className="">{description}</p>
      <hr />
      <div className="flex flex-row gap-2 py-2 pt-4">
        <b></b>
        {exampleTasks && <div className="min-w-[50%]">{exampleTasks}</div>}
        <div className="pl-2 sm:pl-4">
          <b>Käytetyt teknologiat:</b>
          <div className="flex flex-row gap-2 text-sm flex-wrap my-2 justify-around">
            {technologies.map(t => <div key={t} className="bg-sky-200 p-1">{t}</div>)}
          </div>
        </div>
      </div>
      {images && images.map(image => <img key={image} className="py-2" src={`/src/assets/${image}`}></img>)}
    </div>
  )
}

const buttonStyle2 = 'p-2 my-auto rounded-t-md font-bold hover:bg-stone-300 hover:transition hover:ease-out duration-700 hover:duration-100 active:bg-stone-700 active:duration-0 select-none'
const buttonStyle = 'p-2 my-auto rounded-t-md font-bold select-none mb-0'

function App() {
  const [page, setPage] = useState('oodikone')
  const pages = ['oodikone', 'taivuttaja', 'tmc-cli-rust']

  return (
    <>
      <div className="max-w-screen-lg mx-auto pb-4 break-words">
        <div className="bg-gradient-to-br from-sky-500 to-sky-300 flex flex-wrap justify-between rounded-b-md">
          <div className="my-auto"><h1 className="p-4">Arttu Kangas - Portfolio</h1></div>
          <div className="my-auto p-4">
            <ul>
              <li>
                <a href="https://github.com/ShootingStar91/">GitHub/ShootingStar91</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/arttu-kangas-a73961244/">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>          <div>
          <p>
            Olen 32-vuotias fullstack-kehittäjä ja tietojenkäsittelytieteen maisteriopiskelija. Opintoni ovat loppuvaiheessa ja olen tällä hetkellä töissä Helsingin Yliopistolla, mutta etsin uutta työpaikkaa.
          </p>
          <p>
            Ota yhteyttä sähköpostilla: ttu91@hotmail.com</p>
        </div>
        <div className="flex flex-col gap-4 pt-2 flex-row sm:flex-row"><h2 className="font-bold my-auto">Projektit</h2>
          <div className="flex flex-row gap-4">
            {pages.map(name => (
              <div key={name} className={`${buttonStyle} ${name === page ? 'bg-stone-200' : 'bg-stone-100'}`} onClick={() => setPage(name)}>{name}</div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-b from-stone-200 to-white p-2">
          <ShowPage name={page} />
        </div>
      </div>
    </>
  )
}

export default App
