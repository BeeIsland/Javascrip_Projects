
//Creates a dictionary before manipulating and displaying in two paragraph tags
function myDictionary() {

        //Defines the dictionary
        let Food = {
                calories:1000,
                type:"Pizza",
                cheese:"Mozzarella",
                meat:"Pepperoni",
                size:"10inch",
                sauce:"Marinara",
        };

        //Deletes an element of the dictionary 'Food'
        delete Food.sauce;

        //Replaces the text in the paragraph elements with the elements of the dictionary
        document.getElementById("dictionary1").innerHTML = Food.cheese;
        document.getElementById("dictionary2").innerHTML = Food.sauce;
}