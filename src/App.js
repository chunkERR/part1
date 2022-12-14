const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}


const App = () => {
  const name = "Jakub"
  const age = 29

  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Maya" age={26+10}/>
    <Hello name={name} age={age}/>

  </div>
)}

export default App
