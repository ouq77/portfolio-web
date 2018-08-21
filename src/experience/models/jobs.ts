import {Job} from '../definitions/job';

/**
 * Array of Jobs for the Experience section
 * @type {Job[]}
 */
export const JOBS: Array<Job> = [
  {
    content: '<p>Currently on assignment with an Accenture client where the tech stack includes <b>Angular</b>, <b>Java Spring Boot</b> and <b>Azure</b>.</p>',
    institution: {
      location: 'Wellington, New Zealand',
      name: 'Accenture',
      url: 'https://www.accenture.com/nz-en/',
    },
    title: 'Full-stack Developer (Contract)',
    year: {
      from: 'Jul 2018',
      to: 'Present',
    },
  },
  {
    content: '<p>Joined Stuff (Fairfax Media) as a <b>Full-Stack Engineer</b> in September 2017 and worked in a team focused on building a new curation tool to satisfy several specific editorial tasks.</p><p>The application was written in <b>Typescript</b> using <b>Angular</b> and the <b>Angular Material Framework</b> (including <b>Jasmine</b> Unit tests and <b>Protractor</b> E2E tests), served via a <b>Node.js</b> back-end, which interfaced with various Stuff APIs, while deployed in a <b>Docker</b> container on <b>AWS</b> infrastructure. <b>CI/CD</b> and deployment happened as part of a <b>Concourse</b> pipeline.</p><p>Also worked on an integration with <b>IBM Watson NLU</b> to enable content categorisation via keywords/entities, which was then ingested into an <b>Elasticsearch</b> database and used in a "Related Content" service.</p>',
    institution: {
      location: 'Wellington, New Zealand',
      name: 'Stuff',
      url: 'https://www.stuff.co.nz/',
    },
    title: 'Full-stack Engineer',
    year: {
      from: 'Sep 2017',
      to: 'Jul 2018',
    },
  }, {
    content: '<p>Completed a contract assignment (extended 3 times) with Fairfax Media as a <b>JavaScript Developer</b> in one of the Wellington-based development teams.</p><p>I was closely involved in the implementation of a new <b>React</b> based front-end for the Stuff.co.nz news site. The application, including the back-end interfaces like <b>GraphQL</b>, is served via <b>Express</b> in a <b>Node.js</b> runtime.</p><p>Other projects included the implementation of an implicit flow client-side <b>OpenID Connect</b> login, as well as integrating the <b>Nativform</b> (FFX Native platform) advertising SDK.</p>',
    institution: {
      location: 'Wellington, New Zealand',
      name: 'Fairfax Media (now Stuff)',
      url: 'https://www.stuff.co.nz/',
    },
    title: 'JavaScript Developer (Contract)',
    year: {
      from: 'Apr 2016',
      to: 'Jun 2017',
    },
  }, {
    content: '<p>Worked as a <b>UI Developer</b> at Westpac NZ, where I was involved in various projects, including <b><i>Direct from Account&trade;</i></b>, <b><i>Westpac Exchange&trade;</i></b> and <b><i>Westpac One&reg;</i></b>.</p><p>The server-side development environment was <b>Java</b>, while the client-side was built using a variety of <b>JavaScript technologies</b> and <b>frameworks</b>, most notably <b>RequireJS</b>, <b>Backbone</b>, Marionette, <b>Underscore</b>, <b>AngularJS</b>, SCSS, and, during development, <b>Node.js</b>.</p><p>Build and Testing tools included <b>Grunt</b>, Maven, Jenkins, JUnit, Cucumber, <b>Jasmine</b> and <b>Karma</b>.</p>',
    institution: {
      location: 'Wellington, New Zealand',
      name: 'Westpac NZ Ltd',
      url: 'https://www.westpac.co.nz',
    },
    title: 'Analyst Programmer (UI)',
    year: {
      from: 'Jun 2014',
      to: 'Mar 2016',
    },
  }, {
    accomplishments: '<p>Worked alongside members of the hardware team on the implementation of a <b>RESTful JSON</b> communication protocol over HTTP for the 2nd Generation On-board Units.</p>',
    content: '<p>Employed as a Java Developer at EROAD, New Zealand\'s leading transport technology and services company. Worked in an <b>Agile environment</b> developing and unit testing enhancements, which involved user <b>interface</b>, <b>web services</b> and <b>back-end integration</b> for EROAD\'s <b>Cloud Based SaaS application</b>.</p><p>The development environment was <b>Java</b>, and frameworks and technologies included <b>Spring MVC</b>, <b>JSP</b>, <b>JQuery</b>, <b>RESTful</b> web services over <b>HTTP</b>, <b>JAX-WS/JAXB</b> web services over <b>SOAP</b>, <b>Hibernate</b> and <b>PostgreSQL</b>.</p><p>Mainly functioned within the Tax and Localisation team, which included the <b>GIS</b> and mapping layer.</p>',
    institution: {
      location: 'Auckland, New Zealand',
      name: 'EROAD',
      url: 'http://www.eroad.co.nz',
    },
    title: 'Senior Java Developer',
    year: {
      from: 'Jan 2013',
      to: 'Apr 2014',
    },
  }, {
    accomplishments: '<p>Was involved in a major overhaul of the UI for the PPM System, which, amongst other tasks, included the implementation of a <b>WYSIWYG editor</b> inside GWT. Worked with my team in New Zealand alongside teams in the US and China to re-build the data collection component.</p>',
    content: '<p>Worked as a Software Developer at the New Zealand campus of Rockwell Automation. Functioned within an <b>agile team</b> developing <b>user interface</b> elements as well as <b>web services</b> and <b>back-end integration</b> for a performance management platform used in a variety of industries worldwide. The deployment of this <b>multi-tier application</b> consisted of a web environment (<b>Tomcat</b> &amp; <b>JBoss</b>), on the <b>Java EE technology stack</b>.</p><p>The development environment was <b>Java</b>, utilising third-party technologies such as <b>GWT</b>, to deliver a rich user experience.</p>',
    institution: {
      location: 'Hamilton, New Zealand',
      name: 'Rockwell',
      url: 'http://nz.rockwellautomation.com',
    },
    title: 'Software Developer',
    year: {
      from: 'Jul 2011',
      to: 'Dec 2012',
    },
  }, {
    accomplishments: '<p>Integrated an open source <b>mobile framework</b> (WURFL) into the Quirk software stack enabling development of mobile client solutions. Converted <b>Google\'s server-side JSP tracking</b> code to fit into the Quirk stack and WebWork framework.</p><p>Developed a <b>live tracking solution</b> of a  colleague\'s mountain bike race via <b>GPS</b>, Vodacom API and <b>Google Maps API</b>.</p>',
    content: '<p>Worked as a Software Engineer at the Cape Town office of Quirk developing <b>Java</b> (<b>Java EE</b>) <b>web-based applications</b> to client specifications within specified deadlines. Projects included <b>SEO optimised websites</b> and <b>mobile websites</b>, <b>custom built CMS</b> solutions, <b>Facebook Applications</b>, integrations with <b>Twitter</b> and other <b>3rd party APIs</b>, <b>RSS Feeds</b> (both generating and parsing). The development environment was <b>Java</b>, utilising the <b>MVC WebWork</b> framework and <b>Freemarker Template</b> engine, backed by <b>Spring</b>, <b>MySQL</b> and <b>Hibernate</b>.</p><p>Maintained and supported existing applications. Interfaced with clients regularly for presentations and training. Compiled client facing documentation where required. Performed on-call server monitoring duties.</p>',
    institution: {
      location: 'Cape Town, South Africa',
      name: 'Quirk',
      url: 'http://www.quirk.biz',
    },
    title: 'Software Engineer',
    video: {
      videoTitle: 'Team Quirk Live Tracker',
      videoUrl: 'https://www.youtube.com/embed/34Tb79-2ekc?rel=0',
    },
    year: {
      from: 'Nov 2008',
      to: 'Apr 2011',
    },
  }, {
    content: '<p>Developed <b>Java ME</b> applications for <b>embedded systems</b>. Was also involved with the server-side software and mobile sites to support the download and installation thereof. Maintained existing software.</p>',
    institution: {
      location: 'Cape Town, South Africa',
      name: 'Cellsmart',
    },
    title: 'Java Developer',
    year: {
      from: 'Feb 2008',
      to: 'Oct 2008',
    },
  }, {
    content: '<p><br><i class="icon-globe icon-2x"></i><i class="icon-plus"></i><i class="icon-flight icon-2x"></i></p>',
    institution: {
      location: 'Cape Town & Johannesburg, South Africa',
      name: 'South African Airways',
    },
    title: 'Flight Attendant',
    year: {
      from: 'Dec 1997',
      to: 'Jan 2006',
    },
  },
];
