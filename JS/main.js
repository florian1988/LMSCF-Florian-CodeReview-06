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
        return "\n\t\t    <div class=\"col-sm-5 header d-none d-sm-block \">\n\t\t       <p class=\"notShowBasic\">" + this.id + "</p>\n\t\t        <h1 class=\" col-sm-8  mx-4 text-right \">" + this.city + "</h1>\n\n\t\t      <img class=\" col-sm-8 \" src=\"" + this.image + "\" alt=\"asdf\">\n\t\t    </div>\n\t\t";
    };
    // main function is there for the other two classes 
    Citys.prototype.main = function () {
        return "\n\t\t\t<div class=\"container-fluid col-sm-5 col-md-3 rounded-pill mb-2 \">\n\t\t\t<p class=\"notShowBasic\">" + this.id + "</p>\n\t\t\t<h1 class=\" text-center bg-light rounded-pill \">" + this.city + "</h1>\n\t\t\t<img class=\"notShowBasic\" src=\"" + this.image + "\" alt=\"asdf\">\n\t\t";
    };
    return Citys;
}());
var salzburg = new Citys(1, "./IMG/salzburg4.jpg", "Salzburg");
var ljubjana = new Citys(2, "./IMG/ljubljana_F.jpg", "Ljubljana");
var stadt = [salzburg, ljubjana];
for (var i = 0; i < stadt.length; i++) {
    console.log(stadt[i]);
    document.getElementsByClassName("showcity")[0].innerHTML += (stadt[i].basic());
}
;
// *******************************************************************************************
// *******************************Resturant's part *******************************************
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
    Restaurant.prototype.mainRestaurant = function () {
        return _super.prototype.main.call(this) + ("\n\t\t<!-- <div class=\"container-fluid\"> -->\n  \t\t\t  \n\t\t    <div class=\"col-sm-12 text-center article bg-light\">\n\t\t      \n\t\t      <img class=\" img p-1  img_show d-none d-sm-block\"src=\"" + this.image + "\" alt=\"\">\n\t\t     <h4 >" + this.name + "</h4>\n\t\t\t      <div class=\" text-left \" >\n\t\t\t      <p>WebPage: <a class=\"btn btn-light\" href=\"" + this.webpage + "\" role=\"button\">Link</a></p>\n\t\t\t      <p >Typ: " + this.typ + "</p>\n\t\t\t      <p >Phone: " + this.phone + "</p>\n\t\t\t     \n\t\t\t      </div>\n\n\t\t      \n\t\t    </div>\t\t\t \n\n\t\t</div>\n\t\t");
    };
    return Restaurant;
}(Citys));
var zwettler = new Restaurant(1, "./IMG/salzburg4.jpg", "Salzburg", "Zwettler's", "https://www.zwettlers.com/startseite/", "Wirtshaus", 98654651, "./IMG/zwettler.jpg");
var sternbreu = new Restaurant(2, "./IMG/salzburg4.jpg", "Salzburg", "Sternbräu", "https://www.sternbrau.com/", "Wirtshaus", 213548, "./IMG/Arkadengarten.jpg");
var forum = new Restaurant(3, "./IMG/ljubljana_F.jpg", "Ljubljana", "Forum", "https://www.forumbarljubljana.com/", "Bar", 554866, "./IMG/forum.png");
var dovni_bar = new Restaurant(4, "./IMG/ljubljana_F.jpg", "Ljubljana", "Dovni Bar", "https://dvornibar.net/", "Bar", 5656565, "./IMG/dovni_bar.jpg");
var restaurants = [zwettler, sternbreu, forum, dovni_bar];
console.log(restaurants);
for (var i = 0; i < restaurants.length; i++) {
    document.getElementsByClassName("showrestaurants")[0].innerHTML += (restaurants[i].mainRestaurant());
}
// *******************************************************************************************
// *******************************Event's part *******************************************
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
    Eventt.prototype.mainEvent = function () {
        return _super.prototype.main.call(this) + ("\n\t\t\t\t\t \n\t    <div class=\"col-sm-12 text-center article bg-light\">\n\t      \n\t      <img class=\" img p-1  img_show d-none d-sm-block\"src=\"" + this.image + "\" alt=\"\">\n\t      <h4>" + this.name + "</h4>\n\t\t      <div class= text-left>\n\t\t      <p>Date: " + this.date + "</p>\n\t\t      <p>Start: " + this.time + "</p>\n\t\t     \n\t\t      </div>\n\n\t      \n\t    </div>\n\t\t</div>\n\t\t");
    };
    return Eventt;
}(Citys));
var mirabell = new Eventt(1, "./IMG/salzburg4.jpg", "Salzburg", "Schloss Mirabell", "from march to november", "8:00", "./IMG/mirabellgarten.jpeg");
var michelino = new Eventt(2, "./IMG/salzburg4.jpg", "Salzburg", "Faschingskonzert mit Michelino", "23.02.2020", "20:00", "./IMG/salzburg.jpg");
var speisemarkt = new Eventt(3, "./IMG/ljubljana_F.jpg", "Ljubljana", "Speisemarkt", "20.03.2020", "8:00", "./IMG/odprta-kuhna.jpg");
var burg = new Eventt(4, "./IMG/ljubljana_F.jpg", "Ljubljana", "Burg von Ljubljana", "daily", "9:00", "./IMG/burg_ljub.jpg");
var events = [mirabell, michelino, speisemarkt, burg];
console.log(events);
for (var i = 0; i < events.length; i++) {
    // console.log(stadt[i]);
    document.getElementsByClassName("showevents")[0].innerHTML += (events[i].mainEvent());
}
;
$('.movementRestaurant').mousemove(function (e) {
    var x = (e.pageX * -1 / 5), y = (e.pageY * -1 / 5);
    $(this).css('background-position', x + 'px ' + y + 'px');
});
$('.movementEvent').mousemove(function (e) {
    var x = (e.pageX * -4 / 8), y = (e.pageY * -4 / 8);
    $(this).css('background-position', x + 'px ' + y + 'px');
});
