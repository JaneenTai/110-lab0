console.log("Welcome to Lemonade Stand!!");
dayReport(5, 1, 59);

class LemonadeStand{
	currentAssets: number
}

class manager{
	currentDay: number;
	currentWeather: number;
	currentPrice: number;
}

function dayReport(currentDay: number, currentWeather: number, currentPrice: number){
	console.log(currentDay + "\n");
	console.log(currentWeather + "\n");
	console.log(currentPrice + "\n");
}
