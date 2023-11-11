import { useEffect, useState, createContext } from "react"
import { getAll } from "../api";
import Game from "../components/game";


const MainPage = () => {
    const TurnCounterContext = createContext(0);
    // const [hello, setHello] = useState('');

    // useEffect(() => {
    //     getAll().then(data => {
    //         setHello(data)
    //     });

    // }, '')


    return (
        <div>
            <Game />
            {/* <h2>{hello}</h2> */}
        </div>
    )

};

export default MainPage;