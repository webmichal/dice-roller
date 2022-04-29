const cubeContainer = document.querySelector(".cubeContainer");
const cubes = document.querySelectorAll(".cube");

const rollButton = document.querySelector("#app .rollCube");
const addButton = document.querySelector(".addCube");
const rmButton = document.querySelector(".removeCube");

rollButton.addEventListener("click", (e) => { 
    for(let i = 0; i < cubes.length; i++ ) {
        cubes[i].textContent = Math.ceil(Math.random() * 6);
    }
});

addButton.addEventListener("click", (e) => {
    let cube = document.createElement("div");
    cube.className = "cube";
    cubeContainer.append(cube);
});


rmButton.addEventListener("click", (e) => {
    cubeContainer.lastChild.remove();
});


