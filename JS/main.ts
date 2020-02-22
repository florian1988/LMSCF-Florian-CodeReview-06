

// the location area with the main class 
class Citys{

	id: number;
	image: string;
	city: string;


	constructor(a:number, b:string, c:string) {
			this.id = a;
			this.image = b;
			this.city = c;

	}

	basic(){
		return`
		    <div class="col-sm-5 header d-none d-sm-block ">
		       <p class="notShowBasic">${this.id}</p>
		        <h1 class=" col-sm-8  mx-4 text-right ">${this.city}</h1>

		      <img class=" col-sm-8 " src="${this.image}" alt="asdf">
		    </div>
		`
	}
// main function is there for the other two classes 
	main(){
		return`
			<div class="container-fluid col-sm-5 col-md-3 rounded-pill mb-2 ">
			<p class="notShowBasic">${this.id}</p>
			<h1 class=" text-center bg-light rounded-pill ">${this.city}</h1>
			<img class="notShowBasic" src="${this.image}" alt="asdf">
		`

	}

}

let salzburg = new Citys( 1,"./IMG/salzburg4.jpg","Salzburg");

let ljubjana = new Citys( 2,"./IMG/ljubljana_F.jpg","Ljubljana");

let stadt = [salzburg, ljubjana ];


for ( let i = 0; i < stadt.length; i++) {
console.log(stadt[i]);

document.getElementsByClassName("showcity")[0].innerHTML += (stadt[i].basic()); 
};



// *******************************************************************************************
// *******************************Resturant's part *******************************************
class Restaurant extends Citys{
	
	name: string;
	webpage: string;
	typ: string;
	phone: number;
	image: string;

	constructor(a,b,c,e:string,f:string,g:string,h:number, i:string) {
		super(a,b,c);
		this.name = e;
		this.webpage = f;
		this.typ = g;
		this.phone = h;
		this.image= i;
	}

	mainRestaurant(){
		return super.main() + `
		<!-- <div class="container-fluid"> -->
  			  
		    <div class="col-sm-12 text-center article bg-light">
		      
		      <img class=" img p-1  img_show d-none d-sm-block"src="${this.image}" alt="">
		     <h4 >${this.name}</h4>
			      <div class=" text-left " >
			      <p>WebPage: <a class="btn btn-light" href="${this.webpage}" role="button">Link</a></p>
			      <p >Typ: ${this.typ}</p>
			      <p >Phone: ${this.phone}</p>
			     
			      </div>

		      
		    </div>			 

		</div>
		`
	}
}

let zwettler = new Restaurant(1,"./IMG/salzburg4.jpg","Salzburg", "Zwettler's", "https://www.zwettlers.com/startseite/","Wirtshaus", 98654651, "./IMG/zwettler.jpg");

let sternbreu = new Restaurant(2,"./IMG/salzburg4.jpg","Salzburg","Sternbräu", "https://www.sternbrau.com/","Wirtshaus", 213548, "./IMG/Arkadengarten.jpg");
let forum = new Restaurant(3,"./IMG/ljubljana_F.jpg","Ljubljana", "Forum", "https://www.forumbarljubljana.com/", "Bar", 554866, "./IMG/forum.png" );
let dovni_bar = new Restaurant(4,"./IMG/ljubljana_F.jpg","Ljubljana", "Dovni Bar", "https://dvornibar.net/", "Bar",5656565, "./IMG/dovni_bar.jpg");


let restaurants = [zwettler, sternbreu, forum, dovni_bar];
console.log(restaurants);

for ( let i = 0; i < restaurants.length; i++) {


document.getElementsByClassName("showrestaurants")[0].innerHTML += (restaurants[i].mainRestaurant()); 

}


// *******************************************************************************************
// *******************************Event's part *******************************************

class Eventt extends Citys{
	
	name: string;
	date: string;
	time: string;
	image: string;

	constructor(a,b,c,e:string,f:string,g:string, h:string) {
		super(a,b,c);
		this.name = e;
		this.date = f;
		this.time = g;
		this.image = h;
	}

	mainEvent(){
		return super.main() + `
					 
	    <div class="col-sm-12 text-center article bg-light">
	      
	      <img class=" img p-1  img_show d-none d-sm-block"src="${this.image}" alt="">
	      <h4>${this.name}</h4>
		      <div class= text-left>
		      <p>Date: ${this.date}</p>
		      <p>Start: ${this.time}</p>
		     
		      </div>

	      
	    </div>
		</div>
		`
	}

}

let mirabell = new Eventt(1,"./IMG/salzburg4.jpg","Salzburg","Schloss Mirabell","from march to november","8:00" ,"./IMG/mirabellgarten.jpeg");

let michelino = new Eventt(2,"./IMG/salzburg4.jpg", "Salzburg", "Faschingskonzert mit Michelino","23.02.2020", "20:00", "./IMG/salzburg.jpg");

let speisemarkt = new Eventt(3,"./IMG/ljubljana_F.jpg", "Ljubljana","Speisemarkt","20.03.2020", "8:00" , "./IMG/odprta-kuhna.jpg");

let burg = new Eventt(4,"./IMG/ljubljana_F.jpg", "Ljubljana", "Burg von Ljubljana", "daily", "9:00" , "./IMG/burg_ljub.jpg");

let events = [mirabell, michelino, speisemarkt, burg];


console.log(events);



for ( let i = 0; i < events.length; i++) {
// console.log(stadt[i]);

document.getElementsByClassName("showevents")[0].innerHTML += (events[i].mainEvent()); 
};










 $('.movementRestaurant').mousemove(function(e) {
    var x = (e.pageX * -1 / 5), y = (e.pageY * -1 / 5);
    $(this).css('background-position', x + 'px ' + y + 'px');
})



 $('.movementEvent').mousemove(function(e) {
    var x = (e.pageX * -4 / 8), y = (e.pageY * -4 / 8);
    $(this).css('background-position', x + 'px ' + y + 'px');
})



 









