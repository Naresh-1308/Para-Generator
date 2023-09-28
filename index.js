const input = document.getElementById("numberofwords");
const container =  document.querySelector(".container");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateWords = (n) => {

    let text = "";

    // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < n; i++)
    {
        const random = (Math.random() * (letters.length-1)).toFixed(0);
        text += letters[random];
    }
    return text;
};


let numofwords;

const generatePara = () => {
    numofwords = Number(input.value);

    const para = document.createElement("p");

    let data = "";

    for(let i = 0; i < numofwords; i++)
    {
        const randomNumeber = (Math.random() * (letters.length-1)).toFixed(0);

        data += generateWords(randomNumeber);

        data += " ";
    }
    console.log(data);

    para.innerText = data;

    para.setAttribute("class", "paras" );

    container.append(para);   //because we are sending the para into the container

}