import { GreetingsHoC } from "../components/Greetings"



export const LabTwo = () => {
    return (
        <GreetingsHoC name={"Ben"}>
            <p>I want to welcome you to my website.</p>
        </GreetingsHoC>
    )
}