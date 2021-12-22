    <!-- <div class="" style="height: 766px; width: 506px; padding: 1px">
          <div style="border: 3px solid #1b1d1d; height: 100%; width: 100%;">  
              <div style="border-bottom: 3px solid #1b1d1d; height: 132px; width: 100%">
                <div class="row">
                    <div class="" style="display: flex; align-items: center; justify-content: center; border-right: 3px solid #1b1d1d; width: 146px; height: 132px;">
                        <div style="font-size: 129px;">
                            <strong>P</strong> 
                        </div>
                    </div>
                    <div class="col-6" style="">
                        <div style="width: 132px; margin-left: 170px; margin-top: 28px">
                            <div style="border: 3px solid #1b1d1d; padding: 8px; font-weight: 500;" >
                                <div class="text-center" style="font-size: 11px"><strong>PRIORITY MAIL</strong> </div>
                                <div class="text-center" style="font-size: 11px"><strong>U.S. POSTAGE PAID</strong></div>
                                <div class="text-center" style="font-size: 11px"><strong>Shippo</strong></div>
                                <div class="text-center" style="font-size: 11px"><strong>ePostage</strong></div>
                            </div>
                            <div class="text-center" style="font-size: 11px"><strong>CUBIC</strong></div>
                        </div>  
                    </div>
                </div>
              </div>     
                <div style="border-bottom: 3px solid #1b1d1d; height: 43px; width: 100%">
                    <div class="row">
                        <div style="font-size:38px; text-align: center; font-weight: 700;">
                            <p> USPS PRIORITY MAIL</p>
                        </div>
                    </div>
                </div>
                <div style="border-bottom: 5px solid #1b1d1d; height: 358px; width: 100%;">
                    <div class="row" style="padding: 7px">
                        <div class="col-md-7" style=" text-transform: uppercase; font-size: 14pt">
                            <div>Seun Badejo</div>
                            <div> 45, ikosi road</div>
                            <div> Ketu Lagos</div>
                        </div>
                        <div class="col-md-5" style="font-size: 14pt; text-align: right">
                            <div> Ship Date: 09/03/21</div>
                            <div style="padding-right: 2px">
                                <div>Weight: 2 lb</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12" style="margin-top: 90px">
                            <div style="width: 354px; margin: 0 auto; text-transform: uppercase; font-size: 16pt;"> 
                                <div>Ramota Kehinde</div>
                                <div>78 Olowookere Alalubosa</div>
                                <div>Ilupeju Lagos</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="height: 177px; border-bottom: 5px solid #1b1d1d; width: 100%">
                    <div class="row text-center">
                        <div class="text-center" style="padding: 4px 0; margin-bottom: 3px" >
                           <div><strong>USPS TRACKING #EP</strong></div> 
                        </div>
                        <div>
                            <img :src="imgSrc" alt="barcode">
                        </div>
                        <div  class="text-center" style="font-size: 14pt; font-weight: bold; margin-top: 4px">
                            3647 4647 4446 4647 4646 9234 34
                        </div>
                    </div>
                </div>
                 <div>
                     <div class="row">
                         <div style="text-align: center; padding-top: 4px">
                             <img :src="require('../assets/shippologo.png')" style="height: 43px;">
                             <span style="font-family: Roboto; font-size: 23px; font-weight: 900"> shippo</span> 
                            
                         </div>
                     </div>
                 </div>
         </div>
       
      </div> -->
      <!-- 506 by 766
1c212b;
rgb(27, 29, 29) -->
  <!-- <img src="https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189" alt="" id="something">
    <img src="" alt="" id="me"> -->
   // let divWidth = x.style.width
            // let divHeight = x.style.width
            // import html2canvas-proxy from 'html2canvas-proxy'
            // let proxy = require('html2canvas-proxy');
            // let express = require('express');

            // let appd = express();
            // html2canvas-proxy.use(express)

            // appd.use('/', proxy)
                
            


       // let divWidth = x.style.width
            // let divHeight = x.style.width
            // import html2canvas-proxy from 'html2canvas-proxy'
            // let proxy = require('html2canvas-proxy');
            // let express = require('express');

            // let appd = express();
            // html2canvas-proxy.use(express)

            // appd.use('/', proxy)
                

        startDownload(){
            // let imageURL = "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";
            // let imageURL = document.getElementById('something')
            let barcodeData = this.barc
            console.log(barcodeData)
            console.log('clicked')
         
            // axios.get("https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189")
            // axios.get("http://free-barcode.com/barcode.asp?bc1=42037467(92)3647464744464647464634&bc2=12&bc3=4.72&bc4=1.2&bc5=0&bc6=1&bc7=Arial&bc8=14&bc9=1")
            // .then(res => console.log(res))
            // .catch(err => console.log(err))
        
             
            let imageURL = `http://free-barcode.com/barcode.asp?bc1=${barcodeData}&bc2=12&bc3=4.72&bc4=1.2&bc5=0&bc6=1&bc7=Arial&bc8=14&bc9=1`

            let image = new Image()
            image.crossOrigin = "anonymous"; 
            
          
            // image.src = ""

            image.onload = function() {
                var canvas = document.createElement('CANVAS');
                var ctx = canvas.getContext('2d');
                var dataURL;
                canvas.height = this.naturalHeight;
                canvas.width = this.naturalWidth;
                ctx.drawImage(this, 0, 0);
                dataURL = canvas.toDataURL("image/png");
                console.log(dataURL)
                // callback(dataURL);
                localStorage.setItem("saved-image-example", dataURL)
            };
            image.src = imageURL
            if (image.complete || image.complete === undefined) {
                image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                image.src = imageURL.src;
            }
            image.src = imageURL
            console.log(image)

            let canvas = document.createElement("canvas");
            canvas.width = imageURL.width;
            canvas.height = imageURL.height;

            let context = canvas.getContext("2d");
            context.drawImage(image, 0, 0);
            
            // imageBox.appendChild(canvas);
            
            let dataURL = canvas.toDataURL("image/jpeg");
            localStorage.setItem("saved-image-example", dataURL)
            

            // let dataImage = localStorage.getItem('saved-image-example')
            // let bannerImg = document.getElementById('me');
            // bannerImg.src = "data:image/png;base64," + dataImage;
            

            // try {
            //     localStorage.setItem("saved-image-example", dataURL);
                // let dataImage = localStorage.getItem('saved-image-example')
                // let bannerImg = document.getElementById('me');
                // bannerImg.src =   dataImage;
                // console.log(bannerImg)
        
               
            // }
            // catch(err) {
            //     console.log("Error: " + err);
            // }
        },
            