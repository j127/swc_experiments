import { Hobbit } from "./hobbit";

export function haveBirthday(hobbit: Hobbit): Hobbit {
    console.log(`======= celebrating ${hobbit}'s birthday =======`);
    return {
        ...hobbit,
        age: hobbit.age + 1,
    };
}
