export const oodikoneContent = {
  name: 'oodikone', content: {
    title: 'Oodikone',
    description: <div><p>Oodikone on <a href="https://toska.dev">Toska-devaajatiimin</a> web-sovellus, joka tuo opiskelijadataa Helsingin yliopiston henkilökunnan luettavaksi eri muodoissa.</p>
      <p>Oodikoneen repositorio: <a href="https://github.com/UniversityOfHelsinkiCS/oodikone">https://github.com/UniversityOfHelsinkiCS/oodikone</a></p></div>,
    exampleTasks: <div>
      <p>
        Toteutin sovellukseen uusia ominaisuuksia, jotka suunnittelin yhteistyössä asiakkaiden kanssa. Toteutin ominaisuudet itsenäisesti tai tiimityönä tietokantatasolta käyttöliittymään asti. Tein myös lukuisia
        parannuksia sovellukseen ja sen käyttämiin mikropalveluihin.
      </p>
      <p><b>Tein esimerkiksi:</b></p>
      <ul>
        <li>
          Työkalun, jolla
          yliopiston henkilökunta voi tarkastaa opiskelijoiden suoritettuja kursseja
        </li>
        <li>Näkymän, joka näyttää kielikeskuksen kurssien suoritus- ja yritysmääriä väritetyssä taulukossa.
        </li>
        <li>
          Muutin raskaat data-laskennat worker-threadeihin jobeiksi, joiden ajaminen on keskitetysti hallittu Redisin kautta käyttäen BullMQ-kirjastoa. Optimoin myös laskenta-ajan noin 75% pienemmäksi.
        </li>
        <li>
          Sekä selvitin ja korjasin lukuisia bugeja ja ongelmia, refaktoroin koodia paremmaksi, ja paransin sovelluksen testausta.
        </li>
      </ul>
    </div>,
    technologies: 'Javascript,React,Redux,SemanticUI,NodeJS,Express,PostgreSQL,Redis,Docker,Openshift,REST API,Cypress,GitHub Actions'.split(','),
    images: ['oodikone1.png']
  }
}