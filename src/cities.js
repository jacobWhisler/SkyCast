import { nanoid } from "nanoid"

// North America Bg Image Imports
import Cleveland from "./assets/img/Cleveland.png"
import NYC from "./assets/img/NYC.png"
import LosAngeles from "./assets/img/Los Angeles.png"
import Toronto from "./assets/img/Toronto.png"
import Anchorage from "./assets/img/Anchorage.png"
import Chicago from "./assets/img/Chicago.png"
import Calgary from "./assets/img/Calgary.png"
import Honolulu from "./assets/img/Honolulu.png"
import PanamaCity from "./assets/img/Panama City.png"
import Miami from "./assets/img/Miami.png"
import LasVegas from "./assets/img/Las Vegas.png"
import Denver from "./assets/img/Denver.png"
import Havana from "./assets/img/Havana.png"
import Seattle from "./assets/img/Seattle.png"
import Austin from "./assets/img/Austin.png"
import Nassau from "./assets/img/Nassau.png"
import Kingston from "./assets/img/Kingston.png"

// South America Bg Image Imports
import RiodeJanerio from "./assets/img/Rio de Janeiro.png"
import MexicoCity from "./assets/img/Mexico City.png"
import BuenosAires from "./assets/img/Buenos Aires.png"
import Santiago from "./assets/img/Santiago.png"
import Lima from "./assets/img/Lima.png"
import Bogota from "./assets/img/Bogota.png"
import LaPaz from "./assets/img/La Paz.png"

// Europe Bg Image Imports
import Paris from "./assets/img/Paris.png"
import London from "./assets/img/London.png"
import Milan from "./assets/img/Milan.png"
import Rome from "./assets/img/Rome.png"
import Barcelona from "./assets/img/Barcelona.png"
import Prague from "./assets/img/Prague.png"
import Zurich from "./assets/img/Zurich.png"
import Athens from "./assets/img/Athens.png"
import Dublin from "./assets/img/Dublin.png"
import Vienna from "./assets/img/Vienna.png"
import Reykjavik from "./assets/img/Reykjavik.png"
import Lisbon from "./assets/img/Lisbon.png"
import Amsterdam from "./assets/img/Amsterdam.png"
import Helsinki from "./assets/img/Helsinki.png"
import Venice from "./assets/img/Venice.png"
import Moscow from "./assets/img/Moscow.png"
import Stockholm from "./assets/img/Stockholm.png"
import Budapest from "./assets/img/Budapest.png"
import Berlin from "./assets/img/Berlin.png"
import Istanbul from "./assets/img/Istanbul.png"
import Munich from "./assets/img/Munich.png"
import Oslo from "./assets/img/Oslo.png"
import Copenhagen from "./assets/img/Copenhagen.png"
import Geneva from "./assets/img/Geneva.png"
import Belgrade from "./assets/img/Belgrade.png"

// Asia Bg Image Imports
import Tokyo from "./assets/img/Tokyo.png"
import Bangkok from "./assets/img/Bangkok.png"
import Jakarta from "./assets/img/Jakarta.png"
import Dubai from "./assets/img/Dubai.png"
import Manila from "./assets/img/Manila.png"
import Beijing from "./assets/img/Beijing.png"
import Seoul from "./assets/img/Seoul.png"
import Singapore from "./assets/img/Singapore.png"
import HongKong from "./assets/img/Hong Kong.png"

// Australia/Oceania Bg Image Imports
import Sydney from "./assets/img/Sydney.png"
import Auckland from "./assets/img/Auckland.png"
import Melbourne from "./assets/img/Melbourne.png"
import Perth from "./assets/img/Perth.png"
import Wellington from "./assets/img/Wellington.png"

// Africa Bg Image Imports
import Johannesburg from "./assets/img/Johannesburg.png"
import Casablanca from "./assets/img/Casablanca.png"
import Cairo from "./assets/img/Cairo.png"
import Nairobi from "./assets/img/Nairobi.png"
import Lagos from "./assets/img/Lagos.png"
import Tunis from "./assets/img/Tunis.png"





