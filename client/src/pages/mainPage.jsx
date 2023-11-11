import { useEffect, useState } from "react"
import { getAll } from "../api";
import Game from "../components/game";
import Navbar from "../components/navbar";


const MainPage = () => {
    // const [hello, setHello] = useState('');

    // useEffect(() => {
    //     getAll().then(data => {
    //         setHello(data)
    //     });

    // }, '')


    return (
        <div>
            <Navbar />
            <Game />
            {/* <h2>{hello}</h2> */}
        </div>
    )

};

export default MainPage;