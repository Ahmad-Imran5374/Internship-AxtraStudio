import React from "react";
import "./App.css";

const data = [
  {
    continent: "Asia",
    countries: [
      {
        country: "China",
        cities: ["Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Chengdu"],
      },
      {
        country: "India",
        cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"],
      },
      {
        country: "Japan",
        cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"],
      },
      {
        country: "South Korea",
        cities: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"],
      },
      {
        country: "Pakistan",
        cities: ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi"],
      },
    ],
  },
  {
    continent: "Europe",
    countries: [
      {
        country: "Germany",
        cities: ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt"],
      },
      {
        country: "France",
        cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
      },
      {
        country: "United Kingdom",
        cities: [
          "London",
          "Manchester",
          "Birmingham",
          "Liverpool",
          "Edinburgh",
        ],
      },
      {
        country: "Italy",
        cities: ["Rome", "Milan", "Naples", "Turin", "Florence"],
      },
      {
        country: "Spain",
        cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao"],
      },
    ],
  },
  {
    continent: "North America",
    countries: [
      {
        country: "United States",
        cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
      },
      {
        country: "Canada",
        cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
      },
      {
        country: "Mexico",
        cities: [
          "Mexico City",
          "Guadalajara",
          "Monterrey",
          "Puebla",
          "Tijuana",
        ],
      },
      {
        country: "Cuba",
        cities: [
          "Havana",
          "Santiago de Cuba",
          "Camagüey",
          "Holguín",
          "Guantánamo",
        ],
      },
      {
        country: "Dominican Republic",
        cities: [
          "Santo Domingo",
          "Santiago",
          "La Romana",
          "San Pedro de Macorís",
          "Punta Cana",
        ],
      },
    ],
  },
  {
    continent: "South America",
    countries: [
      {
        country: "Brazil",
        cities: [
          "São Paulo",
          "Rio de Janeiro",
          "Brasília",
          "Salvador",
          "Fortaleza",
        ],
      },
      {
        country: "Argentina",
        cities: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata"],
      },
      {
        country: "Colombia",
        cities: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"],
      },
      {
        country: "Chile",
        cities: [
          "Santiago",
          "Valparaíso",
          "Concepción",
          "La Serena",
          "Antofagasta",
        ],
      },
      {
        country: "Peru",
        cities: ["Lima", "Arequipa", "Trujillo", "Chiclayo", "Iquitos"],
      },
    ],
  },
  {
    continent: "Africa",
    countries: [
      {
        country: "Nigeria",
        cities: ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt"],
      },
      {
        country: "South Africa",
        cities: [
          "Johannesburg",
          "Cape Town",
          "Durban",
          "Pretoria",
          "Port Elizabeth",
        ],
      },
      {
        country: "Egypt",
        cities: [
          "Cairo",
          "Alexandria",
          "Giza",
          "Shubra El-Kheima",
          "Port Said",
        ],
      },
      {
        country: "Kenya",
        cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"],
      },
      {
        country: "Ethiopia",
        cities: ["Addis Ababa", "Dire Dawa", "Mekelle", "Gondar", "Bahir Dar"],
      },
    ],
  },
];

function App() {
  const [continents, setContinents] = React.useState("");
  const [country, setCountry] = React.useState("");
  return (
    <div className="custom-select">
      <select name="continents" onChange={(e) => setContinents(e.target.value)}>
        <option>--Select a continent--</option>
        {data.map((data) => (
          <option key={data.continent}>{data.continent}</option>
        ))}
      </select>
      <select name="country" onChange={(e) => setCountry(e.target.value)}>
        <option>--Select a Country--</option>
        {data
          .find((data) => data.continent === continents)
          ?.countries.map((data) => (
            <option>{data.country}</option>
          ))}
      </select>
      <select name="city">
        <option>--Select a City--</option>
        {data
          .find((data) => data.continent === continents)
          ?.countries.find((data) => data.country === country)
          ?.cities.map((data) => (
            <option>{data}</option>
          ))}
      </select>
    </div>
  );
}

export default App;
