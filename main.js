d3.dsv(',','leading-death-causes-nj.csv',function(d){
        return {
            year: d.Year,
            causeOfDeath: d['Cause of Death'],
            numberOfDeaths: +d['Number of Deaths'],
            ageAdjustedDeathRate: +d['"Age-Adjusted Death Rate per 100,000 Population"']
        };
}).then(function(data) {
    d3.json('Ocean.geojson').then(function (oceanCounty) {
        console.log(data);
        var center = [40.0583, -74.4057];
        var map = L.map("mapid").setView(center, 8);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.geoJSON(oceanCounty).addTo(map)
            .bindPopup('<p style="text-align: center;">Ocean County <br> New Jersey</p>')
            .openPopup();
    });
});