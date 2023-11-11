import { useEffect, useState } from "react"
import { getAll } from "../api";
import Game from "../components/game";


const MainPage = () => {
    // const [hello, setHello] = useState('');

    // useEffect(() => {
    //     getAll().then(data => {
    //         setHello(data)
    //     });

    // }, '')


    return(
        <div>
            <h1>
            start here
            </h1>
            <Game />
            {/* <h2>{hello}</h2> */}
        </div>
    )

};

export default MainPage;