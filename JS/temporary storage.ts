

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



