console.log('js');

$(document).ready( onReady );

function onReady(){
    console.log('jq');
    $('#generateButton').on('click', click );
    $('#generateButton').on('click', clickCounts );
    
}

function click(){
    console.log('in click');
    appendThis();
} //on click, append the div from appendThis()

function appendThis(){
    let el = $('#appendHere');
    outputString = `<div class="startRed">
                        <p>Counter goes here</p>
                        <button id="swap">Swap</button>
                        <button id="delete">Delete</button>
                    </div>`;
    el.append( outputString );
} //set of buttons to append into the div on generate click

let clicks=1;

function clickCounts(){
    
    
    $('#generateButton').on('click', function(){clicks++} );
    return clicks;
    console.log('in click counter' + clicks );
}



function clickSwap(){
    // $('#swap').on('click', swap );
    $('#swap').on('click', clickSwap );

}

function clickSwap(){
    console.log('clickSwap');
    $('.startRed').toggleClass('startRed');
}
