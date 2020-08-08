setInterval(loopedColor, 100);

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function loopedColor(){
    let a = 0;
    let i;
    let j;
    for (;;){
        if (a < 255){
            a++;
            document.body.style.backgroundColor = 'rgb(' + a + ',' + "255" + ',' + "255" + ')';
            await sleep(100);
        } else if (a > 1){
            a = 255 - 1;
            // a--;
            document.body.style.backgroundColor = 'rgb(' + a + ',' + "255" + ',' + "255" + ')';
            await sleep(100);
        }
    }
    

    // for (i=1; i<255;i+=55){
    //     await sleep(100);
    //     a = i;
    //     document.body.style.backgroundColor = 'rgb(' + a + ',' + "255" + ',' + "255" + ')';
    // }
    // if (i===255){
    //     for (j=1; j<255; j+=55){
    //         a = 255 - j;
    //         i = 0;
    //     }
    // }
}