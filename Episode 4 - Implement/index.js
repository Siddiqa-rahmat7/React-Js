import React from "react";
import ReactDOM from "react-dom/client";

/* 
* Header
- logo
- nav items
* Body
- search
- resturant container
- resturant card
- img
- Name of res , Star Rating
* Footer
- copyright
- links
- address
- contact 
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const RestaurantCard = (props) => {
const { RestaurantData} = props;
const{name, cuisines,avgRating,deliveryTime } = RestaurantData?.info;
    return (
        <div className="restaurant-card">
            <h3>{name}</h3>
            <h4>{cuisines.join(" ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}mins</h4>
        </div>
    );
};

const RestaurantList = [
  {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
  "layout": { columns: 4 },
  "info": {
  id: "856749",
  name: "Captain Sam's Pizza",
  cloudinaryImageId: "dd99a006af6c771c04af5d63d972588a",
  locality: "Ayodhya",
  areaName: "Subhash Nagar",
  costForTwo: "₹300 for two",
  cuisines: [
    "Pizzas",
    "Italian",
    "American",
    "Fast Food",
    "Pastas",
    "Sweets",
    "Desserts",
    "Beverages",
  ],
  avgRating: 3.7,
  veg: true,
  parentId: "382786",
  avgRatingString: "3.7",
  totalRatingsString: "5.0K+",
  sla: {
    deliveryTime: 21,
    lastMileTravel: 1.5,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "1.5 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: { nextCloseTime: "2026-06-08 23:59:00", opened: true },
  badges: { imageBadges: [{ imageId: "v1695133679/badges/Pure_Veg111.png", description: "pureveg" }] },
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: { badgeObject: [{ attributes: { description: "pureveg", imageId: "v1695133679/badges/Pure_Veg111.png", theme: "" } }] },
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹9" },
  loyaltyDiscoverPresentationInfo: { logoCtx: { text: "BENEFITS", logo: "v1634558776/swiggy_one/OneLogo_3x.png" }, freedelMessage: "FREE DELIVERY" },
  orderabilityCommunication: { title: {}, subTitle: {}, message: {}, customIcon: {} },
  differentiatedUi: { displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", differentiatedUiMediaDetails: { mediaType: "ADS_MEDIA_ENUM_IMAGE", lottie: {}, video: {} } },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: { aggregatedRating: { rating: "--" } },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",

},
  analytics: { context: "seo-data-05361b0e-e213-4c95-9e4e-faeb045b0d8d" },
  cta: { link: "https://www.swiggy.com/city/faizabad/captain-sams-pizza-ayodhya-subhash-nagar-rest856749", text: "RESTAURANT_MENU", type: "WEBLINK" },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "869449",
"name": "Rominus Pizza And Burger",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/11/9b07f728-7570-49dc-a7a3-f55cfdb1114e_869449.jpg",
"locality": "Subhash Nagar",
"areaName": "Civil Lines",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Italian-American",
"American",
"Barbecue",
"Snacks",
"Grill",
"Italian",
"Pastas",
"Sweets",
"Desserts"
],
"avgRating": 4.4,
"parentId": "8387",
"avgRatingString": "4.4",
"totalRatingsString": "3.4K+",
"sla": {
"deliveryTime": 22,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-06-08 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "70% OFF",
"subHeader": "UPTO ₹140"
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-05361b0e-e213-4c95-9e4e-faeb045b0d8d"
},
"cta": {
"link": "https://www.swiggy.com/city/faizabad/rominus-pizza-and-burger-subhash-nagar-civil-lines-rest869449",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "512359",
"name": "Domino's Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/5/3c2842da-75aa-4bb4-a2f9-3d78104a71d0_512359.JPG",
"locality": "Ayodhya Road",
"areaName": "Faizabad-Ayodhya Locality",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.3,
"parentId": "2456",
"avgRatingString": "4.3",
"totalRatingsString": "1.0K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-06-08 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹75"
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-05361b0e-e213-4c95-9e4e-faeb045b0d8d"
},
"cta": {
"link": "https://www.swiggy.com/city/faizabad/dominos-pizza-ayodhya-road-faizabad-ayodhya-locality-rest512359",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
           {RestaurantList.map((Restaurant) =>(
            <RestaurantCard key={Restaurant.info.id} RestaurantData = {Restaurant} />
           ))}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />);