console.log('js');


let clicks=0;

$(document).ready( onReady );

function onReady(){
    console.log('jq');
    $('#generateButton').on('click', click );
    $(document).on('click', '#swap', clickSwap );
    $(document).on('click', '#delete', clickDelete );
}

function click(){
    console.log('in click');
    appendThis();
} //on click, append the div from appendThis()

function appendThis(){
    
    clickCounts()
    let el = $('#appendHere');
    outputString = `<div class="startRed" id="string">
                        <p>${clicks}</p>
                        <button id="swap">Swap</button>
                        <button id="delete">Delete</button>
                    </div>`;
    el.append( outputString );
      
} //set of buttons to append into the div on generate click



function clickCounts(){
    $('#generateButton').on('click', function(){clicks++} );
    return clicks;
}


function clickSwap(){
    console.log('in clickSwap');
    $('.startRed').toggleClass('startRed');
}//color swap from red to yellow

function clickDelete(){
    console.log('in clickSwap');
    $('#string').remove();
}//delete section with button