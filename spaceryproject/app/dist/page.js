"use client";
"use strict";
exports.__esModule = true;
var Carrousel_1 = require("@/components/layout/carrousel/Carrousel");
var CityName_1 = require("@/components/layout/city-name/CityName");
var MainText_1 = require("@/components/layout/main-text/MainText");
var map_1 = require("@/components/layout/map/map");
var workTogether_1 = require("@/components/layout/work-together/workTogether");
function HomePage() {
    return (React.createElement("main", { className: "bg-white text-black" },
        React.createElement("section", { className: "text-center py-10" },
            React.createElement("p", { className: "max-w-2xl font-jakarta  mx-auto text-gray-600 mb-6" }, "We didn\u2019t create Spacery to list spaces."),
            React.createElement("h1", { className: "text-6xl font-bold " }, "SPACERY"),
            React.createElement("p", { className: "text-xl font-jakarta mb-6" }, "EXPLORE \u2022 FILTER \u2022 FEEL"),
            React.createElement("p", { className: "max-w-2xl font-jakarta  mx-auto text-gray-600" }, "We created it to connect the curious with the hidden beauty of design.")),
        React.createElement("section", { className: "relative flex justify-center items-center " },
            React.createElement(Carrousel_1["default"], null)),
        React.createElement("section", { className: "text-center py-12 bg-gradient-to-r bg-black" },
            React.createElement(CityName_1["default"], null)),
        React.createElement("section", { className: "max-w-4xl mx-auto px-6 py-16 text-center" },
            React.createElement(MainText_1["default"], null)),
        React.createElement("section", { className: "relative py-16 bg-black" },
            React.createElement(map_1["default"], null)),
        React.createElement("section", { className: "py-20 text-center bg-gradient-to-b from-black  to-white text-white" },
            React.createElement(workTogether_1["default"], null))));
}
exports["default"] = HomePage;
