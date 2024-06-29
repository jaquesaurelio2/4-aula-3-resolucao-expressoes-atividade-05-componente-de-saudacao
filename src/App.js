import "./styles.css";

export default function App() {
  const firstName = "Turma";
  const lastName = "FAST";
  const date = new Date();
  const hours = date.getHours();
  // const hours = 18;
  const minutes = date.getMinutes();

  const getGreeting = () => {
    if (hours < 12) {
      return "bom dia";
    }
    if (hours < 18) {
      return "boa tarde";
    }
    return "boa noite";
  };

  let greeting;
  if (hours < 12) {
    greeting = "bom dia";
  } else if (hours < 18) {
    greeting = "boa tarde";
  } else {
    greeting = "boa noite";
  }

  return (
    <div className="App">
      <h1>
        {greeting}, {firstName} {lastName}
      </h1>

      <h2>
        {getGreeting()}, {firstName} {lastName}
      </h2>

      <hr />

      <h2>{`Horário ${hours}h${minutes}m`}</h2>

      <h3>{"Horário " + hours + "h" + minutes + "m"}</h3>

      <h4>
        Horário {hours}h{minutes}m
      </h4>
    </div>
  );
}
