var number_children = Math.random();
    number_children = (number_children * 10);
    console.log(Math.round(number_children));

var result = [["Teacher", "Movie Star", "Garbage Person", "Stripper"],
            ["Sally", "Tom", "Harry", "Sarah"], ["Vienna", "Amsterdam", "London", "New York"]];

function crystalGazer() {
            //for (var a = 0; i < result; i++) {
                var i1 = Math.floor(Math.random() * 4 );
                var i2 = Math.floor(Math.random() * 4 );
                var i3 = Math.floor(Math.random() * 4 );
                document.write("You will be a "+result[0][i1]+" in " +result[2][i2]+" and married to "+ result[1][i3] + " with " + (Math.round(number_children)) + " child(ren). ");
    // }
}
crystalGazer();