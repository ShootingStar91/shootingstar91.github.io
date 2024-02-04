import { useState } from 'react'

const ShowPage = ({ name }) => {
  const content = [
    {
      name: 'oodikone', content: {
        title: 'Oodikone',
        description: <div>Oodikone on <a href="https://toska.dev">Toska-sovelluskehitystiimin</a> web-sovellus, joka tuo opiskelijadataa Helsingin yliopiston henkilökunnan luettavaksi eri muodoissa.</div>,
        exampleTasks: 'Tein esimerkiksi Uuden featuren.',
        technologies: 'Javascript,React,Redux,SemanticUI,NodeJS,Express,PostgreSQL,Redis,Docker,Openshift'.split(','),
      }
    }
  ]

  const page = content.find(page => page.name === name)
  console.log(name, content, page)
  if (!page) return <p>ERROR! NO PAGE FOUND! PAGE BROKEN</p>
  const { title, description, exampleTasks, technologies } = page.content
  return (
    <div>
      <h1>{title}</h1>
      <p className="">{description}</p>
      <p>{exampleTasks}</p>
      <p>
        <b>Used technologies</b>
        <div className="flex flex-row gap-2 text-sm flex-wrap">
          {technologies.map(t => <div key={t}>{t}</div>)}
        </div>
      </p>
    </div>
  )
}

const buttonStyle = 'p-2 my-auto rounded-md font-bold hover:bg-sky-600 hover:transition hover:ease-in-out duration-700 hover:duration-300 active:bg-sky-800 active:duration-0 select-none'

function App() {
  const [page, setPage] = useState('oodikone')
  const pages = [
    {
      name: 'oodikone',
      onClick: () => setPage('oodikone'),
      content: {
        title: 'Oodikone',
        description: <div>Oodikone on <a href="https://toska.dev">Toska-sovelluskehitystiimin</a> web-sovellus, joka tuo opiskelijadataa Helsingin yliopiston henkilökunnan luettavaksi eri muodoissa.</div>,
        exampleTasks: 'Tein esimerkiksi Uuden featuren.',
        technologies: 'Javascript, React, Redux, SemanticUI, NodeJS, Express, PostgreSQL, Redis, Docker, Kubernetes / Openshift',
      }
    },
    {
      name: 'taivuttaja',
      onClick: () => setPage('taivuttaja'),
    },
    {
      name: 'tmc-cli-rust',
      onClick: () => setPage('tmc-cli-rust'),
    },
  ]

  return (
    <>
      <div className="py-2 bg-sky-200">
        <div className="max-w-screen-md mx-auto">
          <h1 className="pl-2 font-bold">Arttu Kangas - Portfolio</h1>
        </div>
      </div>
      <div className="max-w-screen-sm mx-auto">
        <div className="flex flex-row gap-4 pt-4">
          <h1 className="p-2 font-bold">Projektit:</h1>
          {pages.map(({ name, onClick }) => (
            <div key={name} className={`${buttonStyle} ${name === page ? 'bg-sky-800' : 'bg-amber-200'}`} onClick={onClick}>{name}</div>
          ))}
        </div>
        <div className="pt-8">
          <ShowPage name={page} />
        </div>
      </div>
    </>
  )
}

export default App
