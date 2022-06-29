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
        />,
    },

    {
        label: "Airport taxis",
        icon: < LocalTaxiIcon style = {
            { fontSize: 28 } }
        />,
    },
];

export const featureData = [{
        name: "Kindare",
        desc: "2359 Properties",
        photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        name: "Nocnonic",
        desc: "1200 Properties",
        photo: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        name: "Tonyata",
        desc: "5600 Properties",
        photo: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
];

export const propertyTypeData = [{
        nameType: "Villas",
        count: "500 villas",
        photo: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },

    {
        nameType: "Apartments",
        count: "5000 Apartments",
        photo: "https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },

    {
        nameType: "Hotels",
        count: "500 hotels",
        photo: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },

    {
        nameType: "cabins",
        count: "700 cabins",
        photo: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },

    {
        nameType: "Resorts",
        count: "600 resorts",
        photo: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
];

export const homeGuestData = [{
        name: "kenny stratus",
        location: "Atlanta",
        price: "starting from $120",
        rating: "8.9",
        grade: "Excellent",
        photo: "https://images.unsplash.com/photo-1616137303871-05ce745f9cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    },

    {
        name: "Dondax Escavota",
        location: "New York",
        price: "starting from $300",
        rating: "9.5",
        grade: "Excellent",
        photo: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },

    {
        name: "James kendal",
        location: "Coal City",
        price: "starting from $700",
        rating: "9.9",
        grade: "Excellent",
        photo: "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },

    {
        name: "Rashford Trasforsd",
        location: "Kent London",
        price: "starting from $400",
        rating: "9.9",
        grade: "Good",
        photo: "https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
];

export const footerSection1 = [
    "Countries",
    "Regions",
    "Cities",
    "District",
    "Airports",
    "Hotels",
    "Place of Interest",
];
export const footerSection2 = [
    "Homes",
    "Apartment",
    "Resorts",
    "Villas",
    "Hostels",
    "B&Bs",
    "Guest houses",
];
export const footerSection3 = [
    "Unique places to stay",
    "All destinations",
    "Reviews",
    "Discover",
    "Unpacked Travel articles",
    "Travel communities",
    "Seasonal and holiday deals",
];
export const footerSection4 = [
    "Unique places to stay",
    "All destinations",
    "Discover",
    "Reviews",
    "Unpacked Travel articles",
    "Travel communities",
    "Seasonal and holiday deals",
];

export const searchResult = [{
        title: "King James House",
        distance: "500m from center",
        bonus: "Free airport taxi",
        made: "Studio Apartment with Air conditioning",
        price: "$980",
        bonus2: "Free cancellation",
        bonus3: "Includes taxes and fees",
        note: "You can cancel later, so look in this great price today!",
        buttonText: "See availability",
        rating: 10,
        grade: "Good",
        photo: "https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },

    {
        title: "King James House",
        distance: "500m from center",
        bonus: "Free airport taxi",
        made: "Studio Apartment with Air conditioning",
        price: "$980",
        bonus2: "Free cancellation",
        bonus3: "Includes taxes and fees",
        note: "You can cancel later, so look in this great price today!",
        buttonText: "See availability",
        rating: 10,
        grade: "Good",
        photo: "https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },

    {
        title: "King James House",
        distance: "500m from center",
        bonus: "Free airport taxi",
        made: "Studio Apartment with Air conditioning",
        price: "$980",
        bonus2: "Free cancellation",
        bonus3: "Includes taxes and fees",
        note: "You can cancel later, so look in this great price today!",
        buttonText: "See availability",
        rating: 10,
        grade: "Good",
        photo: "https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },

    {
        title: "King James House",
        distance: "500m from center",
        bonus: "Free airport taxi",
        made: "Studio Apartment with Air conditioning",
        price: "$980",
        bonus2: "Free cancellation",
        bonus3: "Includes taxes and fees",
        note: "You can cancel later, so look in this great price today!",
        buttonText: "See availability",
        rating: 10,
        grade: "Good",
        photo: "https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },

    {
        title: "King James House",
        distance: "500m from center",
        bonus: "Free airport taxi",
        made: "Studio Apartment with Air conditioning",
        price: "$980",
        bonus2: "Free cancellation",
        bonus3: "Includes taxes and fees",
        note: "You can cancel later, so look in this great price today!",
        buttonText: "See availability",
        rating: 10,
        grade: "Good",
        photo: "https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },

    {
        title: "King James House",
        distance: "500m from center",
        bonus: "Free airport taxi",
        made: "Studio Apartment with Air conditioning",
        price: "$980",
        bonus2: "Free cancellation",
        bonus3: "Includes taxes and fees",
        note: "You can cancel later, so look in this great price today!",
        buttonText: "See availability",
        rating: 10,
        grade: "Good",
        photo: "https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
];