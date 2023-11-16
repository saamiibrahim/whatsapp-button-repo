function CreateWhatsappChatWidget(option = {
    brandSetting: {
        autoShow: true,
        backgroundColor: "#0a6114",
        borderRadius: "25",
        brandImg: "https://karzoun.app/assets/uploads/karzoun_logo.png",
        brandImgData: null,
        brandName: "كرزون نينجا",
        brandSubTitle: "في العادة نرد خلال دقائق",
        ctaText: "إبدء محادثة الآن",
        welcomeText: "مرحبا, اهلاً بك! كيف نستطيع المساعدة?",
        messageText: "",
        phoneNumber: "908504411337",
        poweredByName:"Karzoun",
        poweredByUrl:"https://karzoun.chat/?source=salla-widget"
    },
    chatButtonSetting: {
        backgroundColor: "#4dc247",
        borderRadius: "25",
        ctaText: "",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        position: "right"
    },
    enabled: false
}) {
    

    if (option.enabled == false){
        return;
    }
    if(!option.chatButtonSetting.position){
        option.chatButtonSetting.position = "right";
        option.chatButtonSetting.marginBottom = "20";
        option.chatButtonSetting.marginLeft = "0";
        option.chatButtonSetting.marginRight = "20";
    }
    var css = document.createElement("STYLE");
    if(window.jQuery){
        initWidget();
    }else{
        var script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            initWidget();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    function initWidget(){
        function sanitizeHTML(text) {
  var element = document.createElement('div');
  element.innerText = text.replace(/<\/br>/g, '\n');
  return element.innerHTML;
}
        if (option.brandSetting.messageText) {
            option.brandSetting.messageText = option.brandSetting.messageText.replaceAll("{page_link}", encodeURIComponent(window.location.href.split('?')[0]));
            option.brandSetting.messageText = option.brandSetting.messageText.replaceAll("{page_title}", window.document.title);
            option.brandSetting.messageText = option.brandSetting.messageText.replaceAll("\n", "%0A");
        }
        jQuery('body').append(`<div id="whatsapp_chat_widget">
        
        <div id="wa-widget-box-button">
        
        <span class="wa-messenger-svg-whatsapp wh-svg-icon" style="order:0;"><svg style=" height:50px; width:50px;" width="50px" height="50px" viewBox="0 0 1219.547 990">
        <path style="fill: #E0E0E0;" fill="#E0E0E0" d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"></path>
        <linearGradient id="htwaicona-chat-sc" gradientUnits="userSpaceOnUse" x1="609.77" y1="1190.114" x2="609.77" y2="21.084">
            <stop offset="0" stop-color="#20b038"></stop>
            <stop offset="1" stop-color="#60d66a"></stop>
        </linearGradient>
        <path style="fill: url(#htwaicona-chat-sc);" fill="url(#htwaicona-chat-sc)" d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"></path>
        <image overflow="visible" opacity=".08" width="682" height="639" transform="translate(270.984 291.372)"></image>
        <path fill-rule="evenodd" clip-rule="evenodd" style="fill: #FFFFFF;" fill="#FFF" d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"></path>
        <path style="fill: #FFFFFF;" fill="#FFF" d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"></path>
    </svg></span>
        

       
        
            <div id="wa-widget-send-button">
        
            
                <div style="color: white; font-size: 16px">${option.chatButtonSetting.ctaText}</div>
            </div>
            </div>
        </div>`);
        jQuery('#whatsapp_chat_widget').append(`
            <div class='karzoun-box'>
                <div class='karzoun-box-header'>
                    <img class='karzoun-box-brand' onError='this.src= "https://karzoun.app/assets/uploads/karzoun_logo.png";' src='${option.brandSetting.brandImg}'/>
                    <div class='karzoun-box-brand-text'>
                        <div class='karzoun-box-brand-name'>${option.brandSetting.brandName}</div>
                        <div class='karzoun-box-brand-subtitle'>${option.brandSetting.brandSubTitle}</div>
                    </div>
                    <div class="karzoun-bubble-close-btn"><img style="display: table-row; width:16px;" src="https://cdn.shopify.com/s/files/1/0070/3666/5911/files/Vector.png?574"></div>
                </div>
                
                <div class='karzoun-box-content'>
                    <div class='karzoun-box-content-chat'>                            
                        <div class='karzoun-box-content-chat-brand'>${option.brandSetting.brandName}</div>
                        <div class='karzoun-box-content-chat-welcome'>${sanitizeHTML(option.brandSetting.welcomeText.replace(/@/g, "</br>"))}</div>
                    </div>
                </div>
                
                <div class='karzoun-box-send'>
                    <a role="button" target="_blank" href="https://api.whatsapp.com/send?phone=${option.brandSetting.phoneNumber.replace(/\+/g, "")}&text=${option.brandSetting.messageText?option.brandSetting.messageText:""}" title="WhatsApp" class="karzoun-box-content-send-btn"><svg width="20" height="20" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="karzoun-box-content-send-btn-icon"><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path></svg>
                        <span class="karzoun-box-content-send-btn-text">${option.brandSetting.ctaText}</span>
                    </a>
                    <div class='karzoun-box-poweredby'>⚡ <a href="${option.brandSetting.poweredByUrl}" target="_blank" style="color: #006eff6e;">${sanitizeHTML(option.brandSetting.poweredByName)}</a></div>
                </div>
            </div>
        `);
            
   
        if(option.brandSetting.autoShow){
            jQuery(".karzoun-box").css("display", "block");
        }else{
            jQuery(".karzoun-box").css("display", "none");
        }
        jQuery("#whatsapp_chat_widget").on('click', '.karzoun-bubble-close-btn', function(){                
            jQuery(".karzoun-box").css("display", "none");
        })
        jQuery("#whatsapp_chat_widget").on('click', '#wa-widget-box-button', function(){                
            jQuery(".karzoun-box").css("display", "block");
        })
    }
    var styles = `
        #whatsapp_chat_widget{
         display: ${option.enabled?"block":"none"}
        }
        .karzoun-box-content-send-btn-text{
            margin-left: 8px;
            margin-right: 8px;
            z-index: 1;
            color: rgb(255, 255, 255);
        }
        .karzoun-box-content-send-btn-icon{
            width: 16px;
            height: 16px;
            fill: rgb(255, 255, 255);
            z-index: 1;
            flex: 0 0 16px;
        }
        .karzoun-box-content-send-btn{
            text-decoration: none;
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-weight: 700;
            line-height: 20px;
            cursor: pointer;
            position: relative;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            -webkit-appearance: none;
            padding: 8px 12px;
            border-radius: ${option.brandSetting.borderRadius}px;
            border-width: initial;
            border-style: none;
            border-color: initial;
            border-image: initial;
            background-color: ${option.brandSetting.backgroundColor};
            margin: 20px;
            overflow: hidden;
        }
        .karzoun-box-send{
            background-color:white;

        }
        .karzoun-box-content-chat-brand{        
            font-size: 13px;
            font-weight: 700;
            line-height: 18px;
            color: rgba(0, 0, 0, 0.4);
        }
        .karzoun-box-content-chat-welcome{        
            font-size: 14px;
            line-height: 19px;
            margin-top: 4px;
            color: rgb(17, 17, 17);
        }
        .karzoun-box-content-chat{
            background-color: white;
            display: inline-block;
            margin: 20px;
            padding: 10px;
            border-radius: 10px;
        }
        .karzoun-box-content{
            background: url(https://karzoun.app/assets/uploads/karzoun/kwidget.jpg);
        background-size: contain;
        }
        .karzoun-bubble-close-btn{
            cursor: pointer;
            position: absolute;
            left: 20px;
            top: 20px;
        }
        .karzoun-box-brand-text{
            margin-left: 20px;
        }
        .karzoun-box-brand-name{
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
        }
        .karzoun-box-brand-subtitle{
            font-size: 13px;
            line-height: 18px;
            margin-top: 4px;
        }
        
        .karzoun-box-header{
            height: 100px;
            max-height: 100px;
            min-height: 100px;
            background-color: ${option.brandSetting.backgroundColor};
            color: white;
            border-radius: 10px 10px 0px 0px;
            display:flex;
            align-items: center;
        }
        .karzoun-box-brand{
            margin-left: 20px;
            margin-right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
        }
        .karzoun-box{
            background-color:white;
            z-index: 16000160 !important;
            margin-bottom: 60px;
            width: 300px;
            position: fixed !important;
            bottom: ${option.chatButtonSetting.marginBottom}px !important;
            ${option.chatButtonSetting.position == "left" ? "left : "+option.chatButtonSetting.marginLeft+"px" : "right : "+option.chatButtonSetting.marginRight+"px"};
            border-radius: 10px;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
            font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;
        }
        #wa-widget-send-button {
            box-shadow: 3px 2px 6px rgba(0,0,0,0.4);
           
            text-align: center !important;
            height: 40px;
            margin-left:-12px;
            
            padding-left: ${option.chatButtonSetting.ctaText?"25px":"0px"};
            padding-right: ${option.chatButtonSetting.ctaText?"25px":"0px"};
            visibility: visible;
            transition: none !important;
            background-color: ${option.chatButtonSetting.backgroundColor};
            border-top-right-radius: ${option.chatButtonSetting.borderRadius}px;
            border-bottom-right-radius: ${option.chatButtonSetting.borderRadius}px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content:center;
        }

        #wa-widget-box-button{
            direction:ltr !important;
            position: fixed !important;
            bottom: ${option.chatButtonSetting.marginBottom??"75"}px;
            text-align: center !important;
            height: 40px;
            min-width: 50px;
            
            border-top-right-radius: ${option.chatButtonSetting.borderRadius}px;
            border-bottom-right-radius: ${option.chatButtonSetting.borderRadius}px;

            visibility: visible;
            transition: none !important;
            // background-color: ${option.chatButtonSetting.backgroundColor};
            ${option.chatButtonSetting.position == "left" ? "left : 25px" : "right : 25px"};
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content:center;
        }
        .wa-messenger-svg-whatsapp{
            z-index: 1600012260 !important;
            display:flex;
            align-items: left;
            text-align:left;
            justify-content:left;
            // fill:white;
            // width: 40px;
            height: 62px;
            stroke: none;
            
        }
        .karzoun-box-poweredby{
            text-align: left;
            font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;
            margin-bottom: 15px;
            margin-top: -10px;
            margin-left: 20px;
            font-style: italic;
            font-size: 12px;
            cfont-weight: bold;
        }
        @media only screen and (max-width: 600px) {
            .karzoun-box
            {
                width: auto;
                position: fixed !important;
                right: 20px!important;
                left: 20px!important;
            }
        }
    `

    var styleSheet = document.createElement("style")
    console.log('working');
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.getElementsByTagName("head")[0].appendChild(styleSheet);
    
}