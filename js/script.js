/* Author: Alex Palcuie

	Question Columns

*/


$(document).ready( function(){

	function randOrd(){
 		return (Math.round(Math.random())-0.5); }

	//Define persons and countries
	function link(person, country){
		this.person = person;
		this.country = country;
	}

	function country(country, id){
		this.country = country;
		this.id = id;
	}

	function person(person, id){
		this.person = person;
		this.id = id;
	}
	
	var links = new Array();
	
	links.push(new link("Constantin Brancusi", "Romania"));
	links.push(new link("Wolfgang Amadeus Mozart", "Austria"));
	links.push(new link("Gerardus Mercator", "Belgia"));
	links.push(new link("Elias Canetti", "Bulgaria"));
	links.push(new link("Franz Kafka", "Cehia"));
	links.push(new link("Anna Vissi", "Cipru"));
	links.push(new link("Hans Christian Andersen", "Danenmarca"));
	links.push(new link("Jaan Kross", "Estonia"));
	links.push(new link("Jean Monet", "Franta"));
	links.push(new link("Ludwig van Beethoven", "Germania"));
	links.push(new link("Aristotel Onassis", "Grecia"));
	links.push(new link("James Joyce", "Irlanda"));
	links.push(new link("Dante Alighieri", "Italia"));
	links.push(new link("Rudolfs Blaumanis", "Letonia"));
	links.push(new link("Martynas Mazvydas", "Lituania"));
	links.push(new link("Robert Schuman", "Luxemburg"));
	links.push(new link("Dun Karm Psaila", "Malta"));
	links.push(new link("William Shakespeare", "Marea Britanie"));
	links.push(new link("Mata Hari", "Olanda"));
	links.push(new link("Papa Ioan Paul al II-lea", "Polonia"));
	links.push(new link("Jose Saramago", "Portugalia"));
/*	links.push(new link("Greta Garbo", "Suedia"));
	links.push(new link("Milan Rastislav Stefanik", "Slovacia"));
	links.push(new link("Vinko Globokar ", "Slovenia"));
	links.push(new link("Miguel de Cervantes", "Spania"));
	links.push(new link("Sandor Petofi", "Ungaria"));*/

	var countries = new Array();
	var persons = new Array();
	
	for (var i in links){
		countries.push(new country(links[i].country, i));
		persons.push(new person(links[i].person, i));
	}

	countries.sort(function() {return 0.5 - Math.random()});
	persons.sort(function() {return 0.5 - Math.random()});

	for (var i in links){
		$('#persons').append('<li><a href="#" class="' + persons[i].id + ' person">' + persons[i].person + '</a></li>');
		$('#countries').append('<li><a href="#" class="' + countries[i].id +' country">' + countries[i].country + '</a></li>');
	}

	//Define teams
	function team(name, score){
		this.name = name;
		this.score = score;
	}
	
	var teams = new Array();
	
	teams.push(new team("Penguins", 0));
	teams.push(new team("Geeks", 0));
	
	for (var i in teams){
		$('thead tr').append('<td class="' + i + '">' + teams[i].name + '</td>');
	}
	for (var i in teams){
		$('tbody tr').append('<td class="' + i  + '">0</td>');
	}
	
	
	//Define events
	$('.person').bind('click', function() {
		$('#selected-person').html(links[this.className.split(' ')[0]].person);
		selected_person = this.className.split(' ')[0];
	});
	$('.country').bind('click', function() {
		$('#selected-country').html(links[this.className.split(' ')[0]].country);
		selected_country = this.className.split(' ')[0];
	});
	$('#check').bind('click', checkAnswer);
	$('#next').bind('click', nextTurn);
	
	//Define game
	var selected_person;
	var selected_country;
	var team = 0;
	
	function nextTurn(){
		$('thead .' + team).css('font-weight', 'normal');
		team += 1;
	
		$('#selected-country').empty();
		$('#selected-person').empty();
		
		$('#result').empty();
		
		var selected_person = 0;
		var selected_country = 0;
		
		team %= teams.length;
		$('thead .' + team).css('font-weight', 'bold');
	}
	
	function checkAnswer(){
		if (selected_person && selected_country){
			if(selected_person == selected_country){
				upScore();
				$('#result').html('Correct');
				$('#persons .' + selected_person).hide('slow');
				$('#countries .' + selected_country).hide('slow');
			}
			else{
				$('#result').html('Wrong');
			}
		}
	}
	
	function upScore(){
		teams[team].score++;
		$('tbody .' + team).html(teams[team].score);
	}
	
	//Options
	$('#goToOptions').bind('click', function(){
		$('#game').hide('slow');
		$('#options').show('slow');
	});
	
	$('#goToGame').bind('click', function(){
		$('#options').hide('slow');
		$('#game').show('slow');
	});
	
	//File saver
	BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.OperaBlobBuilder;

	// create BlobBuilder
	var bb = new BlobBuilder;
	bb.append("Hello World");

	// create Blob / File
	var blob = bb.getBlob('text/plain');

	// create FileReader
	var fr = new window.FileReader;

	// when done reading: use dataURL to download file
	fr.onload = function(e) {
		document.location = this.result;
	};

	$('#saveFile').bind('click',function(){
		var fileSaver = window.saveAs(bb.getBlob(), "test_file");
		fileSaver.onwriteend = myOnWriteEnd;
	});
	
});
















