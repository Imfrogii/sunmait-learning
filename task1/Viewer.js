// let main = (function(){
function Block(name, about, img){
  this.name = name;
  this.about = about;
  this.img = img;
}

addBlock = (name, about, img) =>{
  blocks.push(new Block(name, about, img));
}

let blocks = new Array();

addBlock("SPRING BOOT",
 "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.", "img/boot.svg");

addBlock("SPRING FRAMEWORK",
"Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.", "img/framework.svg");

addBlock("SPRING CLOUD DATA FLOW",
 "An orchestration service for composable data microservice applications on modern runtimes.",
 "img/data-flow.svg");

addBlock("SPRING CLOUD",
 "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.", "img/cloud.svg");

addBlock("SPRING DATA",
 "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
 "img/springdata.png");

addBlock("SPRING INTEGRATION",
 "Supports the well-known <em>Enterprise Integration Patterns</em> via lightweight messaging and declarative adapters.", "img/integration.png");

let sections = document.getElementsByClassName("sections")[0];

show = (arrBlocks) =>{
  while(sections.firstChild)
    sections.firstChild.remove();
  if(arrBlocks.length===0){
    sections.innerHTML = "<big><big>No results</big></big>";
    return;
  }
  arrBlocks.map((block) =>{
    let a = document.createElement("a");
    a.className = "section";
    let img = document.createElement("img");
    img.src = block.img;
    let h4 = document.createElement("h4");
    h4.innerHTML = block.name;
    let span = document.createElement("span");
    span.innerHTML = block.about;
    a.append(img);
    a.append(h4);
    a.append(span);
    sections.append(a);
  });
}

getBlocks = () => {
  return blocks;
}

show(blocks);
