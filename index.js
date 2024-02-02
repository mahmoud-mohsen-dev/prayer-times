console.log("before")
async function getData(){
    const result = await fetch(
      "http://api.aladhan.com/v1/calendarByCity/2023/11?city=cairo&country=egypt&method=2"
    )
    const data = await result.json()
    return data.data
}
console.log("after")

console.log(getData())