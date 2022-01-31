export const mockRover = {
  id: 1,
  name: 'Perseverance',
  targets: [
    {id: 1, target: "Búsqueda de habitabilidad", desc: "identificar ambientes que pudieron ser capaces de albergar vida microbiana."},
    {id: 2, target: "Búsqueda de biofirmas", desc: "buscar signos de posible vida microbiana en esos ambientes habitables, particularmente en rocas especiales que se conoce que preservan estos signos en el tiempo."},
    {id: 3, target: "Almacenamiento de muestras", desc: "recoger muestras de tierra y roca, y almacenarlas en la superficie."},
    {id: 4, target: "Allanar el camino a los humanos", desc: "probar la generación de oxígeno en la superficie marciana a partir del CO2 atmosférico."}
  ],
  owner: {
    name: "NASA",
    url: "https://en.wikipedia.org/wiki/NASA",
  },
  manufacturer: {
    name: "	Jet Propulsion Laboratory",
    url: "https://en.wikipedia.org/wiki/Perseverance_(rover)#:~:text=Manufacturer-,Jet%20Propulsion%20Laboratory,-Specifications"
  },
  images: [
    {type: "small", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Perseverance_Landing_Skycrane.jpg/320px-Perseverance_Landing_Skycrane.jpg"},
    {type: "big", url: "https://hipertextual.com/wp-content/uploads/2020/07/hipertextual-curiosidades-sobre-perseverance-rover-mision-mars-2020-2020012223.png"}
  ],
  specifications: {
    dimensions: "2.9 m × 2.7 m × 2.2 m",
    dryMass: "1,025 kilograms",
    rocket: {
      name: "Atlas V 541",
      link: "https://en.wikipedia.org/wiki/Atlas_V",
      launched: "11:50:01 UTC on 30 July 2020"
    },
    flightHistory: {
      launched: {
        date: "30th July 2020, 11:50 UTC",
        place: "Cape Canaveral, FL",
        url: "https://es.wikipedia.org/wiki/Estaci%C3%B3n_de_la_Fuerza_Espacial_de_Cabo_Ca%C3%B1averal"
      },
      landing: 
      {
        date: "18th February de 2021, 20:56 UTC",
        place: "Cráter Jezero",
        url: "http://tools.wmflabs.org/geohack/geohack.php?language=es&pagename=Perseverance_(rover)&params=18.4447_N_77.4508_E_globe:Mars"
      }
    }
  },
  gallery: {
    live: {
      id: 1,
      url: "https://www.youtube.com/watch?v=ppx07jyGNGY",
      title: "Perseverance live stream from mars on Youtube"
    },
    audio: [
      {
        id: 1, alt: "perseverance record", url: "https://upload.wikimedia.org/wikipedia/commons/d/da/Sounds_of_Perseverance_Mars_rover_driving.oga"
      }
    ],
    images: [
      {
        id: 1, alt: "Perseverance rover", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PIA19672-Mars2020Rover-ScienceInstruments-20150610.jpg/1024px-PIA19672-Mars2020Rover-ScienceInstruments-20150610.jpg"
      },
      {
        id: 2, alt: "Mapping Perseverance's First Six Samples", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/26464_samples_map_cores_web.jpg/1024px-26464_samples_map_cores_web.jpg"
      },
      {
        id: 3, alt: "Mapping Perseverance's First Six Samples", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/26464_samples_map_cores_web.jpg/1024px-26464_samples_map_cores_web.jpg"
      },
      {
        id: 4, alt: "Mapping Perseverance's First Six Samples", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/26464_samples_map_cores_web.jpg/1024px-26464_samples_map_cores_web.jpg"
      }
    ],
    videos: [
      {
        id: 1, alt:"Animation landing", url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d1/NASA%27s_Mars_2020_Perseverance_Rover_Landing_Animations-rzmd7RouGrM.webm/NASA%27s_Mars_2020_Perseverance_Rover_Landing_Animations-rzmd7RouGrM.webm.480p.vp9.webm"
      },
      {
        id: 2, alt:"Animation displaying the scientific instruments", url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ce/PIA24426-MarsPerseveranceRover-20210216.webm/PIA24426-MarsPerseveranceRover-20210216.webm.360p.vp9.webm"
      },
      {
        id: 3, alt:"Watson camera views rocks", url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/09/PIA24641-MarsPerseveranceRover-WatsonCameraViewsRocks-20210510.webm/PIA24641-MarsPerseveranceRover-WatsonCameraViewsRocks-20210510.webm.480p.vp9.webm"
      }
    ]
  },
  location: {
    current: "https://mars.nasa.gov/maps/location/?mission=M20&site=NOW",
    path: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Locations_and_future_destinations_of_Perseverance_in_Jezero.jpg/1280px-Locations_and_future_destinations_of_Perseverance_in_Jezero.jpg"
  },
  weather: [
    {sol: 315, date: "Jan. 7, 2022", airTemperature: {max: "-6 °C", min: "-77 °C"}, pressure: "621.2 Pa", sunrise: "05:11:13", sunset: "17:40:04"},
    {sol: 314, date: "Jan. 6, 2022", airTemperature: {max: "-6 °C", min: "-81 °C"}, pressure: "626.0 Pa", sunrise: "05:11:05", sunset: "17:40:31"},
    {sol: 313, date: "Jan. 5, 2022", airTemperature: {max: "-6 °C", min: "-78 °C"}, pressure: "624.5 Pa", sunrise: "05:10:57", sunset: "17:40:57"},
    {sol: 312, date: "Jan. 4, 2022", airTemperature: {max: "-6 °C", min: "-82 °C"}, pressure: "625.9 Pa", sunrise: "05:10:49", sunset: "17:41:24"},
    {sol: 311, date: "Jan. 3, 2022", airTemperature: {max: "-10 °C", min: "-82 °C"}, pressure: "625.1 Pa", sunrise: "05:10:42", sunset: "17:41:51"},
  ]
}