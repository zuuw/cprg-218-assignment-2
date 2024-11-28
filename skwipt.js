let infor = '';

aintro.addEventListener('click',function()
{
    console.log('sheepbb');
    document.getElementById('graphic').src='graphic-4-dan-12.png';
    let aintro = document.getElementById('aintro').style.backgroundColor = '#ee60f6';
    document.getElementById('intro').style.backgroundColor = '#04cbd9';
    document.getElementById('step1').style.backgroundColor = '#04cbd9';
    document.getElementById('step2').style.backgroundColor = '#04cbd9';
    document.getElementById('step3').style.backgroundColor = '#04cbd9';
   
    output.innerHTML = 'Lets Learn how to make a 3D Graphic in Adobe Illustrator! Click <strong>Step 1</strong> To Begin!'
    skibi.innerHTML = 'Introduction!'
});



intro.addEventListener('click',function()
{
    console.log('sheepbb');
    document.getElementById('graphic').src='graphic-4-dan-09.png';
    let intro = document.getElementById('intro').style.backgroundColor = '#ee60f6';
    document.getElementById('aintro').style.backgroundColor = '#04cbd9';
    document.getElementById('step1').style.backgroundColor = '#04cbd9';
    document.getElementById('step2').style.backgroundColor = '#04cbd9';
    document.getElementById('step3').style.backgroundColor = '#04cbd9';
   
    output.innerHTML = 'Type out what you want your text to say and pick a font that you find fitting!'
    skibi.innerHTML = '<strong>Step 1:</strong> Text and Font!'
});

step1.addEventListener('click',function()
{
    console.log('buurrrr');
    document.getElementById('graphic').src='graphic-4-dan-10.png';
    let step1 = document.getElementById('step1').style.backgroundColor = '#ee60f6';
    document.getElementById('aintro').style.backgroundColor = '#04cbd9';
    document.getElementById('intro').style.backgroundColor = '#04cbd9';
    document.getElementById('step2').style.backgroundColor = '#04cbd9';
    document.getElementById('step3').style.backgroundColor = '#04cbd9';

    output.innerHTML = 'Now that you have your desired font picked out, size it to your taste and then add outlines. Assuming youre working in a canvas size <strong>over 500x500px</strong>, I reccomend a stroke size of 15-30px!'
    skibi.innerHTML = '<strong>Step 2:</strong> Size and Outlines!'
});

step2.addEventListener('click',function()
{
    console.log('moooo');
    document.getElementById('graphic').src='graphic-4-dan-11.png';
   let step2 = document.getElementById('step2').style.backgroundColor = '#ee60f6';
   document.getElementById('aintro').style.backgroundColor = '#04cbd9';
   document.getElementById('intro').style.backgroundColor = '#04cbd9';
    document.getElementById('step1').style.backgroundColor = '#04cbd9';
    document.getElementById('step3').style.backgroundColor = '#04cbd9';

    output.innerHTML = 'Having your text all layed out now with outlines, you can now click <strong>Object > Expand > "Expand to fill"</strong>, what this does is gives us the vectors to work with instead of editable text! Ps, feel free to <strong>add color</strong> now!'
    skibi.innerHTML = '<strong>Step 3:</strong> Expand! (and color if desired)'
});

step3.addEventListener('click',function()
{
    console.log('swoooo');
    document.getElementById('graphic').src='graphic-4-dan-12.png';
    let step3 = document.getElementById('step3').style.backgroundColor = '#ee60f6';
    document.getElementById('aintro').style.backgroundColor = '#04cbd9';
    document.getElementById('intro').style.backgroundColor = '#04cbd9';
    document.getElementById('step1').style.backgroundColor = '#04cbd9';
    document.getElementById('step2').style.backgroundColor = '#04cbd9';

    output.innerHTML = 'Okay pretty easy so far right? Now all we need to do is <strong>group</strong> all your text and outlines and click <strong>Effects > 3d Effects > Extrude and Bevel</strong>!'
    skibi.innerHTML = '<strong>Step 4:</strong> 3D it!'
});