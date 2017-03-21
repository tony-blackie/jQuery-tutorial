function Artist(n, l, b, d) {
this.name = n;
this.lastName = l;
this.birthDate = b;
this.deathDate = d;
this.century = function() {
  if (this.deathDate > 1801 && this.deathDate < 1901) {
      console.log("19th Century.");
  } else if (this.deathDate > 1901 && this.deathDate < 2001) {
      console.log("20th Century.");
  } else {
      console.log('<br/>');
  }
}
}

Artist.prototype.showCentury = function() {
console.log(this.century() + '<br/>')
};

Artist.prototype.showArtist = function() {
console.log(this.name + ' ' + this.lastName + ' was born in ' + this.birthDate + '. Died in ' + this.deathDate +'. Art movement: '+ this.artMovement +'<br/>');
};

Artist.prototype.artMovement = "Art Movement";

var vanGogh = new Artist('Vincent', 'van Gogh', 1853, 1890);
var picasso = new Artist('Pablo', 'Picasso', 1881, 1973);
var kahlo = new Artist('Frida', 'Kahlo', 1907, 1954);


vanGogh.artMovement = "Post-Impressionism";
picasso.artMovement = "Cubism, Surrealism";
kahlo.artMovement = "Surrealism, Magic realism";

vanGogh.showCentury();
vanGogh.showArtist();

picasso.showCentury();
picasso.showArtist();

kahlo.showCentury();
kahlo.showArtist();
