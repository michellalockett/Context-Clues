
var names = ['John', 'Tom', 'Ann', 'Kathy', 'Joe'];
var locations = ['Alabama', 'New York', 'Texas', 'California', 'Mississippi', 'Maine', 'Rhonde Island', 'Virgina', 'Georgia', 'Tennessee']
var objects = ['Pizza', 'Window', 'Paper Clip', 'Paper', 'Blanket', 'Shirt', 'Chair', 'TV', 'Door', 'Candy', 'Money', 'Car', 'Truck', 'Dogs', 'Shoes', 'XBOX', 'Pillow', 'Box', 'Bench', 'Cats']


for (var i=1; i<101;i++) {

    var names = Math.floor(Math.random() * 5); 
    var locations = Math.floor(Math.random() * 10);
    var ojects = Math.floor(Math.random() * 20);
    var h = document.createElement('h3');

    h.innerText = 'Accusation ' + i;
    h.addEventListener('click', function(nam, loc, obj) {
        alert("Accusation " + this + ": I accuse " + names[nam] + " with the " + locations[loc] + " in the " + objects[obj] + "!");
    }
    .bind(i, names, locations, objects));
    document.getElementById('container').appendChild(h);
}









