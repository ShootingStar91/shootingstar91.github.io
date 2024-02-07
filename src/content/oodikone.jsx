export const oodikoneContent = {
  name: 'oodikone', content: {
    title: 'Oodikone',
    description: <div><p>Oodikone is a web-application built and maintained by <a href="https://toska.dev">TOSKA developer team working within the University of Helsinki</a>.
      The application provides various ways for the University staff to view student data.</p>
    <p>Repository: <a href="https://github.com/UniversityOfHelsinkiCS/oodikone">https://github.com/UniversityOfHelsinkiCS/oodikone</a></p></div>,
    exampleTasks: <div>
      <p>
        {`I built multiple new features into the application, discussing with customers and independently or with my colleagues planning and implementing the feature from database-level to user interface.
        I also worked on some microservices used by the application and the team's other applications.`}
      </p>
      <p><b>Example tasks:</b></p>
      <ul>
        <li>
          A tool for checking students completed courses
        </li>
        <li>A table view displaying completions and enrollments of over 600 courses of Language Center
        </li>
        <li>
          I optimized heavy computations and changed them into jobs ran from a queue in worker threads, allowing the server to respond to requests while the computations are running
        </li>
        <li>
          Fixed multiple bugs and implemented improvements and fixes in old features, as well as refactoring code and improving documentation.
        </li>
      </ul>
    </div>,
    technologies: 'Javascript,React,Redux,SemanticUI,NodeJS,Express,PostgreSQL,Redis,Docker,Openshift,REST API,Cypress,GitHub Actions'.split(','),
    images: ['oodikone1.png']
  }
}