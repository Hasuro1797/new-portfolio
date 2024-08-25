import { ProyectListType } from "../../declaration";

export const projecList: ProyectListType = {
  data: [
    {
      id: 1,
      title: "APROCTUR - Ihuamaca",
      image: "/assets/images/projects/ihuamaca.webp",
      state: "Active",
      description: {
        en: "Landing page dedicated to the experiential experience of community tourism in the tropical forest of northern Peru, provided by the agency.",
        es: "Landing page dedicada a la experiencia vivencial del turismo comunitario en el bosque tropical del norte del Perú, proporcionada por la agencia."
      },
      type: "Project",
      technologies:[
        {
          id: 0,
          label: "React",
          value: "react"
        },
        {
          id: 1,
          label: "Tailwind CSS",
          value: "tailwind"
        },
      ],
      code: null,
      link: "https://aprocturihuamaca.com/"
    },
    {
      id: 2,
      title: "Gemma - Ciudad comercial",
      image: "/assets/images/projects/gemma.webp",
      state: "Active",
      description: {
        en: "Landing page specialized in the sale of commercial premises located in the northern area of ​​Arequipa, Peru.",
        es: "Landing page especializada en la venta de locales comerciales ubicados en la zona norte de Arequipa, Perú."
      },
      type: "Project",
      technologies:[
        {
          id: 0,
          label: "React",
          value: "react"
        },
        {
          id: 1,
          label: "Tailwind CSS",
          value: "tailwind"
        },
        {
          id: 5,
          label: "GraphQL",
          value: "graphql"
        },
        {
          id: 6,
          label: "Strapi",
          value: "strapi"
        }
      ],
      code: null,
      link: "http://gemmaperu.com/"
    },
    {
      id: 3,
      title: "GOAR SAC - Consultoría y construcción",
      image: "/assets/images/projects/goar.webp",
      state: "Disable",
      description: {
        en: "Information platform of the construction company with more than 13 years of experience, which displays its projects, mission, vision, services, among other details.",
        es: "Plataforma informativa de la empresa constructora con más de 13 años de experiencia, que exhibe sus proyectos, misión, visión, servicios, entre otros detalles."
      },
      type: "Project",
      technologies:[
        {
          id: 0,
          label: "React",
          value: "react"
        },
        {
          id: 1,
          label: "Tailwind CSS",
          value: "tailwind"
        },
        {
          id: 5,
          label: "GraphQL",
          value: "graphql"
        },
        {
          id: 6,
          label: "Strapi",
          value: "strapi"
        }
      ],
      code: null,
      link: "https://goar.pe/"
    },
    {
      id: 4,
      title: "GHG",
      image: "/assets/images/projects/ghg.webp",
      state: "Active",
      description: {
        en: "Information platform about GHG, a business group that offers services in retail, construction, consulting, brokerage and virtual training.",
        es: "Plataforma informativa sobre GHG, un grupo empresarial que ofrece servicios en retail, construcción, consultoría, corretaje y capacitación virtual."
      },
      type: "Project",
      technologies:[
        {
          id: 2,
          label: "Wordpress",
          value: "wordpress"
        }
      ],
      code: null,
      link: "https://ghg.com.pe/"
    },
    {
      id: 5,
      title: "Territorial Inmobiliaria",
      image: "/assets/images/projects/territorial.webp",
      state: "Active",
      description: {
        en: "Platform specialized in real estate brokerage, which offers memberships for real estate agents. Here you can publish properties available for rent or sale.",
        es: "Plataforma especializada en corretaje inmobiliario, que ofrece membresías para agentes inmobiliarios. Aquí pueden publicar propiedades disponibles para alquiler o venta."
      },
      type: "Project",
      technologies:[
        {
          id: 3,
          label: "Next.js",
          value: "next"
        },
        {
          id: 8,
          label: "Redux",
          value: "redux"
        },
        {
          id: 5,
          label: "GraphQL",
          value: "graphql"
        },
        {
          id: 9,
          label: "CSS3",
          value: "css3"
        }
      ],
      code: null,
      link: "https://territorialinmobiliaria.com/"
    },
    {
      id: 6,
      title: "Libooks",
      image: "/assets/images/projects/libooks.webp",
      state: "Dead",
      description: {
        en: "E-commerce platform dedicated to the sale of books, works of art, magazines and more, including limited editions.",
        es: "Plataforma de comercio electrónico dedicada a la venta de libros, obras de arte, revistas y más, incluyendo ediciones limitadas."
      },
      type: "Project",
      technologies:[
        {
          id: 3,
          label: "Next.js",
          value: "next"
        },
        {
          id: 5,
          label: "GraphQL",
          value: "graphql"
        },
        {
          id: 4,
          label: "Style components",
          value: "stylecomponent"
        },
        {
          id: 6,
          label: "Strapi",
          value: "strapi"
        }
      ],
      code: null,
      link: null
    },
    {
      id: 7,
      title: "Consultance Space",
      image: "/assets/images/projects/consultance.webp",
      state: "Disable",
      description: {
        en: "It is a developing platform for medical management and rapprochement between professionals and patients.",
        es: "Es una plataforma en desarrollo de gestión médica y acercamiento entre profesionales y pacientes."
      },
      type: "Project",
      technologies:[
        {
          id: 0,
          label: "React",
          value: "react"
        },
        {
          id: 7,
          label: "ExpressJs",
          value: "express"
        },
        {
          id: 8,
          label: "Redux",
          value: "redux"
        },
        {
          id: 9,
          label: "CSS3",
          value: "css3"
        }
      ],
      code: "https://github.com/RodrigoToledo5/ConsultanceSpace",
      link: null
    },
    {
      id: 8,
      title: "WOW Games",
      image: "/assets/images/projects/wowgames.webp",
      state: "Disable",
      description: {
        en: "Video game catalog organized by categories, with the possibility of adding more titles and accessing detailed information about each one.",
        es: "Catálogo de videojuegos organizado por categorías, con la posibilidad de añadir más títulos y acceder a información detallada sobre cada uno."
      },
      type: "Project",
      technologies:[
        {
          id: 0,
          label: "React",
          value: "react"
        },
        {
          id: 7,
          label: "ExpressJs",
          value: "express"
        },
        {
          id: 8,
          label: "Redux",
          value: "redux"
        },
        {
          id: 9,
          label: "CSS3",
          value: "css3"
        }
      ],
      code: "https://github.com/Hasuro1797/AppVideogames",
      link: null
    },
    {
      id: 9,
      title: "Rick and Morty",
      image: "/assets/images/projects/rickandmortyapi.webp",
      state: "Active",
      description: {
        en: "This app uses the Rick and Morty API to provide detailed information about characters, episodes, and locations from the Rick and Morty universe.",
        es: "Esta aplicación utiliza la API de Rick and Morty para proporcionar información detallada sobre personajes, episodios y ubicaciones del universo de Rick and Morty."
      },
      type: "Test",
      technologies:[
        {
          id: 0,
          label: "React",
          value: "react"
        },
        {
          id: 1,
          label: "Tailwind CSS",
          value: "tailwind"
        },
      ],
      code: "https://github.com/Hasuro1797/rick-and-morty-app",
      link: "https://rick-and-morty-cjeg.onrender.com/"
    },
    {
      id: 10,
      title: "PokeApp",
      image: "/assets/images/projects/pokeapi.webp",
      state: "Active",
      description: {
        en: "Project using the Pokémon API to develop an application that offers detailed data about different Pokémon, such as abilities, statistics, and battle types.",
        es: "Proyecto utilizando la API de Pokémon para desarrollar una aplicación que ofrece datos detallados sobre diferentes Pokémon, como habilidades, estadísticas y tipos de combate."
      },
      type: "Project",
      technologies:[
        {
          id: 0,
          label: "React",
          value: "react"
        },
        {
          id: 8,
          label: "Redux",
          value: "redux"
        },
        {
          id: 9,
          label: "CSS3",
          value: "css3"
        }
      ],
      code: "https://github.com/Hasuro1797/PokeApp",
      link: "https://poke-app-gold.vercel.app/"
    },
  ]
}