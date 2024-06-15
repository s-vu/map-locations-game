colleges = new Map([
    ['mit', 'Massachusetts Institute of Technology'], 
    ['massachusettsinstituteoftechnology', 'Massachusetts Institute of Technology'],
    ['stanforduniversity', 'Stanford University'],

    ['princetonuniversity', 'Princeton University'],

    ['harvarduniversity', 'Harvard University'],

    ['yaleuniversity', 'Yale University'],

    ['universityofpennsylvania', 'University of Pennsylvania'],
    ['upenn', 'University of Pennsylvania'],

    ['caltech', 'California Institute of Technology'],
    ['californiainstituteoftechnology', 'California Institute of Technology'],
    ['dukeuniversity', 'Duke University'],

    ['brownuniversity', 'Brown University'],

    ['johnshopkinsuniversity', 'Johns Hopkins University'],

    ['northwesternuniversity', 'Northwestern University'],

    ['columbiauniversity', 'Columbia University'],
    ['cornelluniversity', 'Cornell University'],

    ['universityofchicago', 'University of Chicago'],
    ['uchicago', 'University of Chicago'],

    ['universityofcaliforniaberkeley', 'University of California, Berkeley'],
    ['ucberkeley', 'University of California, Berkeley'],
    ['berkeley', 'University of California, Berkeley'],
    ['cal', 'University of California, Berkeley'],

    ['universityofcalifornialosangeles', 'University of California, Los Angeles'],
    ['universityofcaliforniala', 'University of California, Los Angeles'],
    ['ucla', 'University of California, Los Angeles'],

    ['riceuniversity', 'Rice University'],
    ['dartmouthcollege', 'Dartmouth College'],

    ['vanderbiltuniversity', 'Vanderbilt University'],
    ['universityofnotredame', 'University of Notre Dame'],

    ['universityofmichiganannarbor', 'University of Michigan - Ann Arbor'],
    ['universityofmichigan', 'University of Michigan - Ann Arbor'],
    ['umich', 'University of Michigan - Ann Arbor'],

    ['georgetownuniversity', 'Georgetown University'],

    ['universityofnorthcarolinaatchapelhill', 'University of North Carolina at Chapel Hill'],
    ['universityofnorthcarolinachapelhill', 'University of North Carolina at Chapel Hill'],
    ['universityofnorthcarolina', 'University of North Carolina at Chapel Hill'],
    ['unc', 'University of North Carolina at Chapel Hill'],

    ['carnegiemellonuniversity', 'Carnegie Mellon University'],
    ['cmu', 'Carnegie Mellon University'],

    ['emoryuniversity', 'Emory University'],

    ['universityofvirginia', 'University of Virginia'],
    ['uva', 'University of Virginia'],

    ['washingtonuniversityinst.louis', 'Washington University in St. Louis'],
    ['washingtonuniversitystlouis', 'Washington University in St. Louis'],
    ['washingtonuniversityinstlouis', 'Washington University in St. Louis'],
    ['washingtonuniversitystlouis', 'Washington University in St. Louis'],
    ['washu', 'Washington University in St. Louis'],
    ['wustl', 'Washington University in St. Louis'],

    ['universityofcaliforniadavis', 'University of California, Davis'],
    ['ucdavis', 'University of California, Davis'],
    ['ucd', 'University of California, Davis'],

    ['universityofcaliforniasandiego', 'University of California, San Diego'],
    ['ucsandiego', 'University of California, San Diego'],
    ['ucsd', 'University of California, San Diego'],

    ['universityofflorida', 'University of Florida'],

    ['universityofsoutherncalifornia', 'University of Southern California'],
    ['usc', 'University of Southern California'],

    ['universityoftexasataustin', 'University of Texas at Austin'],
    ['universityoftexasaustin', 'University of Texas at Austin'],
    ['utaustin', 'University of Texas at Austin'],
    ['texas', 'University of Texas at Austin'],


    ['georgiainstituteoftechnology', 'Georgia Institute of Technology'],
    ['georgiatech', 'Georgia Institute of Technology'],

    ['universityofcaliforniairvine', 'University of California, Irvine'],
    ['ucirvine', 'University of California, Irvine'],
    ['uci', 'University of California, Irvine'],

    ['newyorkuniversity', 'New York University'],
    ['nyu', 'New York University'],

    ['universityofcaliforniasantabarbara', 'University of California, Santa Barbara'],
    ['ucsb', 'University of California, Santa Barbara'],
    ['ucsantabarbara', 'University of California, Santa Barbara'],

    ['universityofillinoisurbanachampaign', 'University of Illinois Urbana-Champaign'],
    ['uiuc', 'University of Illinois Urbana-Champaign'],
    ['universityofillinois', 'University of Illinois Urbana-Champaign'],
    ['illinoisurbanachampaign', 'University of Illinois Urbana-Champaign'],

    ['universityofwisconsinmadison', 'University of Wisconsin - Madison'],
    ['universityofwisconsin', 'University of Wisconsin - Madison'],

    ['uwmadison', 'University of Wisconsin - Madison'],

    ['bostoncollege', 'Boston College'],
    ['bc', 'Boston College'],

    ['rutgersuniversity', 'Rutgers University - New Brunswick'],
    ['rutgersuniversitynewbrunswick', 'Rutgers University - New Brunswick'],
    ['rutgersnewbrunswick', 'Rutgers University - New Brunswick'],

    ['tuftsuniversity', 'Tufts University'],

    ['universityofwashington', 'University of Washington'],

    ['bostonuniversity', 'Boston University'],
    ['bu', 'Boston University'],

    ['theohiostateuniversity', 'The Ohio State University'],
    ['ohiostateuniversity', 'The Ohio State University'],
    ['osu', 'The Ohio State University'],

    ['purdueuniversity', 'Purdue University'],

    ['universityofmarylandcollegepark', 'University of Maryland, College Park'],
    ['universityofmaryland', 'University of Maryland, College Park'],
    ['marylandcollegepark', 'University of Maryland, College Park'],
    ['umd', 'University of Maryland, College Park'],

    ['lehighuniversity', 'Lehigh University'],

    ['texasamuniversity', 'Texas A&M University'],
    ['tamu', 'Texas A&M University'],
    ['texasam', 'Texas A&M University'],
    ['tam', 'Texas A&M University'],

    ['universityofgeorgia', 'University of Georgia'],
    ['uga', 'University of Georgia'],

    ['universityofrochester', 'University of Rochester'],

    ['virginiatech', 'Virginia Tech'],

    ['wakeforestuniversity', 'Wake Forest University'],
    ['wfu', 'Wake Forest University']

]);

