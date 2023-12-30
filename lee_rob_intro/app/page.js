import Footer from "./footer";   //export default function
import {Waist} from "./waist";   //export function
import {Tweet} from "react-tweet";
function Header({ name }){
    // let name = "Nick";
    return (
        <h1>Hello World!! {name}</h1>
    );
}

function Stomach({children}){
    return (
        <section>
            {children}
        </section>
    );
}

export default function Page(){
    return(
        <>
        <section>
            <Header name="Nick"/>
            <p>This is my amazing site!</p>
            <Stomach>
                <p>Making me type so i can practice whats going on!</p>
                <p>This seems to be enough for now</p>
            </Stomach>
            <Waist desc="what more can I say!"/>
            <Footer> <p>lets play a game...   Psych!</p></Footer>
        </section>
        <section>
            <Tweet id=""/>
        </section>
        </>
    );
}