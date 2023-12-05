export default function DynamicName({params}: {params: {name: string};}){
    return <h1>Details of name, {params.name}</h1>;
}