collegesCoordinates = new Map([
    ['Massachusetts Institute of Technology', [42.359120, -71.091651]],
    ['Stanford University', [37.4277, -122.1701]],
    ['Princeton University', [40.3431, -74.6551]],
    ['Harvard University', [42.3744, -71.1182]],
    ['Yale University', [41.3163, -72.9223]],
    ['University of Pennsylvania', [39.9522, -75.1932]],
    ['California Institute of Technology', [34.1377, -118.1253]],
    ['Duke University', [36.0014, -78.9382]],
    ['Brown University', [41.8268, -71.4025]],
    ['Johns Hopkins University', [39.3299, -76.6205]],
    ['Northwestern University', [42.0565, -87.6753]],
    ['Columbia University', [40.8075, -73.9626]],
    ['Cornell University', [42.4534, -76.4735]],
    ['University of Chicago', [41.7904, -87.6004]],
    ['University of California, Berkeley', [37.8702, -122.2595]],
    ['University of California, Los Angeles', [34.0699, -118.4438]],
    ['Rice University', [29.7174, -95.4018]],
    ['Dartmouth College', [43.7044, -72.2887]],
    ['Vanderbilt University', [36.1447, -86.8027]],
    ['University of Notre Dame', [41.7051, -86.2355]],
    ['University of Michigan - Ann Arbor', [42.2771, -83.7382]],
    ['Georgetown University', [38.9076, -77.0723]],
    ['University of North Carolina at Chapel Hill', [35.904, -79.04690]],
    ['Carnegie Mellon University', [40.4432, -79.9428]],
    ['Emory University', [33.7971, -84.3222]],
    ['University of Virginia', [38.035, -78.5036]],
    ['Washington University in St. Louis', [38.6488, -90.3108]],
    ['University of California, Davis', [38.5382, -121.7617]],
    ['University of California, San Diego', [32.8801, -117.2340]],
    ['University of Florida', [29.6465, -82.3533]],
    ['University of Southern California', [34.0224, -118.2851]],
    ['University of Texas at Austin', [30.2850, -97.7335]],
    ['Georgia Institute of Technology', [33.7756, -84.3963]],
    ['University of California, Irvine', [33.6424, -117.8417]],
    ['New York University', [40.7295, -73.9965]],
    ['University of California, Santa Barbara', [34.4140, -119.8489]],
    ['University of Illinois Urbana-Champaign', [40.1020, -88.2272]],
    ['University of Wisconsin - Madison', [43.0766, -89.4125]],
    ['Boston College', [42.3355, -71.1685]],
    ['Rutgers University - New Brunswick', [40.5008, -74.4474]],
    ['Tufts University', [42.4085, -71.1183]],
    ['University of Washington', [47.6546, -122.3075]],
    ['Boston University', [42.3505, -71.1054]],
    ['The Ohio State University', [40.0067, -83.0305]],
    ['Purdue University', [40.4237, -86.9212]],
    ['University of Maryland, College Park', [38.9869, -76.9426]],
    ['Lehigh University', [40.6054, -75.3773]],
    ['Texas A&M University', [30.6187, -96.3365]],
    ['University of Georgia', [33.9567, -83.3752]],
    ['University of Rochester', [43.1306, -77.6260]],
    ['Virginia Tech', [37.2284, -80.4234]],
    ['Wake Forest University', [36.1355, -80.2793]]

]);

collegeTitle = "Can you name the top 50 colleges/universities?"
collegeDesc = 'Schools determined by US News & World Report\'s 2024 ranking. There are 52 schools due to ties.'

function collegeMask(current) {
    let val = current;
    if (colleges.has(val + 'university') && val !== 'boston') val = val + 'university';
    else if (colleges.has(val + 'college') && val !== 'boston') val = val + 'college';
    else if (colleges.has('universityof' + val)) val = 'universityof' + val;
    return val;
}