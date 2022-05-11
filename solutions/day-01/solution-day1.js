let emptyArray = [];

let arrayWithFiveELements = [1, 2, 3, 5, 65];

console.log(arrayWithFiveELements.length); // for length

let firstItem = arrayWithFiveELements[0];
let middleItem = arrayWithFiveELements[arrayWithFiveELements.length / 2];
let lastItem = arrayWithFiveELements[arrayWithFiveELements.length - 1];

let mixedDataType = [1, "2", [2, 3], {}, 1.2, "hello"];
console.log(mixedDataType);

let itCompanies = [
	"Facebook",
	"Google",
	"Microsoft",
	"Apple",
	"IBM",
	"Oracle",
	"Amazon",
];
console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length/2]);
console.log(itCompanies[itCompanies.length - 1]);

itCompanies.forEach((company) => console.log(company));

itCompanies.forEach((company) => {
	console.log(company.toUpperCase());
});

if (itCompanies.includes("Google")) {
	console.log("Google exists");
} else {
	console.log("Company not found");
}

let newItCompanies = [];

itCompanies.sort();
itCompanies.reverse();
itCompanies.slice(3);
itCompanies.slice(itCompanies.length - 3, itCompanies.length);
itCompanies.slice(itCompanies.length/2, itCompanies.length/2 + 1)
itCompanies.shift();
itCompanies.pop();
itCompanies.length = 0;