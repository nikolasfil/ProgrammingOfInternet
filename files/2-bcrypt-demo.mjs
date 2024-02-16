import bcrypt from "bcrypt"
const myPassword = "πολύδύσκολονατομαντέψω"
let hashedPassword

for (let cost = 10; cost <= 15; cost++) {
    console.time(`cost: ${cost}, time`)
    hashedPassword = bcrypt.hashSync(myPassword, cost)
    console.log(hashedPassword)
    console.timeEnd(`cost: ${cost}, time`)
}

// hashedPassword = await bcrypt.hash(myPassword, 10)
// console.log(hashedPassword)