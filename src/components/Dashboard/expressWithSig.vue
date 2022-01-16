<template>
<div class="test" style="position: relative;">
   <form action="" @submit.prevent="onSubmit">
        <div class="row mb-5"> 
            <!-- Sender section starts -->
            <div class="col-md-4 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                <div class="row mb-5">
                    <div class="col-md-12">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Sender
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                                                <textarea 
                                                    class="form-control" 
                                                    id="exampleFormControlTextarea1" 
                                                    placeholder="John Smith&#10;No: 45 Adekunle Str, Mango Bus-stop&#10;Ketu, Lagos 23401 " 
                                                    v-model="senderInfo.data"
                                                    required
                                                    rows="4">
                                                </textarea>
                                            <div class="mt-3 row">
                                                <div v-if="checkStoredSender()" style="text-align: end">
                                                    <button type="button"  class="btn-danger btn-delete" @click="deleteSaveSenderInfo" style="width: 100px">Delete</button>
                                                </div>
                                                <div v-else style="text-align: end">
                                                    <button type="button"  class="btn-primary btn-save" @click="saveSenderInfo" >Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
                                        Custom Sender
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 order-md-last mt-md-4 mt-2 mb-3 order-first">
                        <div class="">
                            <button type="button" class="btn-danger" @click="refreshComponent" style="color: white; border-radius: 5px; height: 3rem; width: 120px">Clear log</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of sender section -->

            <!-- Reciver section starts -->
            <div class="col-md-8 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                <div class="row">
                    <div class="col-md-6">
                        <div class="accordion" id="accordionExample1">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#f-collapseOne" aria-expanded="false" aria-controls="collapseOneR">
                                        Receiver
                                    </button>
                                </h2>
                                <div id="f-collapseOne" class="accordion-collapse collapse " :class="checkStoredCustomReceiver() ? '' : 'show'" aria-labelledby="headingThree" data-bs-parent="#accordionExample1">
                                    <div class="accordion-body">
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                                            <textarea 
                                                class="form-control" 
                                                id="exampleFormControlTextarea1" 
                                                placeholder="Ayo Joy&#10;No: 45 Oparinde Str, Oke-Odo&#10;Abeokuta, Ogun 23405" 
                                                rows="4"
                                                v-model="receiverInfo.data">
                                            </textarea>
                                            <label for="exampleFormControlTextarea1" class="form-label mt-2">Apt/Suite/Other</label>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                id="exampleFormControlInput1" 
                                                placeholder="456"
                                                v-model="receiverInfo.apt"
                                                >
                                            <div class="row">
                                                <span v-if="checkReceiver" style="text-align: end">
                                                    <button type="button" class="btn-danger btn-delete" @click="deleteReceiver" style="width: 100px">Delete</button>
                                                </span>
                                                <div v-else class="mt-3 mb-3 btn-container">
                                                    <button type="button" class="btn-primary btn-save" @click="saveReceiver">Save</button>
                                                </div>
                                            </div>
                                        </div>           
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="mb-3 mt-3">
                        <select 
                            class="form-select mb-3" 
                            aria-label="Default select example"
                            ref="tracking"
                          >
                            <option v-for="(n, index) in trackingList" :value="n.express_priority_with_sig" :key="index" :selected="index === 0">{{ n.express_priority_with_sig }}</option>
                        </select>
                        </div>
                        <div>{{tracking}}</div>
                        <div>                         
                        </div>
                        <div class="row">
                        <div class="col-6">
                            <button v-if="loadImage" style="color: white" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Preview
                            </button>
                         </div>
                          <div class="col-6">
                                <button class="btn-primary" type="submit" style="width: 120px; height: 40px; color: white; border-radius: 5px">Submit</button>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-last order-first">
                        <div class="accordion" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#f-collapseOne"  aria-expanded="false"  aria-controls="f-collapseOne">
                                Custom Receiver
                            </button>
                            </h2>
                            <div id="f-collapseOne" class="accordion-collapse collapse" :class="checkStoredCustomReceiver() ? 'show' : '' " aria-labelledby="headingSix" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                                            <textarea 
                                                class="form-control" 
                                                id="exampleFormControlTextarea1" 
                                                placeholder="Ayo Joy&#10;No: 45 Oparinde Str, Oke-Odo&#10;Abeokuta, Ogun 23405 " 
                                                rows="4"
                                                v-model="customReceiver.data">
                                            </textarea>                                                                 
                                            <div class="mt-3 mb-3 btn-container">
                                                 <div class="row">
                                                    <span v-if="checkStoredCustomReceiver()" style="text-align: end">
                                                        <button type="button" class="btn-danger btn-delete" @click="deleteSavedCustomReceiver" style="width: 100px">Delete</button>
                                                    </span>
                                                    <span v-else style="text-align: end">
                                                        <button type="button" class="btn-primary btn-save" @click="saveCustomReceiver()">Save</button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div> 
                                 </div>
                            </div>
                        </div>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="exampleFormControlInput1" class="form-label">Weight</label>
                            <input 
                                type="number" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="2"
                                required
                                v-model="weight">
                        </div>
                        <div class="row">
                            <span v-if="checkStoredWeight()" style="text-align: end">
                                <button type="button" class="btn-danger btn-delete" @click="deleteWeight" style="width: 100px">Delete</button>
                            </span>
                            <span v-else style="text-align: end">
                                <button type="button" class="btn-primary btn-save" @click="saveWeight">Save</button>
                            </span>
                        </div>
                        <div class="row mt-5">
                            <div class="">Size</div>
                            <hr>
                            <div class="form-check form-switch col-6">
                                <input class="form-check-input" type="radio" @click="removeStoredLabelSize" name="exampleRadios" value="a6" v-model="size" id="flexSwitchCheck" checked = checkSize >
                                <label class="form-check-label" for="flexSwitchCheckDefault">4x6</label>
                            </div>
                            <div class="form-check form-switch col-6">
                                <input class="form-check-input" type="radio" name="exampleRadios"  value ="letter" v-model="size" @click="saveLabelLetterSize" id="flexSwitchCheck" :checked = !checkSize() >
                                <label class="form-check-label" for="flexSwitchCheckDefault">8x11.5</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Receiver section ends -->
        </div>
    </form> 
    <!-- Button trigger modal -->
    <!-- Modal -->
