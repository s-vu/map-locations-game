const nflTitle = "Can you name each NFL stadium?"
const nflDesc = "There are 30 stadiums among the 32 teams. Names are accurate as of 2024."
const nflStadiums = new Map([
    ['lambeaufield', 'Green Bay Packers: Lambeau Field'],
    ['attstadium', 'Dallas Cowboys: AT&T Stadium'],
    ['arrowheadstadium', 'Kansas City Chiefs: Arrowhead Stadium'],
    ['mercedesbenzstadium', 'Atlanta Falcons: Mercedes-Benz Stadium'],
    ['gillettestadium', 'New England Patriots: Gillette Stadium'],
    ['sofistadium', 'Los Angeles Rams/Chargers: SoFi Stadium'],
    ['metlifestadium', 'New York Giants/Jets: MetLife Stadium'],
    ['soldierfield', 'Chicago Bears: Soldier Field'],
    ['empowerfieldatmilehigh', 'Denver Broncos: Empower Field at Mile High'],
    ['nissanstadium', 'Tennessee Titans: Nissan Stadium'],
    ['raymondjamesstadium', 'Tampa Bay Buccaneers: Raymond James Stadium'],
    ['bankofamericastadium', 'Carolina Panthers: Bank of America Stadium'],
    ['allegiantstadium', 'Las Vegas Raiders: Allegiant Stadium'],
    ['mtbankstadium', 'Baltimore Ravens: M&T Bank Stadium'],
    ['lucasoilstadium', 'Indianapolis Colts: Lucas Oil Stadium'],
    ['statefarmstadium', 'Arizona Cardinals: State Farm Stadium'],
    ['usbankstadium', 'Minnesota Vikings: U.S. Bank Stadium'],
    ['levisstadium', 'San Francisco 49ers: Levi\'s Stadium'],
    ['lincolnfinancialfield', 'Philadelphia Eagles: Lincoln Financial Field'],
    ['heinzfield', 'Pittsburgh Steelers: Heinz Field'],
    ['paulbrownstadium', 'Cincinnati Bengals: Paul Brown Stadium'],
    ['fordfield', 'Detroit Lions: Ford Field'],
    ['tiaabankfield', 'Jacksonville Jaguars: TIAA Bank Field'],
    ['hardrockstadium', 'Miami Dolphins: Hard Rock Stadium'],
    ['highmarkstadium', 'Buffalo Bills: Highmark Stadium'], // Formerly known as New Era Field
    ['firstenergystadium', 'Cleveland Browns: FirstEnergy Stadium'],
    ['lumenfield', 'Seattle Seahawks: Lumen Field'], // Formerly known as CenturyLink Field
    ['fedexfield', 'Washington Commanders: FedExField'],
    ['gillettestadium', 'New England Patriots: Gillette Stadium'],
    ['caesarssuperdome', 'New Orleans Saints: Caesars Superdome'],
    ['nrgstadium', 'Houston Texans: NRG Stadium']
]);

const nflStadiumCoordinates = new Map([
    ['Green Bay Packers: Lambeau Field', [44.5013, -88.0622]],
    ['Dallas Cowboys: AT&T Stadium', [32.7473, -97.0945]],
    ['Kansas City Chiefs: Arrowhead Stadium', [39.0516, -94.4803]],
    ['Atlanta Falcons: Mercedes-Benz Stadium', [33.7554, -84.4008]],
    ['New England Patriots: Gillette Stadium', [42.0909, -71.2643]],
    ['Los Angeles Rams/Chargers: SoFi Stadium', [33.9534, -118.3386]],
    ['New York Giants/Jets: MetLife Stadium', [40.8136, -74.0743]],
    ['Chicago Bears: Soldier Field', [41.8625, -87.6167]],
    ['Denver Broncos: Empower Field at Mile High', [39.7439, -105.0201]],
    ['Tennessee Titans: Nissan Stadium', [36.1664, -86.7713]],
    ['Tampa Bay Buccaneers: Raymond James Stadium', [27.9759, -82.5033]],
    ['Carolina Panthers: Bank of America Stadium', [35.2258, -80.8528]],
    ['Las Vegas Raiders: Allegiant Stadium', [36.0907, -115.1830]],
    ['Baltimore Ravens: M&T Bank Stadium', [39.2777, -76.6229]],
    ['Indianapolis Colts: Lucas Oil Stadium', [39.7601, -86.1639]],
    ['Arizona Cardinals: State Farm Stadium', [33.5276, -112.2626]],
    ['Minnesota Vikings: U.S. Bank Stadium', [44.9738, -93.2575]],
    ['San Francisco 49ers: Levi\'s Stadium', [37.4030, -121.9700]],
    ['Philadelphia Eagles: Lincoln Financial Field', [39.9008, -75.1675]],
    ['Pittsburgh Steelers: Heinz Field', [40.4468, -80.0158]],
    ['Cincinnati Bengals: Paul Brown Stadium', [39.0954, -84.5161]],
    ['Detroit Lions: Ford Field', [42.3399, -83.0458]],
    ['Jacksonville Jaguars: TIAA Bank Field', [30.3240, -81.6373]],
    ['Miami Dolphins: Hard Rock Stadium', [25.9570, -80.2389]],
    ['Buffalo Bills: Highmark Stadium', [42.7738, -78.7870]],
    ['Cleveland Browns: FirstEnergy Stadium', [41.5066, -81.6995]],
    ['Seattle Seahawks: Lumen Field', [47.5952, -122.3316]],
    ['Washington Commanders: FedExField', [38.9076, -76.8644]],
    ['New England Patriots: Gillette Stadium', [42.0909, -71.2643]],
    ['New Orleans Saints: Caesars Superdome', [29.9509, -90.0814]],
    ['Houston Texans: NRG Stadium', [29.6847, -95.4107]],
]);

module.exports = {
    nflStadiumCoordinates,
    nflStadiums,
    nflDesc,
    nflTitle,
  };
  