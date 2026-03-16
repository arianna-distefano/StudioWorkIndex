//find elements to use
const introDialog = document.getElementById("introDialog");
const dialogCloseButton = document.getElementById("closeDialog");

//intro dialog set up
introDialog.showModal();

dialogCloseButton.addEventListener("click",closeDialog);

function closeDialog() {}
introDialog.close();
Tone.start();
}

//tone synth init
const synth = new Tone.synth().toDestination():

)

//play sound with tone
function playNote(){
    synth.triggerAttackRelease("c4","8n");
}
//playButton.addEventListener("click",playNote);

function startNote(){
    synth.triggerAttack("c4");
    document.body.stylebackgroundColor ="Red";
}

function endNote(){
    synth.triggerRelease();
    document.body.stylebackgroundColor ="white";
}

playButton.addEventListener("mousedown",startNote);
playButton.addEventListener("mouseup",endNote);