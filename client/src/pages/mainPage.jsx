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
          <Game />
        </div>
    )

};

export default MainPage;