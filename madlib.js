let inputName = document.getElementById("input-name").value = "";
let inputAdjective = document.getElementById("input-adjective").value = "";
let inputNoun = document.getElementById("input-noun").value = "";
let inputAdverb = document.getElementById("input-adverb").value = "";
let inputClothing = document.getElementById("input-clothing").value = "";
let inputCelebrity = document.getElementById("input-celebrity").value = "";
let inputInfinitive = document.getElementById("input-infinitive").value = "";
let inputIdiom = document.getElementById("input-idiom").value = "";
let inputAdjective2 = document.getElementById("input-adjective2").value = "";
let inputEmotion = document.getElementById("input-emotion").value = "";

function MadLibifier(){

    const questions =  document.getElementById("questions");
    questions.style.display = "none";

    const madlib =  document.getElementById("madlib");
    madlib.style.display = "block";

//-------------------------------------------------------------------

    inputName = document.getElementById("input-name").value;
    const outputName =  document.getElementById("output-name");
    outputName.innerHTML = inputName;
    

    inputAdjective = document.getElementById("input-adjective").value;
    const outputAdjective =  document.getElementById("output-adjective");
    outputAdjective.innerHTML = inputAdjective;


    inputNoun = document.getElementById("input-noun").value;
    const outputNoun =  document.getElementById("output-noun");
    outputNoun.innerHTML = inputNoun;


    inputAdverb = document.getElementById("input-adverb").value;
    const outputAdverb =  document.getElementById("output-adverb");
    outputAdverb.innerHTML = inputAdverb;


    inputClothing = document.getElementById("input-clothing").value;
    const outputClothing =  document.getElementById("output-clothing");
    outputClothing.innerHTML = inputClothing;

    
    inputCelebrity = document.getElementById("input-celebrity").value;
    const outputCelebrity =  document.getElementById("output-celebrity");
    outputCelebrity.innerHTML = inputCelebrity;


    inputInfinitive = document.getElementById("input-infinitive").value;
    const outputInfinitive =  document.getElementById("output-infinitive");
    outputInfinitive.innerHTML = inputInfinitive;

    inputIdiom = document.getElementById("input-idiom").value;
    const outputIdiom =  document.getElementById("output-idiom");
    outputIdiom.innerHTML = inputIdiom;
    
    inputAdjective2 = document.getElementById("input-adjective2").value;
    const outputAdjective2 =  document.getElementById("output-adjective2");
    outputAdjective2.innerHTML = inputAdjective2;


    inputEmotion = document.getElementById("input-emotion").value;
    const outputEmotion =  document.getElementById("output-emotion");
    outputEmotion.innerHTML = inputEmotion;


}//end MadLibifier