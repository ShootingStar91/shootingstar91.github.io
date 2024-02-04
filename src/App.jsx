import { useState } from 'react'

const ShowPage = ({ name }) => {
  const content = [
    {
      name: 'oodikone', content: {
        title: 'Oodikone',
        description: <div>Oodikone on <a href="https://toska.dev">Toska-sovelluskehitystiimin</a> web-sovellus, joka tuo opiskelijadataa Helsingin yliopiston henkilökunnan luettavaksi eri muodoissa.</div>,
        exampleTasks: <div>
          <p>
          Toteutin uusia ominaisuuksia, jotka suunnittelin yhteistyössä asiakkaiden kanssa. Toteutin ominaisuudet itsenäisesti tai tiimityönä tietokantatasolta käyttöliittymään asti. Tein myös lukuisia teknologisia
          parannuksia sovellukseen ja sen käyttämiin mikropalveluihin.
          </p>
          <ul>
            <li>
            Työkalu, jolla
           yliopiston henkilökunta voi tarkastaa opiskelijoiden suoritettuja kursseja
            </li>
            <li>Näkymä, joka näyttää kielikeskuksen kurssien suoritus- ja yritysmääriä väritetyssä taulukossa.
            </li>
            <li>
          Muutin raskaat data-laskennat worker-threadeihin jobeiksi, joiden ajaminen on keskitetysti hallittu Redisin kautta käyttäen BullMQ-kirjastoa. Optimoin myös laskenta-ajan noin 75% pienemmäksi.
            </li>
            <li>
              Sekä selvitin ja korjasin lukuisia bugeja ja ongelmia, refaktoroin koodia paremmaksi, ja paransin sovelluksen testausta.
            </li>
          </ul>
        </div>,
        technologies: 'Javascript,React,Redux,SemanticUI,NodeJS,Express,PostgreSQL,Redis,Docker,Openshift,REST API'.split(','),
        image: 'oodikone1.png'
      }
    }
  ]

  const page = content.find(page => page.name === name)
  console.log(name, content, page)
  if (!page) return <p>ERROR! NO PAGE FOUND! PAGE BROKEN</p>
  const { title, description, exampleTasks, technologies, image } = page.content
  return (
    <div>
      <h1 className="py-2">{title}</h1>
      <p className="">{description}</p>
      <div className="flex flex-row gap-2 py-2 pt-4">
        <div className="min-w-[50%]">{exampleTasks}</div>
        <div className="pl-2 sm:pl-4">
          <b>Used technologies:</b>
          <div className="flex flex-row gap-2 text-sm flex-wrap">
            {technologies.map(t => <div key={t}>{t}</div>)}
          </div>
        </div>
      </div>
      {image && <img src={`/src/assets/${image}`} alt="Picture of oodikone, an application for exploring university student data"></img>}
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
      <div className="max-w-screen-lg mx-auto p-2">
        <h1 className="pt-4">Arttu Kangas - Portfolio</h1>
        <div className="flex flex-col gap-4 pt-2 flex-row sm:flex-row"><h1 className="font-bold">Projektit:</h1>
          <div className="flex flex-row gap-4">
            {pages.map(({ name, onClick }) => (
              <div key={name} className={`${buttonStyle} ${name === page ? 'bg-sky-800' : 'bg-amber-200'}`} onClick={onClick}>{name}</div>
            ))}
          </div>
        </div>
        <div className="pt-8">
          <ShowPage name={page} />
        </div>
      </div>
    </>
  )
}

export default App
