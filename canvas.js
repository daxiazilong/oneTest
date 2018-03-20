/**
 * 思路：
 * 机器显存 = 40000
 * 图片大小：400*400= 160000
 * 不能一次性直接绘制出40000以上的图片
 * 所以对于 超出机器显存的图片决定使用 小图拼接成大图的方法解决
 * 先使用canvas的绘图上下文的切图方法 drawImage ，切出图片，
 * 将切出的图片显示出来，然后重复此步骤，直至此大图切完
 */

 
 function drawLargeImage($container,imgageSrc){
    $container.style.fontSize='0px';
    let img = new Image();       
    img.src=imgageSrc;
    if( $container.id == 'ad1' ){//400*400图片绘制           
        img.onload = function(){
            new Promise( (res,rej) => {
                let canvas = document.createElement('canvas'),
                    ctx = canvas.getContext('2d');
                canvas.width = 200;
                canvas.height = 200;
                ctx.drawImage(img,0,0,200,200,0,0,200,200 );
                ad1.appendChild( canvas );
            
            }).then( () => {
                let canvas = document.createElement('canvas'),
                    ctx = canvas.getContext('2d');
                canvas.width = 200;
                canvas.height = 200;
                ctx.drawImage(img,0,200,200,200,200,0,200,200 );
                ad1.appendChild( canvas );
            } ).then( () => {
                let canvas = document.createElement('canvas'),
                    ctx = canvas.getContext('2d');
                canvas.width = 200;
                canvas.height = 200;
                ctx.drawImage(img,0,200,200,200,0,200,200,200 );
                ad1.appendChild( canvas );
            } ).then( () => {
                let canvas = document.createElement('canvas'),
                    ctx = canvas.getContext('2d');
                canvas.width = 200;
                canvas.height = 200;
                ctx.drawImage(img,200,200,200,200,200,200,200,200 );
                ad1.appendChild( canvas );
            })
        }
    }else if($container.id == 'ad2'){//500*700 的逻辑 ，3500000，思路相同
      img.onload = function(){
         for( let x = 0; x < 10 ; x++ ){
             for( let y = 0 ; y < 10; y++ ){
                 let canvas = document.createElement('canvas'),
                 ctx = canvas.getContext('2d');
                 canvas.width = 50;
                 canvas.height = 70;
                 ctx.drawImage(img,x*50,y*70,50,70,x*50,y*70,50,70 );
                 ad2.appendChild( canvas );
             }
         }
       }
 }

 /**
  * 文末留彩蛋
  * 无法确定，ctx的drawImage在使用的时候是否会占用显存，
  * 但我只能假设不占用。
  * 嗯 不然没法写，
  * 感谢您的阅读。
  */
