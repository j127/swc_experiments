import { Hobbit } from "./hobbit";
import { haveBirthday } from "./birthday";

function main(): void {
    const frodo: Hobbit = {
        name: "Frodo",
        age: 33,
    };

    const bilbo: Hobbit = {
        name: "Bilbo",
        age: 110,
    };
    console.log("bilbo", bilbo);

    const olderBilbo = haveBirthday(bilbo);

    console.log("frodo", frodo);
    console.log("olderBilbo", olderBilbo);
}

main();
