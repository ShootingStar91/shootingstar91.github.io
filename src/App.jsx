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
          <b>Technologies used:</b>
          <div className="flex flex-row gap-2 text-sm flex-wrap my-2 justify-around">
            {technologies.map(t => <div key={t} className="bg-orange-400 p-1">{t}</div>)}
          </div>
        </div>
      </div>
      {images && images.map(image => <img key={image} className="py-2" src={`${image}`}></img>)}
    </div>
  )
}

const buttonStyle = 'p-2 my-auto rounded-t-md font-bold select-none mb-0'

function App() {
  const [page, setPage] = useState('oodikone')
  const pages = ['oodikone', 'taivuttaja', 'tmc-cli-rust']

  return (
    <>
      <div className="max-w-screen-lg mx-auto pb-4 break-words">
        <div className="bg-gradient-to-br from-orange-300 to-amber-300 via-orange-500 flex flex-wrap justify-between rounded-b-md transition">
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
        </div>
        <div className="p-2">
          <p>
            I am a software developer currently working at University of Helsinki, but looking for my next job.
          </p>
          <p>
            Contant me by email: ttu91@hotmail.com</p>
        </div>
        <div className="flex flex-col gap-4 pt-2 flex-row sm:flex-row"><h2 className="font-bold my-auto">Projektit</h2>
          <div className="flex flex-row gap-4">
            {pages.map(name => (
              <div key={name} className={`${buttonStyle} ${name === page ? 'bg-orange-200' : 'bg-stone-200'}`} onClick={() => setPage(name)}>{name}</div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-b from-orange-200 to-amber-50 p-2">
          <ShowPage name={page} />
        </div>
      </div>
    </>
  )
}

export default App
