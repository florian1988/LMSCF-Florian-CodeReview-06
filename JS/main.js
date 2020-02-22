var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// the location area with the main class 
var Citys = /** @class */ (function () {
    function Citys(a, b, c) {
        this.id = a;
        this.image = b;
        this.city = c;
    }
    Citys.prototype.basic = function () {
        return "\n\t\t    <div class=\"col-sm-5 header \">\n\t\t       <p class=\"notShowBasic\">" + this.id + "</p>\n\t\t        <h1 class=\" col-sm-8  mx-4 text-right \">" + this.city + "</h1>\n\n\t\t      <img class=\" col-sm-8  \" src=\"" + this.image + "\" alt=\"asdf\">\n\t\t    </div>\n\t\t";
    };
    Citys.prototype.main = function () {
        return "\n\t\t\t<div class=\"container-fluid\">\n\t\t\t<p class=\"notShowBasic\">" + this.id + "</p>\n\t\t\t<h1 class=\" col-sm-8  mx-4 text-right \">" + this.city + "</h1>\n\t\t\t<img class=\" col-sm-8  notShowBasic\" src=\"" + this.image + "\" alt=\"asdf\">\n\t\t";
    };
    return Citys;
}());
var salzburg = new Citys(1, "./IMG/salzburg4.jpg", "Salzburg");
var ljubjana = new Citys(2, "./IMG/ljubljana_F.jpg", "Ljubljana");
var stadt = [ljubjana, salzburg];
for (var i = 0; i < stadt.length; i++) {
    // console.log(stadt[i]);
    document.getElementsByClassName("showcity")[0].innerHTML += (stadt[i].basic());
}
;
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(a, b, c, e, f, g, h, i) {
        var _this = _super.call(this, a, b, c) || this;
        _this.name = e;
        _this.webpage = f;
        _this.typ = g;
        _this.phone = h;
        _this.image = i;
        return _this;
    }
    Restaurant.prototype.basicRestaurant = function () {
        return _super.prototype.basic.call(this) + ("\n\t\t<div class=\"container-fluid\">\n  \n\t\t\t  \n\t\t\t\t    <div class=\"col-sm-2 m-1  article \">\n\t\t\t\t      <img class=\" img p-1 rounded img_show \"src=\"" + this.image + "\" alt=\"\">\n\t\t\t\t      <div class=\"show\">\n\t\t\t\t      <h4>" + this.name + "</h4>\n\t\t\t\t      <h3>" + this.webpage + "</h3>\n\t\t\t\t      <h3>" + this.typ + "</h3>\n\t\t\t\t      <h3>" + this.phone + "</h3>\n\t\t\t\t     \n\t\t\t\t      </div>\n\n\t\t\t\t      \n\t\t\t\t    </div>\n\n\t\t\t \n\n\t\t</div>\n\t\t");
    };
    return Restaurant;
}(Citys));
var zwettler = new Restaurant(1, "./IMG/salzburg4.jpg", "Salzburg", "Zwettler's", "https://www.zwettlers.com/startseite/", "Wirtshaus", 0664, "./IMG/zwettler.jpg");
var sternbreu = new Restaurant(2, "./IMG/salzburg4.jpg", "Salzburg", "Sternbräu", "https://www.sternbrau.com/", "Wirtshaus", 0664, "./IMG/Arkadengarten.jpg");
var forum = new Restaurant(3, "./IMG/ljubljana_F.jpg", "Ljubljana", "Forum", "https://www.forumbarljubljana.com/", "Bar", 0664, "./IMG/forum.png");
var dovni_bar = new Restaurant(4, "./IMG/ljubljana_F.jpg", "Ljubljana", "Dovni Bar", "https://dvornibar.net/", "Bar", 0664, "./IMG/dovni_bar.jpg");
var restaurants = [zwettler, sternbreu, forum, dovni_bar];
console.log(restaurants);
for (var i = 0; i < restaurants.length; i++) {
    document.getElementsByClassName("showrestaurants")[0].innerHTML += (restaurants[i].basicRestaurant());
}
var Eventt = /** @class */ (function (_super) {
    __extends(Eventt, _super);
    function Eventt(a, b, c, e, f, g, h) {
        var _this = _super.call(this, a, b, c) || this;
        _this.name = e;
        _this.date = f;
        _this.time = g;
        _this.image = h;
        return _this;
    }
    Eventt.prototype.basicEvent = function () {
        return _super.prototype.basic.call(this) + ("\n\t\t<div class=\"container-fluid\">\n  \n\t\t\t  <div class=\"row justify-content-around bg-dark salzburg\">\n\t\t\t\t    <div class=\"col-sm-2 m-1  article \">\n\t\t\t\t      <img class=\" img p-1 rounded img_show \"src=\"" + this.image + "\" alt=\"\">\n\t\t\t\t      <div class=\"show\">\n\t\t\t\t      <h4>" + this.name + "</h4>\n\t\t\t\t      <h3>" + this.date + "</h3>\n\t\t\t\t      <h3>Beginn: " + this.time + "Uhr</h3>\n\t\t\t\t      \n\t\t\t\t      </div>\n\n\t\t\t\t    </div>\n\t\t\t  </div>\n\t\t</div>\n\t\t");
    };
    return Eventt;
}(Citys));
var mirabell = new Eventt(1, "./IMG/salzburg4.jpg", "Salzburg", "Schloss Mirabell", 365, 800, "./IMG/mirabellgarten.jpeg");
var michelino = new Eventt(2, "./IMG/salzburg4.jpg", "Salzburg", "Faschingskonzert mit Michelino", 2322020, 2000, "./IMG/salzburg.jpg");
var speisemarkt = new Eventt(3, "./IMG/ljubljana_F.jpg", "Ljubljana", "Speisemarkt", 20032020, 800, "./IMG/odprta-kuhna.jpg");
var burg = new Eventt(4, "./IMG/ljubljana_F.jpg", "Ljubljana", "Burg von Ljubljana", 365, 900, "./IMG/durg_ljub.jpg");
var events = [mirabell, michelino, speisemarkt, burg];
console.log(events);
for (var i = 0; i < events.length; i++) {
    // console.log(stadt[i]);
    document.getElementsByClassName("showevents")[0].innerHTML += (events[i].basicEvent());
}
;
// document.getElementsByClassName("img_show")[0].addEventListener("mouseover", showfunc);
// function showfunc() {
// 	var x = document.getElementsByClassName("show")[0];
// 	console.log("hey");
// }
