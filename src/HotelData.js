import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

export const headerItems = [{
        label: "Stays",
        icon: < HotelIcon style = {
            { fontSize: 28 } }
        />,
    },
    {
        label: "Flights",
        icon: < FlightIcon style = {
            { fontSize: 28 } }
        />,
    },

    {
        label: "Car rentals",
        icon: < CarRentalIcon style = {
            { fontSize: 28 } }
        />,
    },

    {
        label: "Attractions",
        icon: < AttractionsIcon style = {
            { fontSize: 28 } }
        rotate_right / > ,
    },

    {
        label: "Airport taxis",
        icon: < LocalTaxiIcon style = {
            { fontSize: 28 } }
        />,
    },
];