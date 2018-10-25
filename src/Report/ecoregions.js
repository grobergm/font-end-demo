
const ecoregions=
[
{name:'oregon', N:46.300,E:116.500,S:42.000,W:124.500},
{name:'beach', N:46.256,E:123.946,S:42.050,W:125.562},
{name:'coast', N:45.936,E:123.347,S:42.817,W:124.352},
{name:'willamette', N:45.546,E:122.759,S:44.111,W:123.288},
{name:'klamath', N:42.699,E:122.694,S:42.017,W:124.211},
{name:'west', N:45.444,E:121.770,S:42.880,W:122.721},
{name:'east', N:45.540,E:121.003,S:42.023,W:121.767},
{name:'columbia', N:45.100,E:118.584,S:45.320,W:120.433},
{name:'blue', N:45.405,E:116.671,S:44.163,W:119.981},
{name:'basin', N:43.452,E:117.027,S:42.125,W:119.897}
];

let Diff=ecoregions.map(place=>{
	return {S:place.S,LatDiff:place.N-place.S,E:place.E,LngDiff:place.W-place.E}
})
const results=
{
oregon: {S:42.00, LatDiff: 4.23, E: 116.500, LngDiff: 8},
beach: {S:42.05, LatDiff: 4.206000000000003, E: 123.946, LngDiff: 1.6159999999999997},
coast: {S: 42.817, LatDiff: 3.1189999999999998, E: 123.347, LngDiff: 1.0050000000000097},
willamette: {S: 44.111, LatDiff: 1.4350000000000023, E: 122.759, LngDiff: 0.5289999999999964},
klamath: {S: 42.017, LatDiff: 0.681999999999995, E: 122.694, LngDiff: 1.516999999999996},
west: {S: 42.88, LatDiff: 2.564, E: 121.77, LngDiff: 0.9510000000000076},
east: {S: 42.023, LatDiff: 3.516999999999996, E: 121.003, LngDiff: 0.7639999999999958},
columbia: {S: 45.32, LatDiff: -0.21999999999999886, E: 118.584, LngDiff: 1.8490000000000038},
blue: {S: 44.163, LatDiff: 1.2420000000000044, E: 116.671, LngDiff: 3.309999999999988},
basin: {S: 42.125, LatDiff: 1.3269999999999982, E: 117.027, LngDiff: 2.8700000000000045}
};

const randomXY=(S,Lat,E,Lng)=>{return {randLat:S+Math.random()*Lat,randLng:E+Math.random()*Lng}};

const sample=(ecoregion)=>{
	let S=results[ecoregion].S,
		Lat=results[ecoregion].LatDiff,
		E=results[ecoregion].E,
		Lng=results[ecoregion].LngDiff;

	return randomXY(S,Lat,E,Lng)
}

export default sample;