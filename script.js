const ekleme = document.getElementById("ekle");
const giris = document.getElementById("girisLabel");


ekle = () => {
    var kullaniciMetni = giris.value;
    var kullaniciGirdisi = giris.value;
    var ulElement = document.getElementById("liste");
    var liElement = document.createElement("li");

    liElement.appendChild(document.createTextNode(kullaniciGirdisi));

    ulElement.appendChild(liElement);

    giris.value = "";


    console.log(kullaniciMetni);
   
}