<div class="modal fade border-0" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="padding: 20px;">
  <div class="modal-dialog"  >
    <div class="modal-content border-0 rounded-0" style="width:506px; "  >
          <div id="test" style= "width: 506px">
                <img :src="require('../../assets/expwithsig.jpg')"> 
                <div style="all: initial;">
                 <div style="position: absolute; top: 186px; left: 10px; right: 180px; text-transform: uppercase; font-size: 14pt; font-weight: 500" >
                    <div>{{senderInfo.fullName}}</div>
                    <div>{{senderInfo.houseAddress}}</div>
                    <div>{{senderInfo.city}} {{senderInfo.state}} {{senderInfo.zipCode}}</div>
      
                </div>  
                 <div style="position: absolute; top: 186px; right: 12px; font-size: 14pt;" >
                    <div dir="rtl">Ship Date<span>:</span>{{todayDate()}}</div>
                    <div  dir="rtl" style="padding-right: 2px; z-index: 1;">Weight<span>:</span> {{parcelWeight}} lb</div>
                </div> 
                <div>
                    <div v-if="receiverInfo.fullName" style="position: absolute; top: 361px; left: 55px; right: 25px; text-transform: uppercase; font-size: 16pt;font-weight: 500;" >
                        <div>{{receiverInfo.fullName}}</div>
                        <div>{{receiverInfo.recAdd }} {{receiverInfo.apt}}</div>
                        <div>{{receiverInfo.city}} {{receiverInfo.state}} {{receiverInfo.zipCode}}-{{receiverInfo.zipPlus4}}</div>
                        <div>{{customReceiver.inputData }}</div>
                    </div>  
                    <div v-else style="position: absolute; top: 361px; left: 55px; right: 35px; text-transform: uppercase; font-size: 16pt; font-weight: 500;" >
                        <div>{{customReceiver.fullName}}</div>
                        <div>{{customReceiver.sortedData1 }} </div>
                        <div>{{customReceiver.sortedData2 }}</div>
                        <div>{{customReceiver.sortedData3 }}</div>
                        <div>{{customReceiver.sortedData4 }}</div>
                    </div>
                </div>
                <div>
                </div>
                <div style="position: absolute; top: 566px; left: 26px; ">
                    <img :src="imgSrc" alt="" id="me" @load="checkLoadedImage()">
                </div>
                <div style="position: absolute; top: 686px; left: 102px; font-size: 14pt; font-weight: 700">
                    {{trackingNo}}
                </div>
                </div>  
            </div>
      <div class="row mt-3 mb-3">
        <div class="col-auto me-auto ms-2">
            <button type="button" @click="refreshComponent"  class="btn btn-danger ms-2" data-bs-dismiss="modal">Cancel</button>
        </div>
        <div class="col-auto me-2">
            <span v-if="downloadButtonClicked" >
                <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal" @click="refreshComponent">Close</button>
            </span>
            <span v-else>
                <button type="button" class="btn btn-primary me-2" @click="getLabel">Download</button>
            </span>
        </div>
      </div>
      <div v-if="usedNumberMessage" class="alert alert-danger text-center" role="alert">
            Number has been used
    </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios'

