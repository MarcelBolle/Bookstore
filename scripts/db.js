let books = [
  {
    "name": "Der Schatten im Spiegel",
    "author": "Jonas Nebel",
    "likes": 2340,
    "liked": true,
    "price": 15.99,
    "publishedYear": 2023,
    "genre": "Thriller",
    "image": "assets/img/covers/Der_Schatten_im_Spiegel.png",
    "comments": [
      {
        "name": "KrimiMimi",
        "comment": "Ich habe bis 3 Uhr morgens gelesen, der Plottwist am Ende war unfassbar!"
      },
      {
        "name": "ShadowHunter",
        "comment": "Gute Atmosphäre, aber der Mittelteil war etwas langatmig."
      },
      {
        "name": "PageTurner99",
        "comment": "Nebel schreibt einfach die besten Psychothriller. Gänsehaut pur."
      }
    ]
  },
  {
    "name": "Code Omega: Der Aufstand",
    "author": "Tanja Tech",
    "likes": 4500,
    "liked": true,
    "price": 18.50,
    "publishedYear": 2021,
    "genre": "Science-Fiction",
    "image": "assets/img/covers/Code_Omega.png",
    "comments": [
      {
        "name": "CyberPunk_X",
        "comment": "Endlich mal eine KI-Dystopie, die logisch erklärt ist."
      },
      {
        "name": "NerdAlert",
        "comment": "Die technischen Details sind beeindruckend recherchiert."
      },
      {
        "name": "FutureVision",
        "comment": "Ein visionäres Meisterwerk, absolut empfehlenswert."
      },
      {
        "name": "SpaceCowboy",
        "comment": "Mir war es etwas zu technisch, aber die Action stimmt."
      }
    ]
  },
  {
    "name": "Sommerwind in der Toskana",
    "author": "Maria Dolce",
    "likes": 890,
    "liked": false,
    "price": 12.99,
    "publishedYear": 2019,
    "genre": "Romantik",
    "image": "assets/img/covers/Sommerwind.png",
    "comments": [
      {
        "name": "Herzblatt",
        "comment": "Perfekte Lektüre für den Strandurlaub, sehr leicht und flockig."
      },
      {
        "name": "RomanceReader",
        "comment": "Die Protagonistin hat mich manchmal etwas genervt, aber das Setting ist traumhaft."
      }
    ]
  },
  {
    "name": "Die 10 Säulen des Erfolgs",
    "author": "Dr. Mark Reacher",
    "likes": 320,
    "liked": false,
    "price": 24.90,
    "publishedYear": 2022,
    "genre": "Sachbuch",
    "image": "assets/img/covers/10Säulen_des_Erfolgs.png",
    "comments": []
  },
  {
    "name": "Blutmond über den Karpaten",
    "author": "Viktor Graf",
    "likes": 666,
    "liked": true,
    "price": 14.95,
    "publishedYear": 2015,
    "genre": "Horror",
    "image": "assets/img/covers/Blutmond.png",
    "comments": [
      {
        "name": "DarkSouls",
        "comment": "Nichts für schwache Nerven. Ich musste das Licht anlassen."
      },
      {
        "name": "VampireFan",
        "comment": "Klassischer Grusel, wunderbar altmodisch geschrieben."
      }
    ]
  },
  {
    "name": "Das verborgene Tal der Elfen",
    "author": "Finja Wald",
    "likes": 1750,
    "liked": true,
    "price": 21.00,
    "publishedYear": 2020,
    "genre": "Fantasy",
    "image": "assets/img/covers/Tal_der_Elfen.png",
    "comments": [
      {
        "name": "MagicWand",
        "comment": "Das Worldbuilding ist der Wahnsinn, ich wollte gar nicht mehr zurück in die Realität."
      },
      {
        "name": "FantasyKing",
        "comment": "Vergleichbar mit Tolkien, nur moderner."
      },
      {
        "name": "DragonFly",
        "comment": "Die Charaktere sind mir richtig ans Herz gewachsen."
      }
    ]
  },
  {
    "name": "Mord im Orient-Bistro",
    "author": "Agatha Klein",
    "likes": 1120,
    "liked": false,
    "price": 9.99,
    "publishedYear": 2018,
    "genre": "Krimi",
    "image": "assets/img/covers/Mord_im_Orient_Bistro.png",
    "comments": [
      {
        "name": "SherlockHomies",
        "comment": "Ein klassischer Whodunit, sehr clever konstruiert."
      }
    ]
  },
  {
    "name": "Vegan Kochen für Faule",
    "author": "Leo Lauch",
    "likes": 2890,
    "liked": true,
    "price": 29.95,
    "publishedYear": 2023,
    "genre": "Kochbuch",
    "image": "assets/img/covers/Vegan_Kochen.png",
    "comments": [
      {
        "name": "HealthyLiving",
        "comment": "Die Rezepte gehen wirklich schnell und schmecken super!"
      },
      {
        "name": "VeggieGirl",
        "comment": "Tolle Fotos, aber manche Zutaten bekommt man nur schwer."
      },
      {
        "name": "KochProfi",
        "comment": "Gute Basics, perfekt für Einsteiger."
      },
      {
        "name": "BusyMom",
        "comment": "Endlich gesunde Küche, die in meinen Zeitplan passt."
      }
    ]
  },
  {
    "name": "Die Geschichte der Zeitmessung",
    "author": "Prof. Albert Uhr",
    "likes": 450,
    "liked": false,
    "price": 35.00,
    "publishedYear": 2010,
    "genre": "Wissenschaft",
    "image": "assets/img/covers/Geschichte_der_Zeitmessung.png",
    "comments": [
      {
        "name": "Student2020",
        "comment": "Sehr trocken, aber extrem informativ für meine Hausarbeit."
      },
      {
        "name": "HistoryBuff",
        "comment": "Ein Standardwerk, gehört in jedes Regal."
      }
    ]
  },
  {
    "name": "Chaos im Klassenzimmer",
    "author": "Max Spaß",
    "likes": 980,
    "liked": true,
    "price": 11.50,
    "publishedYear": 2024,
    "genre": "Kinderbuch",
    "image": "assets/img/covers/Chaos_im_Klassenzimmer.png",
    "comments": [
      {
        "name": "MamaBear",
        "comment": "Mein Sohn hat sich kaputtgelacht. Tolle Illustrationen."
      },
      {
        "name": "LeseratteJunior",
        "comment": "Das lustigste Buch, das ich je gelesen habe!"
      }
    ]
  }
];