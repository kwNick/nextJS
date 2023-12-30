function Header(){
    let name = "Nick";
    return (
        <h1>Hello World!! {name}</h1>
    );
}

export default function Page(){
    return(
        <section>
            <Header/>
            <p>This is my amazing site!</p>
        </section>
    );
}