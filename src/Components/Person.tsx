

interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country?:string;  //It will not through any error, can run(App.tsx) without it
}

export enum Country {
    India = "India",
    Brazil = "Brazil",
    CZ = "CZ",

}
export const Person = (props: Props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This Person {props.isMarried ? "is" : 'is not'} Married</h1>
            {props.friends.map((friend: string) => (
                <h1>{friend}</h1>
            ))}
            <h1>Country: {props.country}</h1>
        </div>
    )
}