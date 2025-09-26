"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var WorkApi_1 = require("@/app/api/WorkApi");
function WorkTogether() {
    return (React.createElement("section", { className: "text-center py-16" },
        React.createElement("h3", { className: "text-5xl font-bold mb-12 text-pink-400" }, "Travaillons ensemble"),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto" }, WorkApi_1.workimages.map(function (cat) { return (React.createElement("div", { key: cat.alt, className: "relative group rounded-lg overflow-hidden shadow-lg" },
            React.createElement(image_1["default"], { src: cat.src, width: 400, height: 500, alt: cat.alt, className: "object-cover w-full h-[500px] transition-transform duration-500 group-hover:scale-110" }),
            React.createElement("div", { className: "absolute inset-0 flex items-center justify-center bg-black/40" },
                React.createElement("p", { className: "text-white text-xl font-bold tracking-wide" }, cat.alt)))); })),
        React.createElement("div", { className: "mt-10" },
            React.createElement(link_1["default"], { href: "/contact", className: "inline-block px-8 py-3 bg-pink-500 text-black font-semibold rounded-full shadow-md hover:bg-pink-600 transition" }, "CONTACTEZ NOUS"))));
}
exports["default"] = WorkTogether;
