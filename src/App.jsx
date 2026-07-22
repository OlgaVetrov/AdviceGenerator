import './App.css';
import video from './assets/sea.mp4';
import { useEffect, useState } from 'react';

function App() {

const [advices, setAdvices] = useState("");

const fetchAdvices = async () => {
const response = await fetch(`https://bored.api.lewagon.com/api/activity`);
const data = await response.json();
console.log(data);
setAdvices(data.activity);
}

useEffect(() => {
fetchAdvices();
}, []);

return (
<div className="App">
<video autoPlay muted loop>
<source src={video} type="video/mp4"/>
</video>

<div className="container">
<p>{advices}</p>
</div>

<div className="container">
<button onClick={fetchAdvices}>New Advice</button>
</div>
</div>
);
}

export default App;
