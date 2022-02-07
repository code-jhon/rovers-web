export const mockRover = [
  {
    id: 1,
    name: 'Perseverance',
    sol: 342,
    targets: [
      {id: 1, target: "Search for habitability", desc: "Identify environments that may have been capable of supporting microbial life."},
      {id: 2, target: "Search for biosignatures", desc: "Look for signs of possible microbial life in these habitable environments, particularly in special rocks that are known to preserve these signs over time."},
      {id: 3, target: "Samples storage", desc: "Collect soil and rock samples, and store them on the surface."},
      {id: 4, target: "Pave the way for humans", desc: "Test the generation of oxygen on the Martian surface from atmospheric CO2."}
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
  },
  {
    id: 2,
    name: 'Spirit',
    sol: 2208,
    targets: [
      {id: 1, target: "Spirit Target", desc: "Search for and characterize a variety of rocks and soils that hold clues to past water activity. In particular, samples sought will include those that have minerals deposited by water-related processes such as precipitation, evaporation, sedimentary cementation or hydrothermal activity."},
      {id: 2, target: "Spirit Target", desc: "Determine the distribution and composition of minerals, rocks, and soils surrounding the landing sites."},
      {id: 3, target: "Spirit Target", desc: "Determine what geologic processes have shaped the local terrain and influenced the chemistry. Such processes could include water or wind erosion, sedimentation, hydrothermal mechanisms, volcanism, and cratering."},
      {id: 4, target: "Spirit Target", desc: "Perform calibration and validation of surface observations made by Mars Reconnaissance Orbiter instruments. This will help determine the accuracy and effectiveness of various instruments that survey Martian geology from orbit."},
      {id: 5, target: "Spirit Target", desc: "Search for iron-containing minerals, identify and quantify relative amounts of specific mineral types that contain water or were formed in water, such as iron-bearing carbonates."},
      {id: 6, target: "Spirit Target", desc: "Characterize the mineralogy and textures of rocks and soils and determine the processes that created them."},
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
      {type: "small", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/KSC-03PD-0786.jpg/260px-KSC-03PD-0786.jpg"},
      {type: "big", url: "https://img.olhardigital.com.br/wp-content/uploads/2019/05/20190529084053.jpg"}
    ],
    specifications: {
      dimensions: "1.5 m × 2.3 m × 1.6 m",
      dryMass: "185 kilograms",
      rocket: {
        name: "Delta II 7925-9.5",
        link: "https://en.wikipedia.org/wiki/Delta_II",
        launched: "11:50:01 UTC on 30 July 2020"
      },
      flightHistory: {
        launched: {
          date: "June 10, 2003, 13:58:47 EDT",
          place: "Cape Canaveral, FL",
          url: "https://es.wikipedia.org/wiki/Estaci%C3%B3n_de_la_Fuerza_Espacial_de_Cabo_Ca%C3%B1averal"
        },
        landing: 
        {
          date: "January 4, 2004, 04:35 UTC",
          place: "14.5684°S 175.472636°E",
          url: "https://geohack.toolforge.org/geohack.php?pagename=Spirit_(rover)&params=14.5684_S_175.472636_E_globe:Mars&title=Spirit+rover"
        }
      }
    },
    gallery: {
      live: {
        id: 1,
        url: "https://www.youtube.com/watch?v=7V54LRRJaGk",
        title: "Spirit live stream from mars on Youtube"
      },
      audio: [],
      images: [
        {
          id: 1, alt: "landing place", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/LandingSiteR1.jpg/1920px-LandingSiteR1.jpg"
        },
        {
          id: 2, alt: "American flag on Spirit's rock abrasion tool", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Spirit_rock_abrasion_tool.jpg"
        },
        {
          id: 3, alt: "Columbia Hills panorama from the Spirit landing site", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Columbia_Hills_from_MER-A_landing_site_PIA05200_br2.jpg/1920px-Columbia_Hills_from_MER-A_landing_site_PIA05200_br2.jpg"
        },
        {
          id: 4, alt: "Spirit's solar panels covered in dust", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mars_Spirit_rover%27s_solar_panels_covered_with_Dust_-_October_2007.jpg/1280px-Mars_Spirit_rover%27s_solar_panels_covered_with_Dust_-_October_2007.jpg"
        }
      ],
      videos: [
        {
          id: 1, alt:"Mars Rover: Spirit | National Geographic", url: "https://www.youtube.com/watch?v=Rljneh_N9WI"
        },
        {
          id: 2, alt:"NASA's Spirit Rover Completes Mission on Mars [720p]", url: "https://www.youtube.com/watch?v=txLpd7tQwuY"
        },
        {
          id: 3, alt:"Ten Years After Mars Rover Spirit Landing | TIME", url: "https://www.youtube.com/watch?v=I94gybiKUKY"
        }
      ]
    },
    location: {
      path: "https://mars.nasa.gov/mer/mission/tm-spirit/images/MERA_Sol2555_1_br2.jpg"
    },
    weather: []
  },
  {
    id: 3,
    name: 'Curiosity',
    sol: 3379,
    targets: [
      {id: 1, target: "Biological", desc: "Determine the nature and inventory of organic carbon compounds"},
      {id: 2, target: "", desc: "Investigate the chemical building blocks of life (carbon, hydrogen, nitrogen, oxygen, phosphorus, and sulfur)"},
      {id: 3, target: "", desc: "Identify features that may represent the effects of biological processes (biosignatures and biomolecules)"},
      {id: 4, target: "Geological and geochemical", desc: "Investigate the chemical, isotopic, and mineralogical composition of the Martian surface and near-surface geological materials"},
      {id: 5, target: "", desc: "Interpret the processes that have formed and modified rocks and soils"},
      {id: 6, target: "Planetary process", desc: "Assess long-timescale (i.e., 4-billion-year) Martian atmospheric evolution processes"},
      {id: 7, target: "", desc: "Determine present state, distribution, and cycling of water and carbon dioxide"},
      {id: 8, target: "Surface radiation", desc: "Characterize the broad spectrum of surface radiation, including galactic and cosmic radiation, solar proton events and secondary neutrons. As part of its exploration, it also measured the radiation exposure in the interior of the spacecraft as it traveled to Mars, and it is continuing radiation measurements as it explores the surface of Mars. This data would be important for a future crewed mission."},
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
      {type: "small", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg/260px-Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg"},
      {type: "big", url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/PIA19808-MarsCuriosityRover-AeolisMons-BuckskinRock-20150805.jpg"}
    ],
    specifications: {
      dimensions: "2.9 m × 2.7 m × 2.2 m",
      dryMass: "889 kilograms",
      rocket: {
        name: "Atlas V 541",
        link: "https://en.wikipedia.org/wiki/Atlas_V",
        launched: "26 November 2011, 15:02 UTC"
      },
      flightHistory: {
        launched: {
          date: "26 November 2011, 15:02 UTC",
          place: "Cape Canaveral, FL",
          url: "https://es.wikipedia.org/wiki/Estaci%C3%B3n_de_la_Fuerza_Espacial_de_Cabo_Ca%C3%B1averal"
        },
        landing: 
        {
          date: "6 August 2012, 05:17 UTC",
          place: "Gale crater, Mars",
          url: "https://en.wikipedia.org/wiki/Gale_(crater)"
        }
      }
    },
    gallery: {
      live: {
        id: 1,
        url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/dc/Mars_Science_Laboratory_Curiosity_Rover_Animation.webm/Mars_Science_Laboratory_Curiosity_Rover_Animation.webm.480p.vp9.webm",
        title: "Curiosity live stream from mars"
      },
      audio: [],
      images: [
        {
          id: 1, alt: "High-Resolution Self-Portrait by Curiosity Rover Arm Camera", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/PIA16239_High-Resolution_Self-Portrait_by_Curiosity_Rover_Arm_Camera.jpg/431px-PIA16239_High-Resolution_Self-Portrait_by_Curiosity_Rover_Arm_Camera.jpg"
        },
        {
          id: 2, alt: "Sol 3070 - MAHLI", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/MSL_Sol_3070_-_MAHLI_%28Version_2%29_%2851084526931%29.jpg/800px-MSL_Sol_3070_-_MAHLI_%28Version_2%29_%2851084526931%29.jpg"
        },
        {
          id: 3, alt: "Mars Curiosity Rover-Drilling", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MarsCuriosityRover-Drilling-01.jpg/600px-MarsCuriosityRover-Drilling-01.jpg"
        },
        {
          id: 4, alt: "Mars Curiosity Rover-Sayunyei Rock", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/PIA16711-MarsCuriosityRover-SayunyeiRock-20130122wh.jpg/800px-PIA16711-MarsCuriosityRover-SayunyeiRock-20130122wh.jpg"
        }
      ],
      videos: [
        {
          id: 1, alt:"The descent of curiosity", url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/07/The_Descent_of_the_Curiosity_Rover_HD.ogv/The_Descent_of_the_Curiosity_Rover_HD.ogv.480p.vp9.webm"
        },
      ]
    },
    location: {
      current: "https://mars.nasa.gov/maps/location/?mission=MSL&site=NOW",
      path: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mars_Map.JPG/620px-Mars_Map.JPG"
    },
    weather: [
      {sol: 3375, date: "Feb. 2, 2022", airTemperature: {max: "0 °C", min: "-72 °C"}, pressure: "713 Pa", sunrise: "05:23:00", sunset: "17:20:04"},
      {sol: 3374, date: "Feb. 1, 2022", airTemperature: {max: "0 °C", min: "-71 °C"}, pressure: "710 Pa", sunrise: "05:24:00", sunset: "17:20:31"},
      {sol: 3373, date: "Jan. 31, 2022", airTemperature: {max: "-2 °C", min: "-71 °C"}, pressure: "710 Pa", sunrise: "05:24:00", sunset: "17:20:57"},
      {sol: 3372, date: "Jan. 30, 2022", airTemperature: {max: "-2 °C", min: "-72 °C"}, pressure: "710 Pa", sunrise: "05:24:00", sunset: "17:20:24"},
      {sol: 3371, date: "Jan. 29, 2022", airTemperature: {max: "-8 °C", min: "-72 °C"}, pressure: "711 Pa", sunrise: "05:24:00", sunset: "17:20:51"},
      {sol: 3370, date: "Jan. 28, 2022", airTemperature: {max: "-5 °C", min: "-71 °C"}, pressure: "710 Pa", sunrise: "05:24:00", sunset: "17:20:24"},
      {sol: 3369, date: "Jan. 27, 2022", airTemperature: {max: "-6 °C", min: "-72 °C"}, pressure: "710 Pa", sunrise: "05:25:00", sunset: "17:20:51"},
    ]
  },
]
