$(function() {
	initMap();
});

function initMap() {
	Maps.prototype.createMap(document.getElementById('map'), {
		center: new google.maps.LatLng(28.327951, -81.620986),
		zoom: 16,
	});

	var baseUrl = 'https://www.emeraldislandrentals.com/images/map/';

	addVilla('dory', 28.324415, -81.628671,
			"Dory's Magic - 7 bedroom villa",
			"Visit Dory's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/dory' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/dory</a>), a luxury 7 bed villa with 5.5 bath, air-con private home theater and games-room and south facing pool/spa. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This luxury home has its own fully air-conditioned private movie theater and game-room.<br><br>Reservations: 248-212-5540",
			baseUrl + '7a.png');

	addVilla('simba', 28.32649, -81.62642,
			"Simba's Magic - 7 bedroom villa",
			"Visit Simba's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/simba' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/simba</a>), a luxury 7 bed villa with air-con private home theater and games-room and south facing pool/spa. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This luxury home has its own fully air-conditioned private movie theater and game-room.<br><br>Reservations: 248-212-5540",
			baseUrl + '7b.png');

	addVilla('disney', 28.32556, -81.62656,
			"Disney Magic - 7 bedroom villa",
			"Visit Disney Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/disney' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/disney</a>), a luxury 7 bed villa with air-con games-room and south facing pool/spa. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This spacious luxury villa accommodates 16 guests in sheer luxury at affordable prices.<br><br>Reservations: 248-212-5540",
			baseUrl + '7c.png');

	addVilla('disney-ii', 28.32502, -81.62739,
			"Disney Magic II - 7 bedroom villa",
			"Visit Disney Magic II (<a href='https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/disney-ii' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/disney-ii</a>), a luxury 7 bed villa with air-con games-room and south facing pool/spa. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This luxury home is ideal for 3-4 families and accommodates 16 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '7d.png');

	addVilla('mufasa', 28.327569, -81.623248,
			"Mufasa's Magic - 7 bedroom villa",
			"Visit Mufasa's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/mufasa' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/mufasa</a>), a luxury 7 bed villa with air-con games-room and a private pool/spa. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This spacious luxury villa accommodates 16 guests and has two master suites.<br><br>Reservations: 248-212-5540",
			baseUrl + '7e.png');

	addVilla('emerald', 28.32495, -81.62725,
			"Emerald Magic - 6 bedroom villa",
			"Visit Emerald Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/emerald' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/emerald</a>), a luxury 6 bed villa with air-con games-room and south facing pool/spa. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This luxury home is ideal for 3-4 families and accommodates 14 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '6a.png');

	addVilla('tropical', 28.32634, -81.625,
			"Tropical Magic - 6 bedroom villa",
			"Visit Tropical Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/tropical' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/tropical</a>), a luxurious 6 bed villa with private pool/spa and games-room/theater room. Located in Emerald Island Resort, Kissimmee 3 miles to Disney. This luxury home is ideal for 3-4 families and accommodates 14 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '6b.png');

	addVilla('rafiki', 28.326208, -81.627720,
			"Rafiki's Magic - 6 bedroom villa",
			"Visit Rafiki's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/rafiki' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/6-7-bed/rafiki</a>), a luxurious 6 bed villa with private pool/spa and games-room. Located in Emerald Island Resort, Kissimmee 3 miles to Disney. This luxury home is ideal for 3-4 families and accommodates 14 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '6c.png');

	addVilla('nemo', 28.32416, -81.62541,
			"Nemo's Magic - 5 bedroom villa",
			"Visit Nemo's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/nemo' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/nemo</a>), an affordable 5 bed villa with games-room and private pool/spa. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This home has can accommodate 12 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '5a.png');

	addVilla('lilo', 28.32671, -81.62592,
			"Lilo's Magic - 5 bedroom villa",
			"Visit Lilo's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/lilo' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/lilo</a>), an affordable 5 bed villa with a spacious private pool. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This home has can accommodate 12 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '5b.png');

	addVilla('stitch', 28.32609, -81.62329,
			"Stitch's Magic - 5 bedroom villa",
			"Visit Stitch's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/stitch' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/stitch</a>), an affordable 5 bed villa with a spacious private pool. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This home has can accommodate 12 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '5c.png');

	addVilla('pluto', 28.32597, -81.62486,
			"Pluto's Magic - 4 bedroom villa",
			"Visit Pluto's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/pluto' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/pluto</a>), a luxury 4 bed pool villa in Emerald Island Resort, Kissimmee, Florida. This private pool home offers a game-room and can comfortably accommodate 10 guests. It is located close to shops, restaurants and golf courses and more importantly located within 3 miles from Disney World.<br><br>Reservations: 248-212-5540",
			baseUrl + '4a.png');

	addVilla('pumbaa', 28.32984, -81.6221,
			"Pumbaa's Magic - 4 bedroom villa",
			"Visit Pumbaa's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/pumbaa' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/pumbaa</a>), a luxury 4 bed villa with south facing pool. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This lovely villa accommodates 10 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '4b.png');

	addVilla('tigger', 28.32496, -81.6259,
			"Tigger's Magic - 4 bedroom villa",
			"Visit Tigger's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/tigger' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/tigger</a>), a luxury 4 bed pool villa in Emerald Island Resort, Kissimmee, Florida. This private pool home offers a game-room and can comfortably accommodate 10 guests. It is located close to shops, restaurants and golf courses and more importantly located within 3 miles from Disney World.<br><br>Reservations: 248-212-5540",
			baseUrl + '4c.png');

	addVilla('baloo', 28.329139, -81.623464,
			"Baloo's Magic - 4 bedroom villa",
			"Visit Baloo's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/baloo' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/baloo</a>), a luxury 4 bed pool villa in Emerald Island Resort, Kissimmee, Florida. This private pool home offers a game-room and can comfortably sleep 10 guests. It is located within 3 miles from Disney World and is an ideal vacation home for two families.<br><br>Reservations: 248-212-5540",
			baseUrl + '4e.png');

	addVilla('donald', 28.326546, -81.627239,
			"Donald's Magic - 4 bedroom villa",
			"Visit Donald's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/donald' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/donald</a>), a luxury 4 bed pool villa in Emerald Island Resort, Kissimmee, Florida. This private pool home offers a game-room and can comfortably sleep 8 guests. It is located within 3 miles from Disney World and is an ideal vacation home for two families.<br><br>Reservations: 248-212-5540",
			baseUrl + '4g.png');
			
	addVilla('roo', 28.3274, -81.62372,
			"Roo's Magic - 4 bedroom villa",
			"Visit Roo's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/roo' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/roo</a>), a luxury 4 bed pool villa in Emerald Island Resort, Kissimmee, Florida. This private pool home offers a game-room and can comfortably sleep 8 guests. It is located within 3 miles from Disney World and is an ideal vacation home for two families.<br><br>Reservations: 248-212-5540",
			baseUrl + '4f.png');
			
	addVilla('goofy', 28.326919, -81.625005,
			"Goofy's Magic - 4 bedroom villa",
			"Visit Goofy's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/goofy' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/4-5-bed/goofy</a>), a luxury 4 bed pool villa in Emerald Island Resort, Kissimmee, Florida. This private pool home offers a game-room and can comfortably sleep 10 guests. It is located within 3 miles from Disney World and is an ideal vacation home for two families.<br><br>Reservations: 248-212-5540",
			baseUrl + '4d.png');

	addVilla('florida', 28.32795, -81.62098,
			"Florida Magic - 4 bedroom townhome",
			"Visit Florida Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/florida' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/florida</a>), an affordable 4 bed townhouse. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This lovely villa accommodates 10 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '4h.png');
	
	addVilla('timon', 28.33129, -81.61597,
			"Timon's Magic - 3 bedroom townhome",
			"Visit Timon's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/timon' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/timon</a>), an affordable 3 bed townhouse. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This affordable townhome accommodates 8 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '3d.png');
	
	addVilla('marlin', 28.332224, -81.617126,
			"Marlin's Magic - 3 bedroom townhome",
			"Visit Marlin's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/marlin' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/marlin</a>), an affordable 3 bed townhouse. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This affordable townhome accommodates 6 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '3a.png');

	addVilla('mickey', 28.32954, -81.6162,
			"Mickey's Magic - 3 bedroom townhome",
			"Visit Mickey's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/mickey' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/mickey</a>), an affordable 3 bed townhouse. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This affordable townhome accommodates 8 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '3b.png');

	addVilla('minnie', 28.330320, -81.617170,
			"Minnie's Magic - 3 bedroom townhome",
			"Visit Minnie's Magic (<a href='https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/minnie' target=_'blank'>https://www.emeraldislandrentals.com/orlando-villas/3-4-bed/minnie</a>), an affordable 3 bed townhouse. Located in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney. This affordable townhome accommodates 8 guests.<br><br>Reservations: 248-212-5540",
			baseUrl + '3c.png');
	
	addVilla('club-house', 28.32924, -81.61994,
			"Emerald Island Club House",
			"Visit Emerald Island Reservations (<a href='https://www.emeraldislandrentals.com/emerald-island-resort-orlando' target='_blank'>https://www.emeraldislandrentals.com/emerald-island-resort-orlando</a>), Luxury 3-7 bed villas in Emerald Island Resort, Kissimmee, Florida - 3 miles to Disney.",
			baseUrl + 'e1.png');

	addVilla('playground', 28.32748, -81.62772,
			"Emerald Island Playground",
			"Emerald Island Playground. For reservations, please visit us at Emerald Island Resort Orlando (<a href='https://www.emeraldislandrentals.com/emerald-island-resort-orlando' target='_blank'>https://www.emeraldislandrentals.com/emerald-island-resort-orlando</a>)",
			baseUrl + 'e2.png');

	addVilla('walmart', 28.329730, -81.588540,
			"Wal-Mart (24 hours)",
			"2855 N Old Lake Wilson Road,<br>Kissimmee, FL 34747<br>407-606-0109<br><br>This is the closest 24-hour Wal-Mart to Emerald Island Resort",
			baseUrl + 's1.png');

	addVilla('disney-animal-kingdom', 28.35179, -81.60369,
			"Disney's Animal Kingdom",
			"2901 West Osceola Parkway<br>Orlando, Lake Buena Vista, FL 32830",
			baseUrl + 'd1.png');

	addVilla('disney-hollywood-studios', 28.35741, -81.55992,
			"Disney's Hollywood Studios",
			"351 S Studio Dr, Orlando, FL 32830, Estados Unidos<br>407-939-3463<br><a href='https://disneyworld.disney.go.com/destinations/hollywood-studios/' target='_blank'>https://disneyworld.disney.go.com/destinations/hollywood-studios/</a>",
			baseUrl + 'd2.png');

	addVilla('resort-community-pool-1', 28.33105, -81.61694,
			"Resort Community Pool #1",
			"This is the Emerald Island Resort's community pool (<a href='https://www.emeraldislandrentals.com/emerald-island-resort-orlando' target='_blank'>https://www.emeraldislandrentals.com/emerald-island-resort-orlando</a>) is just around the corner from here.",
			baseUrl + 'e3.png');

	addVilla('resort-community-pool-2', 28.32939, -81.61989,
			"Resort Community Pool #2",
			"This is the Emerald Island Resort's community pool, adjacent to the Club House. There is also a Tiki Bar, Internet Cafe and a Gym at this location.",
			baseUrl + 'e4.png');
}

function addVilla(id, lat, lng, name, description, icon) {
	Maps.prototype.addMarker(id, lat, lng, name, '<div style="width: 300px;"><strong style="font-size: 1.15em;">' + name + '</strong><br><br>' + description + '</div>', icon);
}

function openMarker(id) {
	Maps.prototype.openMarker(id);
}