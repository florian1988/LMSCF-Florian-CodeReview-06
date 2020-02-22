

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
		    <div class="col-sm-5 header ">
		       <p class="notShowBasic">${this.id}</p>
		        <h1 class=" col-sm-8  mx-4 text-right ">${this.city}</h1>

		      <img class=" col-sm-8  " src="${this.image}" alt="asdf">
		    </div>
		`
	}

	main(){
		return`
			<div class="container-fluid">
			<p class="notShowBasic">${this.id}</p>
			<h1 class=" col-sm-8  mx-4 text-right ">${this.city}</h1>
			<img class=" col-sm-8  notShowBasic" src="${this.image}" alt="asdf">
		`

	}

}

let salzburg = new Citys( 1,"./IMG/salzburg4.jpg","Salzburg");

let ljubjana = new Citys( 2,"./IMG/ljubljana_F.jpg","Ljubljana");

let stadt = [ ljubjana, salzburg];


for ( let i = 0; i < stadt.length; i++) {
// console.log(stadt[i]);

document.getElementsByClassName("showcity")[0].innerHTML += (stadt[i].basic()); 
};




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

	basicRestaurant(){
		return super.basic() + `
		<div class="container-fluid">
  
			  
				    <div class="col-sm-2 m-1  article ">
				      <img class=" img p-1 rounded img_show "src="${this.image}" alt="">
				      <div class="show">
				      <h4>${this.name}</h4>
				      <h3>${this.webpage}</h3>
				      <h3>${this.typ}</h3>
				      <h3>${this.phone}</h3>
				     
				      </div>

				      
				    </div>

			 

		</div>
		`
	}


}


let zwettler = new Restaurant(1,"./IMG/salzburg4.jpg","Salzburg", "Zwettler's", "https://www.zwettlers.com/startseite/","Wirtshaus",0664, "./IMG/zwettler.jpg");
let sternbreu = new Restaurant(2,"./IMG/salzburg4.jpg","Salzburg","Sternbräu", "https://www.sternbrau.com/","Wirtshaus", 0664, "./IMG/Arkadengarten.jpg");
let forum = new Restaurant(3,"./IMG/ljubljana_F.jpg","Ljubljana", "Forum", "https://www.forumbarljubljana.com/", "Bar", 0664, "./IMG/forum.png" );
let dovni_bar = new Restaurant(4,"./IMG/ljubljana_F.jpg","Ljubljana", "Dovni Bar", "https://dvornibar.net/", "Bar", 0664, "./IMG/dovni_bar.jpg");


let restaurants = [zwettler, sternbreu, forum, dovni_bar];

console.log(restaurants);


for ( let i = 0; i < restaurants.length; i++) {


document.getElementsByClassName("showrestaurants")[0].innerHTML += (restaurants[i].basicRestaurant()); 

}





class Eventt extends Citys{
	
	name: string;
	date: number;
	time: number;
	image: string;

	constructor(a,b,c,e:string,f:number,g:number, h:string) {
		super(a,b,c);
		this.name = e;
		this.date = f;
		this.time = g;
		this.image = h;
	}

	basicEvent(){
		return super.basic() + `
		<div class="container-fluid">
  
			  <div class="row justify-content-around bg-dark salzburg">
				    <div class="col-sm-2 m-1  article ">
				      <img class=" img p-1 rounded img_show "src="${this.image}" alt="">
				      <div class="show">
				      <h4>${this.name}</h4>
				      <h3>${this.date}</h3>
				      <h3>Beginn: ${this.time}Uhr</h3>
				      
				      </div>

				    </div>
			  </div>
		</div>
		`
	}

}

		let mirabell = new Eventt(1,"./IMG/salzburg4.jpg","Salzburg","Schloss Mirabell",365,800 ,"./IMG/mirabellgarten.jpeg");
		
		let michelino = new Eventt(2,"./IMG/salzburg4.jpg", "Salzburg", "Faschingskonzert mit Michelino",2322020, 2000, "./IMG/salzburg.jpg");

		let speisemarkt = new Eventt(3,"./IMG/ljubljana_F.jpg", "Ljubljana","Speisemarkt",20032020, 800 , "./IMG/odprta-kuhna.jpg");

		let burg = new Eventt(4,"./IMG/ljubljana_F.jpg", "Ljubljana", "Burg von Ljubljana", 365, 900, "./IMG/durg_ljub.jpg");

		let events = [mirabell, michelino, speisemarkt, burg];


console.log(events);



for ( let i = 0; i < events.length; i++) {
// console.log(stadt[i]);

document.getElementsByClassName("showevents")[0].innerHTML += (events[i].basicEvent()); 
};






// document.getElementsByClassName("img_show")[0].addEventListener("mouseover", showfunc);

// function showfunc() {
// 	var x = document.getElementsByClassName("show")[0];
// 	console.log("hey");
// }