const arrayOfPopularCities = [
    {
        id: nanoid(),
        name: "Cleveland",
        country: "United States of America",
        continent: "North America",
        background: Cleveland
    },
    {
        id: nanoid(),
        name: "Paris",
        country: "France",
        continent: "Europe",
        background: Paris
    },
    {
        id: nanoid(),
        name: "New York",
        country: "United States of America",
        continent: "North America",
        background: NYC
    },
    {
        id: nanoid(),
        name: "London",
        country: "United Kingdom",
        continent: "Europe",
        background: London
    },
    {
        id: nanoid(),
        name: "Tokyo",
        country: "Japan",
        continent: "Asia",
        background: Tokyo
    },
    {
        id: nanoid(),
        name: "Sydney",
        country: "Australia",
        continent: "Australia/Oceania",
        background: Sydney
    },
    {
        id: nanoid(),
        name: "Johannesburg",
        country: "South Africa",
        continent: "Africa",
        background: Johannesburg
    },
    {
        id: nanoid(),
        name: "Rio de Janeiro",
        country: "Brazil",
        continent: "South America",
        background: RiodeJanerio
    },
    {
        id: nanoid(),
        name: "Bangkok",
        country: "Thailand",
        continent: "Asia",
        background: Bangkok
    },
    {
        id: nanoid(),
        name: "Milan",
        country: "Italy",
        continent: "Europe",
        background: Milan
    },
    {
        id: nanoid(),
        name: "Mexico City",
        country: "Mexico",
        continent: "South America",
        background: MexicoCity
    },
    {
        id: nanoid(),
        name: "Los Angeles",
        country: "United States of America",
        continent: "North America",
        background: LosAngeles
    },
    {
        id: nanoid(),
        name: "Casablanca",
        country: "Morocco",
        continent: "Africa",
        background: Casablanca
    },
    {
        id: nanoid(),
        name: "Jakarta",
        country: "Indonesia",
        continent: "Asia",
        background: Jakarta
    },
    {
        id: nanoid(),
        name: "Auckland",
        country: "New Zealand",
        continent: "Australia/Oceania",
        background: Auckland
    },
    {
        id: nanoid(),
        name: "Rome",
        country: "Italy",
        continent: "Europe",
        background: Rome
    },
    {
        id: nanoid(),
        name: "Toronto",
        country: "Canada",
        continent: "North America",
        background: Toronto
    },
    {
        id: nanoid(),
        name: "Dubai",
        country: "United Arab Emirates",
        continent: "Asia",
        background: Dubai
    },
    {
        id: nanoid(),
        name: "Buenos Aires",
        country: "Argentina",
        continent: "South America",
        background: BuenosAires
    },
    {
        id: nanoid(),
        name: "Melbourne",
        country: "Australia",
        continent: "Australia/Oceania",
        background: Melbourne
    },
    {
        id: nanoid(),
        name: "Barcelona",
        country: "Spain",
        continent: "Europe",
        background: Barcelona
    },
    {
        id: nanoid(),
        name: "Manila",
        country: "Philippines",
        continent: "Asia",
        background: Manila
    },
    {
        id: nanoid(),
        name: "Cairo",
        country: "Egypt",
        continent: "Africa",
        background: Cairo
    },
    {
        id: nanoid(),
        name: "Anchorage",
        country: "United States of America",
        continent: "North America",
        background: Anchorage
    },
    {
        id: nanoid(),
        name: "Prague",
        country: "Czechia",
        continent: "Europe",
        background: Prague
    },
    {
        id: nanoid(),
        name: "Chicago",
        country: "United States of America",
        continent: "North America",
        background: Chicago
    },
    {
        id: nanoid(),
        name: "Santiago",
        country: "Chile",
        continent: "South America",
        background: Santiago
    },
    {
        id: nanoid(),
        name: "Beijing",
        country: "China",
        continent: "Asia",
        background: Beijing
    },
    {
        id: nanoid(),
        name: "Perth",
        country: "Australia",
        continent: "Australia/Oceania",
        background: Perth
    },
    {
        id: nanoid(),
        name: "Zürich",
        country: "Switzerland",
        continent: "Europe",
        background: Zurich
    },
    {
        id: nanoid(),
        name: "Calgary",
        country: "Canada",
        continent: "North America",
        background: Calgary
    },
    {
        id: nanoid(),
        name: "Nairobi",
        country: "Kenya",
        continent: "Africa",
        background: Nairobi
    },
    {
        id: nanoid(),
        name: "Seoul",
        country: "South Korea",
        continent: "Asia",
        background: Seoul
    },
    {
        id: nanoid(),
        name: "Athens",
        country: "Greece",
        continent: "Europe",
        background: Athens
    },
    {
        id: nanoid(),
        name: "Lima",
        country: "Peru",
        continent: "South America",
        background: Lima
    },
    {
        id: nanoid(),
        name: "Lagos",
        country: "Nigeria",
        continent: "Africa",
        background: Lagos
    },
    {
        id: nanoid(),
        name: "Singapore",
        country: "Singapore",
        continent: "Asia",
        background: Singapore
    },
    {
        id: nanoid(),
        name: "Dublin",
        country: "Ireland",
        continent: "Europe",
        background: Dublin
    },
    {
        id: nanoid(),
        name: "Honolulu",
        country: "United States of America",
        continent: "North America",
        background: Honolulu
    },
    {
        id: nanoid(),
        name: "Panama City",
        country: "Panama",
        continent: "North America",
        background: PanamaCity
    },
    {
        id: nanoid(),
        name: "Wellington",
        country: "New Zealand",
        continent: "Australia/Oceania",
        background: Wellington
    },
    {
        id: nanoid(),
        name: "Hong Kong",
        country: "Hong Kong",
        continent: "Asia",
        background: HongKong
    },
    {
        id: nanoid(),
        name: "Miami",
        country: "United States of America",
        continent: "North America",
        background: Miami
    },
    {
        id: nanoid(),
        name: "Vienna",
        country: "Austria",
        continent: "Europe",
        background: Vienna
    },
    {
        id: nanoid(),
        name: "Bogota",
        country: "Colombia",
        continent: "South America",
        background: Bogota
    },
    {
        id: nanoid(),
        name: "Reykjavik",
        country: "Iceland",
        continent: "Europe",
        background: Reykjavik
    },
    {
        id: nanoid(),
        name: "Lisbon",
        country: "Portugal",
        continent: "Europe",
        background: Lisbon
    },
    {
        id: nanoid(),
        name: "Las Vegas",
        country: "United States of America",
        continent: "North America",
        background: LasVegas
    },
    {
        id: nanoid(),
        name: "Amsterdam",
        country: "Netherlands",
        continent: "Europe",
        background: Amsterdam
    },
    {
        id: nanoid(),
        name: "Helsinki",
        country: "Finland",
        continent: "Europe",
        background: Helsinki
    },
    {
        id: nanoid(),
        name: "Denver",
        country: "United States of America",
        continent: "North America",
        background: Denver
    },
    {
        id: nanoid(),
        name: "Venice",
        country: "Italy",
        continent: "Europe",
        background: Venice
    },
    {
        id: nanoid(),
        name: "Moscow",
        country: "Russia",
        continent: "Europe",
        background: Moscow
    },
    {
        id: nanoid(),
        name: "Havana",
        country: "Cuba",
        continent: "North America",
        background: Havana
    },
    {
        id: nanoid(),
        name: "Stockholm",
        country: "Sweden",
        continent: "Europe",
        background: Stockholm
    },
    {
        id: nanoid(),
        name: "Seattle",
        country: "United States of America",
        continent: "North America",
        background: Seattle
    },
    {
        id: nanoid(),
        name: "Budapest",
        country: "Hungary",
        continent: "Europe",
        background: Budapest
    },
    {
        id: nanoid(),
        name: "Berlin",
        country: "Germany",
        continent: "Europe",
        background: Berlin
    },
    {
        id: nanoid(),
        name: "La Paz",
        country: "Bolivia",
        continent: "South America",
        background: LaPaz
    },
    {
        id: nanoid(),
        name: "Istanbul",
        country: "Turkey",
        continent: "Europe",
        background: Istanbul
    },
    {
        id: nanoid(),
        name: "Munich",
        country: "Germany",
        continent: "Europe",
        background: Munich
    },
    {
        id: nanoid(),
        name: "Oslo",
        country: "Norway",
        continent: "Europe",
        background: Oslo
    },
    {
        id: nanoid(),
        name: "Copenhagen",
        country: "Denmark",
        continent: "Europe",
        background: Copenhagen
    },
    {
        id: nanoid(),
        name: "Geneva",
        country: "Switzerland",
        continent: "Europe",
        background: Geneva
    },
    {
        id: nanoid(),
        name: "Belgrade",
        country: "Serbia",
        continent: "Europe",
        background: Belgrade
    },
    {
        id: nanoid(),
        name: "Austin",
        country: "United States of America",
        continent: "North America",
        background: Austin
    },
    {
        id: nanoid(),
        name: "Tunis",
        country: "Tunisia",
        continent: "Africa",
        background: Tunis
    },
    {
        id: nanoid(),
        name: "Nassau",
        country: "Bahamas",
        continent: "North America",
        background: Nassau
    },
    {
        id: nanoid(),
        name: "Kingston",
        country: "Jamaica",
        continent: "North America",
        background: Kingston
    },
]

export default arrayOfPopularCities;