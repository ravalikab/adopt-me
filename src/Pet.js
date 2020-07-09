import React from "react";
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}

//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);

// const App = () => {
// return React.createElement("div", {}, [
//   React.createElement("h1", {id:"something"}, "Adopt Me"),
//   React.createElement(Pet, {
//     name: "Luna",
//     animal: "Dog",
//     breed: "Havanese",
//   }),
//   React.createElement(Pet, {
//     name: "Pepper",
//     animal: "Bird",
//     breed: "Pegion",
//   }),
//   React.createElement(Pet, {
//     name: "Billy",
//     animal: "Cat",
//     breed: "Mixed",
//   }),
// ]);

//     return (
//       <div>
//         <h1 id="something">Adopt me</h1>
//         <Pet name="Luna" animal="Dog" breed="Havanese" />
//         <Pet name="Pepper" animal="Bird" breed="Pegion" />
//         <Pet name="Billy" animal="cat" breed="Mixed" />
//       </div>
//     );
//   };

//   render(<App />, document.getElementById("root"));