// import domtoimage from 'dom-to-image-improved'
import domtoimage from 'dom-to-image'
// import Canvg from 'canvg'
// import domtoimage from 'dom-to-image-chrome-fix-retina'
// import 'svg2pdf.js'
import { jsPDF } from "jspdf"
// import { changeDpiDataUrl } from 'changedpi'
// import loadImage from "blueimp-load-image"
// import download from 'downloadjs'
// import {  elementToSVG, inlineResources } from 'dom-to-svg'
// import html2pdf from 'html2pdf.js'
// import * as htmlToImage from 'html-to-image';
// import toPng from 'html-to-image';

export default {
    data() {
        return {
            senderInfo : {
                data : localStorage.getItem('sender-ewsps') || '',
                fullName : '',
                houseAddress : '',
                city : '',
                state : '',
                zipCode : ''
            },
            sendername : '',
            weight: localStorage.getItem('weight-ewsps') || '',
            parcelWeight : '',
            tracking : '',
            receiverInfo: {
                data: '',
                fullName: '',
                recAdd : '',
                state : '',
                apt : '',
                city : '',
                zip : '',
                zipPlus4 : '',
            },
            customReceiver : {
                data: localStorage.getItem('c-receiver-ewsps') || '',
                fullName: '',
                sortedData1: '',
                sortedData2: '',
                sortedData3: '',
                sortedData4: ''
            },
            barcodeValue: 'test',
            barc : '',
            imgSrc : '',
            trackingNo : '',
            trackingList : [],
            ab: 0,
            downloadButtonClicked: false,
            usedNumberMessage: '',
            loadImage : false,
            size : localStorage.getItem('letter-size') || 'a6',
            
        }
    },
    created(){
      let token = this.$store.getters.getToken;
      const config = {
        headers: { 'Authorization': `Token ${token}`}
             };

      axios.get(`http://127.0.0.1:8000/express/sig/tracking-list/`, config )
        .then(res => {
            console.log(res.data)
            this.trackingList = res.data
            
        })
        .catch(err => {
            console.log(err)
        })
        
    },  
    methods: {
        forceUpdatenow(){
            this.$forceUpdate()
        },
        checkSize(){
            let actualSize = this.size
            if (actualSize === 'a6'){
                return true
            } 
        },
        removeStoredLabelSize(){
            localStorage.removeItem('letter-size')
            this.size = 'a6'
            // this.refreshComponent() 
            this.forceUpdatenow()
            this.checkSize()
        },
        saveLabelLetterSize(){
            let LabelLetterSize = this.size
            LabelLetterSize = 'letter'
            localStorage.setItem('letter-size', LabelLetterSize)
            this.size = 'letter'
            // this.refreshComponent() 
            this.forceUpdatenow()
            this.checkSize()
        },
        getLetterLabelSize(){
            let letterLabelSize = localStorage.getItem('letter-size')
            return letterLabelSize   
        },
        checkLoadedImage(){
            this.loadImage = true
        },
        todayDate(){
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = String(today.getFullYear()).substring(2);
            let currentDate = mm + '/' + dd + '/' + yyyy;
            return currentDate
        },
        checkStoredSender(){
            let savedSender = localStorage.getItem('sender-ewsps')
            return savedSender   
        },
        checkStoredWeight(){
            let savedWeight = localStorage.getItem('weight-ewsps')
            return savedWeight
        },
        checkStoredCustomReceiver(){
            let savedCustomReceiver = localStorage.getItem('c-receiver-ewsps')
            return savedCustomReceiver
        },
        deleteSelectedTracking(){
            let token = this.$store.getters.getToken;
            let selectedTracking = this.$refs.tracking.value;
            const config = {
                headers: { 'Authorization': `Token ${token}`}
                    };

            axios.delete(`http://127.0.0.1:8000/delete/expwithsig/${selectedTracking}`, config )
                .then(res => {
                    console.log(res.data)
                    this.trackingList = res.data
                })
                .catch(err => {
                    this.usedNumberMessage = err
                })
        },
        refreshComponent(){
            // window.location.reload();
            // this.ab += 1
            // console.log(this.ab)
            this.$router.go()
        },
        saveSenderInfo(){
            let senderInfo = this.senderInfo.data
            localStorage.setItem('sender-ewsps', senderInfo)
            // this.refreshComponent()
            this.forceUpdatenow()
            
        },
        saveCustomReceiver(){
            let customReceiver = this.customReceiver.data
            localStorage.setItem('c-receiver-ewsps', customReceiver)
            // this.refreshComponent()
            this.forceUpdatenow()
        },
        saveReceiver(){
            let receiverInfo = {
                info :[
                    this.receiverInfo.data,
                    this.receiverInfo.apt
                ]
            }
            localStorage.setItem('p-receiver', JSON.stringify(receiverInfo))
        },
        deleteReceiver(){
            localStorage.removeItem('p-receiver')
        },
        deleteSaveSenderInfo(){
            localStorage.removeItem('sender-ewsps')
            this.senderInfo.data = ''
            // this.refreshComponent()
             this.forceUpdatenow()
           
        },
        deleteSavedCustomReceiver(){
            localStorage.removeItem('c-receiver-ewsps')
            this.customReceiver.data = '' 
            // this.refreshComponent()
             this.forceUpdatenow()
        },
        saveWeight(){
            let weight = this.weight
            localStorage.setItem('weight-ewsps', weight)
            // this.refreshComponent()    
             this.forceUpdatenow()
        },  
        deleteWeight(){
            localStorage.removeItem('weight-ewsps')
            this.weight = ''
            // this.refreshComponent()
            this.forceUpdatenow()
        },
        getLabel(){
            this.downloadButtonClicked = true
            let x = document.getElementById('test')
            // window.print(x)
            let label_size = this.size

            var options = {
                quality: 0.98,                 
            };
            
            let pdfFilename = this.senderInfo.fullName

            domtoimage.toJpeg(x, options).then(function (dataUrl)
            {    
                
                if (label_size === 'a6'){
                    // //4x6 size
                    var doc = new jsPDF("p", "in",[5.27, 7.98])
                    var filename = `${pdfFilename}`
                    var width = doc.internal.pageSize.getWidth();
                    var height = doc.internal.pageSize.getHeight()
                    doc.addImage(dataUrl, 'JPEG', 0, 0, width, height);
                    doc.save(filename);
                    // let z = changeDpiDataUrl(dataUrl, 150)
                    // download(dataUrl, 'my-node')

                }else {
                    // Letter size
                    var docu = new jsPDF("l", "in", [11.00, 8.50])
                    var filenamess = `${pdfFilename}`
                    // console.log(doc.internal.scaleFactor)
                    // doc.setDrawColor(0, 0, 0, 0)
                    // doc.internal.scaleFactor = 500.00
                    docu.addImage(dataUrl, 'JPEG', 3.82, 0.47, 6.19, 7.83);
                    docu.save(filenamess);

                }                 
            });
            this.deleteSelectedTracking()

        },
        sortSender(){
           let senderInfoReceived = this.senderInfo.data.toUpperCase().trim().replace(/[,.]/g, '') 
           let sortSenderData = senderInfoReceived.split('\n')

           this.senderInfo.fullName = sortSenderData[0]
           this.sendername = sortSenderData[0]
           let senderLocation =  sortSenderData.splice(1)
           
           this.senderInfo.houseAddress = senderLocation.splice(0, senderLocation.length - 1).join(' ')
        //    this.senderHouseAddress = getSenderAddress.join(' ')
            
           let senderCityStateZip = senderLocation[senderLocation.length -1].split(" ")

           this.senderInfo.city = senderCityStateZip.splice(0, senderCityStateZip.length - 2 ).join(' ')
           this.senderInfo.state = senderCityStateZip[senderCityStateZip.length - 2] 
           this.senderInfo.zipCode = senderCityStateZip[senderCityStateZip.length - 1] 

        //    this.senderFullName = senderName 
        //    this.senderHouseAddress = senderAddress
        //    this.senderCity = senderCity
        //    this.senderState = senderState
        //    this.senderZipCode = senderZipCode
        },
        sortReceiver(){
           let receiverInfoReceived = this.receiverInfo.data.trim()
           let sortReceiverData = receiverInfoReceived.split('\n')
          
           this.receiverInfo.fullName = sortReceiverData[0]
           let receiverLocationNow = sortReceiverData.splice(1)
           let receiverAddress= receiverLocationNow[0]
           
           let getReceiverCityState = receiverLocationNow[receiverLocationNow.length -1]
           
           let receiverCityStateZip = getReceiverCityState.split(" ")
        //    let city = receiverCityStateZip.splice(0, receiverCityStateZip.length - 2 ).join(' ')
           let receiverState = receiverCityStateZip[receiverCityStateZip.length - 2]
           let receiverZipCode = receiverCityStateZip[receiverCityStateZip.length - 1]
           let receiverApt = this.receiverInfo.apt
           console.log('apt', receiverApt)
   
        //    console.log('city', city)
    
           let xmlString = `<AddressValidateRequest USERID="310EXQCO3833"><Revision>1</Revision><Address ID="0"><Address1>${receiverApt}</Address1><Address2>${receiverAddress}</Address2><City/><State>${receiverState}</State><Zip5>${receiverZipCode}</Zip5><Zip4/></Address></AddressValidateRequest>`

            axios.get(`https://secure.shippingapis.com/shippingAPI.dll?API=Verify&XML=${xmlString}`)
            .then(res =>{
                let xmlResponse = res.data
                var self = this
                var parseString = require('xml2js').parseString;
                var stripNS = require('xml2js').processors.stripPrefix;
                const options = {
                    tagNameProcessors: [stripNS],
                    explicitArray: false
                };
                parseString(xmlResponse, options, function (err, xmlResponseToJson) {
                    console.log(xmlResponseToJson)
                    
                    let data = xmlResponseToJson.AddressValidateResponse.Address

                    if (data.Error){
                        alert("Incorrect address!!!\nPlease check address and try again")
                    }else {
                        self.receiverInfo.recAdd = data.Address2
                        self.receiverInfo.city = data.City
                        self.receiverInfo.state = data.State
                        self.receiverInfo.apt = data.Address1
                        self.receiverInfo.zipCode = data.Zip5
                        self.receiverInfo.zipPlus4 = data.Zip4

                        let num = self.$refs.tracking.value.trim()
                        let spaceTrackingNo = [...num].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim()
                        self.trackingNo = spaceTrackingNo
                        let trackingFormated = self.$refs.tracking.value.substring(2)
                        
                        let barcodeChar = "420" + data.Zip5 + "(92)" + trackingFormated
                        console.log(barcodeChar)
                        
                        self.barc = barcodeChar
                        self.imgSrc = `http://free-barcode.com/barcode.asp?bc1=${barcodeChar}&bc2=12&bc3=4.72&bc4=1.2&bc5=0&bc6=1&bc7=Arial&bc8=14&bc9=1`
                                console.log(err, 'we')
                        }

                                
                })
            })
            .catch(err => console.log(err))
            
        },
        sortCustomReceiver(){
        console.log('working')
           let customReceiverDataReceived = this.customReceiver.data.toUpperCase().trim().replace(/[,.]/g, '') 
           let sortcustomReceiverData = customReceiverDataReceived.split('\n')
           this.customReceiver.fullName = sortcustomReceiverData[0]
           this.customReceiver.sortedData1 = sortcustomReceiverData[1]
           this.customReceiver.sortedData2= sortcustomReceiverData[2]
           this.customReceiver.sortedData3 = sortcustomReceiverData[3]
           this.customReceiver.sortedData4 = sortcustomReceiverData[4]
           this.customReceiver.sortedData5 = sortcustomReceiverData[5]

           let elementArray = ''
            

           for (let index = 0; index < sortcustomReceiverData.length; index++) {
                let element = sortcustomReceiverData[sortcustomReceiverData.length -1];
                elementArray = element
           }

            let num = this.$refs.tracking.value.trim()
            console.log(num)
            // if (num.length < 26 ){
            //     alert('invalid tracking')
            //     return num
            // }else {
            let spaceTrackingNo = [...num].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim()
            this.trackingNo = spaceTrackingNo
            let trackingFormated = this.$refs.tracking.value.substring(2)
            let x = elementArray.toString()
    
            let y = x.split(" ")
            let zipCode =  y[y.length - 1]
            console.log(zipCode)
            if (zipCode.length > 10 ){
                    alert("Invalid zip for label")
                    return zipCode
            }else {
                let zip = zipCode.substring(0, 5)
                console.log(zip)
                
                let barcodeChar = "420" + zip + "(92)" + trackingFormated
                console.log(barcodeChar)
                
                this.barc = barcodeChar
                this.imgSrc = `http://free-barcode.com/barcode.asp?bc1=${barcodeChar}&bc2=12&bc3=4.72&bc4=1.2&bc5=0&bc6=1&bc7=Arial&bc8=14&bc9=1`
            }
        
                     
        },
        onSubmit(){
           this.sortSender()
           this.parcelWeight = this.weight
           let checkStatus = this.receiverInfo.data
           if(checkStatus){
                this.sortReceiver() 
           }else(
               this.sortCustomReceiver()
           )
      
        //             Your Username is 310EXQCO3833
        // Your Password is 180YB16LI716
            
        }
    },
}
</script>
<style scoped >
*{
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
}

.accordion-button:not(.collapsed) {
    color: #000
}


/* #ff6600; */
.accordion-button {
    background: #66e4de;
    color: #000
}

.btn-save, .btn-delete {
    width: 100px; 
    border-radius: 5px; 
    color: white
}

.btn-save-small {
    width: 10px; 
    height: 10px;
    border-radius: 50%; 
    color: white
}
.btn-container {
    text-align: end
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-size: 10px;
  color: rgb(160, 150, 150)
}
::-moz-placeholder { /* Firefox 19+ */
  font-size: 10px;
}
:-ms-input-placeholder { /* IE 10+ */
  font-size: 10px;
}
:-moz-placeholder { /* Firefox 18- */
  font-size: 10px;
}
.dropdown-toggle {
    background-color: red;
}

.dropdown-toggle:hover {
    background-color: green;
}

/* .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {
    background-color: yellow;
} */
 
</style>