import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

const five = [];
for (let i = 0; i < 5; i++) {
  five.push(contacts[i]);
}
console.log(contacts);

function App() {
  const [contact, setContact] = useState(five);
  const addContact = () => {
    const rand = Math.floor(Math.random() * contacts.length);
    const newContact = contacts[rand];
    if (five.includes(newContact)) {
      addContact();
    } else setContact([five, newContact]);
  };
  return (
    <div className="App">
      <button onClick={addContact}>Add random contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {five.map((contact) => (
            <tr>
              <td>
                {" "}
                <img src={contact.pictureUrl} alt="oops"></img>
              </td>
              <td> {contact.name}</td>
              <td> {contact.popularity}</td>
              <td> {contact.wonOscar ? "🏆" : ""} </td>
              <td> {contact.wonEmmy ? "🏆" : ""} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
