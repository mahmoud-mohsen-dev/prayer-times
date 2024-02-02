function getTimesPrayer(city, country) {
    // get the dates
    const date = new Date();
    const dateByYear = date.getFullYear();
    const dateByMonth = date.getMonth();
    const dateByDay = date.getDate() - 1;
    // console.log('begining of axios')
    // Reques the data from the api
    console.log(
        `http://api.aladhan.com/v1/calendarByCity/${dateByYear}/${
            dateByMonth + 1
        }?city=${city}&country=${country}&method=2`
    );
    axios
        .get(
            `http://api.aladhan.com/v1/calendarByCity/${dateByYear}/${
                dateByMonth + 1
            }?city=${city}&country=${country}&method=2`
        )
        .then((response) => {
            console.log(response);
            // const dates = response.data.data;
            // console.log(dates)
            // const hijriDate = dates[dateByDay].date.hijri;
            // const gregorianDate = dates[dateByDay].date.gregorian;
            // const hijri =
            //   hijriDate.weekday.ar +
            //   " " +
            //   hijriDate.day +
            //   " " +
            //   hijriDate.month.ar +
            //   " " +
            //   hijriDate.year;

            // const gregorian =
            //   gregorianDate.weekday.en +
            //   " " +
            //   gregorianDate.day +
            //   " " +
            //   gregorianDate.month.en +
            //   " " +
            //   gregorianDate.year;
            // let { Sunrise, Fajr, Dhuhr, Asr, Maghrib, Isha } = dates[dateByDay].timings;

            // Sunrise = Sunrise.split(" ")[0];
            // Fajr = Fajr.split(" ")[0];
            // Dhuhr = Dhuhr.split(" ")[0];
            // Asr = Asr.split(" ")[0];
            // Maghrib = Maghrib.split(" ")[0];
            // Isha = Isha.split(" ")[0];

            // displayTimes(Sunrise, Fajr, Dhuhr, Asr, Maghrib, Isha,gregorian, hijri);
        })
        .catch((error) => console.log(error + " @Getting Time Prayer Func"));
}

function displayTimes(
    Sunrise,
    Fajr,
    Dhuhr,
    Asr,
    Maghrib,
    Isha,
    gregorian,
    hijri
) {
    let sunriseElement = document.querySelector(".sunrise .time");
    let fajrElement = document.querySelector(".fajr .time");
    let dhuhrElement = document.querySelector(".dhuhr .time");
    let asrElement = document.querySelector(".asr .time");
    let maghribElement = document.querySelector(".maghrib .time");
    let ishaElement = document.querySelector(".isha .time");
    let gregorianElement = document.querySelector(".gregorian-date");
    let hijriElement = document.querySelector(".hijri-date");

    let arr = [Sunrise, Fajr, Dhuhr, Asr, Maghrib, Isha];
    const resultArr = arr.map((item) => {
        const hours = Number(item.slice(0, 2));
        const minutes = item.slice(2);
        return hours > 12 ? hours - 12 + minutes + " PM" : item + " AM";
    });

    const [SunriseTime, FajrTime, DhuhrTime, AsrTime, MaghribTime, IshaTime] =
        resultArr;

    gregorianElement.innerHTML = gregorian;
    hijriElement.innerHTML = hijri;
    sunriseElement.innerHTML = SunriseTime;
    fajrElement.innerHTML = FajrTime;
    dhuhrElement.innerHTML = DhuhrTime;
    asrElement.innerHTML = AsrTime;
    maghribElement.innerHTML = MaghribTime;
    ishaElement.innerHTML = IshaTime;
}

const search = document.querySelector(".search-logo");
search.addEventListener("click", searchTimesOfTheCity);

function searchTimesOfTheCity() {
    const input = document.querySelector(".search-input");
    console.log(input.value);
    getTimesPrayer(input.value);
}
getTimesPrayer("cairo", "Egypt");
// console.log("loaded")
