var ResourceType = ["books", "databases", "resource guides"];
console.log(ResourceType);
var ResourceNames = [
  "International Legal Research in a Nutshell",
  "Legal Research Methods in a Modern World: a Coursebook",
  "International and Foreign Legal Research: a Coursebook",
  "International Legal Research in a Global Community",
  "University of Michigan",
  "University of California, Berkeley",
  "Georgetown University",
  "University of Washington",
  "EUR-LEX",
  "WorldLII",
  "Unilex",
  "GlobaLex",
];
console.log(ResourceNames);
//list the names of the resources for each type of resource when user selects that type
for (var i = 0; i < RESOURCES.type.length; i++) {
  console.log(RESOURCES[i].type.name);
}
var resourceSelect = getElementById("resource-select");
var Output = getElementById("name-output");
//I don't know how to get it to return just the resource names for books, databases, research guides which is what I'd like it to do when
//user selects a resource type from dropdown box.
const Resources = [];
var ResourceNames = 0;
for (let i = 0; i < RESOURCES.type; i++) {
  ResourceNames.push(RESOURCES[i].type);
  if (ResourceNames.includes("book", i)) {
    ResourceNames++;
  }
}
