
const getPuzzle = async(wordCount) => {
    let res = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        if(res.status === 200){
            let data = await res.json()
            return data.puzzle
        }else{
            throw new Error('That sucks')
        }
    
}

// const getCountry = async(countryCode) => {
//     let res = await fetch('http://restcountries.eu/rest/v2/all/')
//         if (res.status === 200) {
//             let data = await res.json()
//             let country = await  data.find((country) => country.alpha2Code === countryCode)
//             return country
//         } else {
//             throw new Error ('No such country')
//         } 
// }

// const getLocation = async () => {
//     let res = await fetch ('https://ipinfo.io/json?token=e659b01f73c8b4')
//         if(res.status === 200) {
//             let data = await res.json()
//             return data
//         } else {
//             throw  new Error('Oh my gohd1 where am I?')
//         }
// }

// const getCurrentCountry = async () => {
//     let location = await getLocation()
//     let country = await getCountry(location.country)
//     return country
// }