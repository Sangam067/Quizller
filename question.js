const questions = [
  // --- 1 to 25: World Capitals ---
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correctIndex: 2 },//canberra
  { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correctIndex: 1 },//ottawa
  { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"], correctIndex: 3 },//brasilia
  { question: "What is the capital of Japan?", options: ["Tokyo", "Osaka", "Kyoto", "Yokohama"], correctIndex: 0 },//tokyo
  { question: "What is the capital of Kazakhstan?", options: ["Almaty", "Astana", "Tashkent", "Bishkek"], correctIndex: 1 },//astana
  { question: "What is the capital of Switzerland?", options: ["Zurich", "Geneva", "Bern", "Basel"], correctIndex: 2 },//bern almost almost almost
  { question: "What is the capital of New Zealand?", options: ["Auckland", "Christchurch", "Hamilton", "Wellington"], correctIndex: 3 },//wellington
  { question: "What is the capital of Turkey?", options: ["Ankara", "Istanbul", "Izmir", "Antalya"], correctIndex: 0 }, //ankara (ankara messi)
  { question: "What is the capital of South Korea?", options: ["Busan", "Incheon", "Seoul", "Daegu"], correctIndex: 2 }, //seoul
  { question: "What is the capital of Morocco?", options: ["Casablanca", "Rabat", "Marrakech", "Fez"], correctIndex: 1 },//rabat
  { question: "What is the capital of Nigeria?", options: ["Lagos", "Kano", "Ibadan", "Abuja"], correctIndex: 3 },//abuja almost almost almost
  { question: "What is the capital of Peru?", options: ["Lima", "Cusco", "Arequipa", "Trujillo"], correctIndex: 0 },//lima (just like llama)
  { question: "What is the capital of Norway?", options: ["Bergen", "Oslo", "Trondheim", "Stavanger"], correctIndex: 1 },//oslo (like oscar bobb)
  { question: "What is the capital of Thailand?", options: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"], correctIndex: 2 },//bangkok
  { question: "What is the capital of Argentina?", options: ["Córdoba", "Rosario", "Mendoza", "Buenos Aires"], correctIndex: 3 },//buenos aires
  { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], correctIndex: 0 },//cairo (pharaoh in caior)
  { question: "What is the capital of Kenya?", options: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"], correctIndex: 1 },//nairobi
  { question: "What is the capital of Vietnam?", options: ["Ho Chi Minh City", "Da Nang", "Hanoi", "Hue"], correctIndex: 2 },//hanoi
  { question: "What is the capital of Colombia?", options: ["Medellín", "Cali", "Cartagena", "Bogotá"], correctIndex: 3 },//bogata (bhogate)
  { question: "What is the capital of Iceland?", options: ["Reykjavík", "Akureyri", "Kópavogur", "Keflavík"], correctIndex: 0 },// reykiavik
  { question: "What is the capital of Chile?", options: ["Valparaíso", "Santiago", "Concepción", "Antofagasta"], correctIndex: 1 },//santiago
  { question: "What is the capital of Poland?", options: ["Kraków", "Gdańsk", "Warsaw", "Wrocław"], correctIndex: 2 },//warsaw  (remember the war)
  { question: "What is the capital of Malaysia?", options: ["George Town", "Johor Bahru", "Malacca", "Kuala Lumpur"], correctIndex: 3 },//kuala lumpur
  { question: "What is the capital of Finland?", options: ["Helsinki", "Tampere", "Turku", "Oulu"], correctIndex: 0 },//helsinki (remember hellsing)
  { question: "What is the capital of Nepal?", options: ["Pokhara", "Kathmandu", "Lalitpur", "Biratnagar"], correctIndex: 1 },//kathmandu

  // --- 26 to 50: Rivers, Lakes, Seas & Oceans ---
  { question: "Which river is traditionally considered the longest in the world?", options: ["Amazon", "Yangtze", "Nile", "Mississippi"], correctIndex: 2 },//nile
  { question: "Which river carries the largest volume of water on Earth?", options: ["Nile", "Congo", "Ganges", "Amazon"], correctIndex: 3 },//amazon
  { question: "Which river flows through the most countries (10 countries)?", options: ["Danube", "Rhine", "Mekong", "Zambezi"], correctIndex: 0 },//danube
  { question: "Which is the largest and deepest ocean on Earth?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], correctIndex: 1 },//pacific ocean (at least as deep as the pacific ocean....)
  { question: "Which is the smallest and shallowest of the world's oceans?", options: ["Indian Ocean", "Southern Ocean", "Arctic Ocean", "Atlantic Ocean"], correctIndex: 2 },//arctic ocean
  { question: "What is the largest inland body of water on Earth by surface area?", options: ["Lake Superior", "Lake Victoria", "Aral Sea", "Caspian Sea"], correctIndex: 3 },//caspian sea (already sea in name)
  { question: "Which lake in Siberia is the deepest freshwater lake in the world?", options: ["Lake Baikal", "Lake Tanganyika", "Crater Lake", "Lake Superior"], correctIndex: 0 },//baikal
  { question: "Which is the largest freshwater lake in the world by surface area?", options: ["Lake Victoria", "Lake Superior", "Lake Huron", "Lake Baikal"], correctIndex: 1 },//superior (its far superior for freshwater)
  { question: "Which body of water is the saltiest major lake/sea on Earth?", options: ["Great Salt Lake", "Red Sea", "Dead Sea", "Caspian Sea"], correctIndex: 2 },//dead sea
  { question: "Which strait separates Europe from Africa?", options: ["Bering Strait", "Strait of Hormuz", "Bosporus", "Strait of Gibraltar"], correctIndex: 3 },//strait of gibraltar
  { question: "Which strait separates Asia from North America?", options: ["Bering Strait", "Strait of Malacca", "Davis Strait", "Cook Strait"], correctIndex: 0 },//bering strait
  { question: "Which artificial waterway connects the Mediterranean Sea to the Red Sea?", options: ["Panama Canal", "Suez Canal", "Erie Canal", "Kiel Canal"], correctIndex: 1 },//suez canal
  { question: "Which canal connects the Atlantic Ocean to the Pacific Ocean?", options: ["Suez Canal", "Corinth Canal", "Panama Canal", "Grand Canal"], correctIndex: 2 },
  { question: "Which river flows directly through the heart of Paris?", options: ["Loire", "Rhône", "Garonne", "Seine"], correctIndex: 3 },//seine
  { question: "Which river flows through London into the North Sea?", options: ["Thames", "Severn", "Mersey", "Trent"], correctIndex: 0 },//thames
  { question: "Where is the Challenger Deep, the deepest known point in Earth's oceans?", options: ["Java Trench", "Mariana Trench", "Puerto Rico Trench", "Tonga Trench"], correctIndex: 1 },//mariana trench
  { question: "Which sea is bordered by Turkey, Bulgaria, Romania, Ukraine, Russia, and Georgia?", options: ["Baltic Sea", "Caspian Sea", "Black Sea", "Adriatic Sea"], correctIndex: 2 },//black sea almost almost almost
  { question: "What is the largest lake in Africa by surface area?", options: ["Lake Tanganyika", "Lake Malawi", "Lake Chad", "Lake Victoria"], correctIndex: 3 },//victoria
  { question: "Which river is the longest in Asia?", options: ["Yangtze", "Yellow River", "Mekong", "Indus"], correctIndex: 0 },//yangtze
  { question: "Which massive waterfall sits on the border between Zambia and Zimbabwe?", options: ["Angel Falls", "Victoria Falls", "Niagara Falls", "Iguazu Falls"], correctIndex: 1 },
  { question: "What is the world's highest uninterrupted waterfall, located in Venezuela?", options: ["Tugela Falls", "Yosemite Falls", "Angel Falls", "Victoria Falls"], correctIndex: 2 },
  { question: "Which sea lies between the Arabian Peninsula and northeastern Africa?", options: ["Arabian Sea", "Aegean Sea", "Coral Sea", "Red Sea"], correctIndex: 3 },
  { question: "Which river forms a natural border between Texas and Mexico?", options: ["Rio Grande", "Colorado River", "Missouri River", "Columbia River"], correctIndex: 0 },
  { question: "Which body of water separates southern England from northern France?", options: ["Irish Sea", "English Channel", "North Sea", "Bay of Biscay"], correctIndex: 1 },
  { question: "Which sea separates the Italian Peninsula from the Balkan Peninsula?", options: ["Tyrrhenian Sea", "Ionian Sea", "Adriatic Sea", "Aegean Sea"], correctIndex: 2 },

  // --- 51 to 75: Mountains, Deserts, Landmarks & Continents ---
  { question: "What is the highest mountain above sea level on Earth?", options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"], correctIndex: 3 },//mt everest
  { question: "Which peak on the China–Pakistan border is the second-highest mountain in the world?", options: ["K2", "Kangchenjunga", "Makalu", "Denali"], correctIndex: 0 },//k2
  { question: "What is the longest continental mountain range in the world?", options: ["Himalayas", "Andes", "Rockies", "Alps"], correctIndex: 1 },//andes
  { question: "What is the highest mountain peak in Africa?", options: ["Mount Kenya", "Mount Stanley", "Mount Kilimanjaro", "Toubkal"], correctIndex: 2 },//kilimanjaro
  { question: "What is the highest mountain peak in North America?", options: ["Mount Logan", "Pico de Orizaba", "Mount Whitney", "Denali"], correctIndex: 3 },//denali
  { question: "What is the highest mountain in the Alps and Western Europe?", options: ["Mont Blanc", "Matterhorn", "Eiger", "Zugspitze"], correctIndex: 0 },//mont blanc
  { question: "What is the largest hot desert in the world?", options: ["Arabian Desert", "Sahara Desert", "Gobi Desert", "Kalahari Desert"], correctIndex: 1 },//sahara desert
  { question: "What is the largest desert on Earth overall (including polar deserts)?", options: ["Sahara", "Arctic", "Antarctica", "Gobi"], correctIndex: 2 },//Antartic
  { question: "Which cold desert spans northern China and southern Mongolia?", options: ["Taklamakan Desert", "Karakum Desert", "Thar Desert", "Gobi Desert"], correctIndex: 3 },//gobi
  { question: "Which desert in Chile is the driest non-polar desert in the world?", options: ["Atacama Desert", "Mojave Desert", "Namib Desert", "Sonoran Desert"], correctIndex: 0 },//atacama
  { question: "In which country is the ancient Inca citadel of Machu Picchu located?", options: ["Bolivia", "Peru", "Ecuador", "Chile"], correctIndex: 1 },//peru
  { question: "In which country is the ancient rose-red rock-cut city of Petra located?", options: ["Egypt", "Oman", "Jordan", "Lebanon"], correctIndex: 2 },//jordan
  { question: "In which country is Angkor Wat, the world's largest religious structure?", options: ["Thailand", "Laos", "Vietnam", "Cambodia"], correctIndex: 3 },//cambodia
  { question: "Which active volcano overlooks the Bay of Naples and destroyed Pompeii?", options: ["Mount Vesuvius", "Mount Etna", "Stromboli", "Mount Fuji"], correctIndex: 0 },
  { question: "What is Japan's tallest mountain?", options: ["Mount Kita", "Mount Fuji", "Mount Ontake", "Mount Aso"], correctIndex: 1 },//mount fuji
  { question: "Which continent contains the most sovereign countries (54)?", options: ["Asia", "Europe", "Africa", "South America"], correctIndex: 2 },//africa
  { question: "Which is the largest continent on Earth by both area and population?", options: ["Africa", "North America", "Europe", "Asia"], correctIndex: 3 },//asia
  { question: "Which continent has no permanent human residents?", options: ["Antarctica", "Australia", "South America", "Europe"], correctIndex: 0 },//antartica
  { question: "What is the name of the massive sacred sandstone monolith in central Australia?", options: ["Wave Rock", "Uluru", "Twelve Apostles", "Mount Kosciuszko"], correctIndex: 1 },//uluru
  { question: "Which iconic Art Deco statue overlooks Rio de Janeiro from Mount Corcovado?", options: ["Statue of Liberty", "The Motherland Calls", "Christ the Redeemer", "Spring Temple Buddha"], correctIndex: 2 },//christ the redeemer
  { question: "What are the natural light displays visible in high-latitude northern skies called?", options: ["El Niño", "Trade Winds", "Monsoon", "Aurora Borealis"], correctIndex: 3 },//aurora
  { question: "Which mountain range forms a traditional boundary between Europe and Asia?", options: ["Ural Mountains", "Caucasus Mountains", "Carpathian Mountains", "Pyrenees"], correctIndex: 0 },//urla mountains almost almost almost
  { question: "Which mountain range forms the natural border between France and Spain?", options: ["Alps", "Pyrenees", "Apennines", "Jura"], correctIndex: 1 },//pyrenees
  { question: "What is the world's largest coral reef system, located off Queensland, Australia?", options: ["Belize Barrier Reef", "Red Sea Coral Reef", "Great Barrier Reef", "Ningaloo Reef"], correctIndex: 2 },//red sea coral reef
  { question: "What is the name of the famous cone geyser in Yellowstone National Park?", options: ["Strokkur", "Pohutu", "Castle Geyser", "Old Faithful"], correctIndex: 3 },

  // --- 76 to 100: Countries, Islands, Borders, Flags & World Trivia ---
  { question: "Which is the largest country in the world by total land area?", options: ["Russia", "Canada", "China", "United States"], correctIndex: 0 },//russia
  { question: "Which is the smallest sovereign country in the world by area?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correctIndex: 1 },//vartican city
  { question: "What is the largest island in the world that is not a continent?", options: ["New Guinea", "Borneo", "Greenland", "Madagascar"], correctIndex: 2 },//greenland
  { question: "Which Nordic country officially has the most islands in the world (over 267,000)?", options: ["Indonesia", "Philippines", "Norway", "Sweden"], correctIndex: 3 },//sweeden almost almost almost
  { question: "Which nation is both a sovereign country and a continent?", options: ["Australia", "Greenland", "Madagascar", "Iceland"], correctIndex: 0 },//australia
  { question: "Which landlocked kingdom is completely surrounded by South Africa?", options: ["Eswatini", "Lesotho", "Botswana", "Namibia"], correctIndex: 1 },//lesotho
  { question: "Which independent city-state is completely enclosed within Rome, Italy?", options: ["San Marino", "Monaco", "Vatican City", "Andorra"], correctIndex: 2 },//vartican city
  { question: "Which is the only country in the world with a non-rectangular national flag?", options: ["Switzerland", "Vatican City", "Bhutan", "Nepal"], correctIndex: 3 },//nepal 
  { question: "Which two countries are the only ones with square national flags?", options: ["Switzerland & Vatican City", "Nepal & Bhutan", "Monaco & Singapore", "Denmark & Norway"], correctIndex: 0 },
  { question: "Which country is famously known as the 'Land of the Rising Sun'?", options: ["South Korea", "Japan", "China", "Thailand"], correctIndex: 1 },//japan
  { question: "Which European country is known as the 'Land of a Thousand Lakes'?", options: ["Sweden", "Canada", "Finland", "Norway"], correctIndex: 2 },//finland
  { question: "Which two countries share the longest international land border in the world?", options: ["Russia and Kazakhstan", "Argentina and Chile", "China and Mongolia", "Canada and the United States"], correctIndex: 3 },
  { question: "Which country spans the most time zones (12, including overseas territories)?", options: ["France", "Russia", "United States", "United Kingdom"], correctIndex: 0 },//france (woah new fact) almost almost almost
  { question: "Which South American country has coastlines on both the Pacific Ocean and the Caribbean Sea?", options: ["Ecuador", "Colombia", "Peru", "Venezuela"], correctIndex: 1 },//columbia
  { question: "Which is the only Portuguese-speaking country in the Americas?", options: ["Argentina", "Uruguay", "Brazil", "Angola"], correctIndex: 2 },//brazil
  { question: "Which Southeast Asian archipelago nation consists of more than 17,000 islands?", options: ["Japan", "Philippines", "Maldives", "Indonesia"], correctIndex: 3 },//indonesia17k philippines 7k only
  { question: "Which transcontinental country spans both southeastern Europe and western Asia?", options: ["Turkey", "Greece", "Bulgaria", "Romania"], correctIndex: 0 },//turkey
  { question: "What is the imaginary line at 0 degrees latitude called?", options: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"], correctIndex: 1 },//equator
  { question: "What is the line of 0 degrees longitude passing through Greenwich, England called?", options: ["Equator", "Tropic of Capricorn", "Prime Meridian", "Arctic Circle"], correctIndex: 2 },//prime meridian
  { question: "Which line in the Pacific Ocean marks where one calendar day transitions to the next?", options: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"], correctIndex: 3 },//intl date line
  { question: "To which South American country do the Galápagos Islands belong?", options: ["Ecuador", "Peru", "Chile", "Costa Rica"], correctIndex: 0 },//ecuador
  { question: "What is the largest island in the Mediterranean Sea?", options: ["Sardinia", "Sicily", "Cyprus", "Crete"], correctIndex: 1 }, //sicily (silly is the rhyme word)
  { question: "Which country's national flag features a stylized red maple leaf?", options: ["Lebanon", "Austria", "Canada", "Peru"], correctIndex: 2 },//canada
  { question: "Which country contains more natural lakes than the rest of the world combined?", options: ["Russia", "Finland", "United States", "Canada"], correctIndex: 3 },//canada
  { question: "Which Indian Ocean island nation has the lowest average ground elevation of any country?", options: ["Maldives", "Netherlands", "Tuvalu", "Kiribati"], correctIndex: 0 }//maldives
];
