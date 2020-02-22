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
        return _super.prototype.basic.call(this) + ("\n\t\t<div class=\"container-fluid\">\n  \n\t\t\t  <div class=\"row justify-content-around bg-dark salzburg\">\n\t\t\t\t    <div class=\"col-sm-2 m-1  article \">\n\t\t\t\t      <img class=\" img p-1 rounded img_show \"src=\"" + this.image + "\" alt=\"\">\n\t\t\t\t      <div class=\"show\">\n\t\t\t\t      <h4 class=\"rounded-pill nav\">" + this.name + "</h4>\n\t\t\t\t      <h3>" + this.date + "</h3>\n\t\t\t\t      <h3>Beginn: " + this.time + "Uhr</h3>\n\t\t\t\t      \n\t\t\t\t      </div>\n\n\t\t\t\t    </div>\n\t\t\t  </div>\n\t\t</div>\n\t\t");
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
