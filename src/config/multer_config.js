const multer=require('multer');
const path=require("path");


const mystorageAyarım=multer.diskStorage({
    //cb passport_localdeki done() fonk.siyonu gibidir. cb(hata,işlem) parametrelerini alır

    destination:(req,file,cb)=>{            //kaydedileceği yer ayarı

        cb(null,path.join(__dirname,"../../public/images/uploads"));    //bu dosyanın olduğu klasörün bir üst klaasöründeki uploads klasöründeki avatars klasörüne kaydedilir.
    },

    filename:(req,file,cb)=>{               //kaydedileceği ad ayarı
        let fileName="a"+path.extname(file.originalname);
        req.session.fileName=fileName;
        cb(null,fileName);  //dosya adı şöyle olur: "orjinalDosyaAdı"
    }
});

const myFileFilterAyarı=(req,file,cb)=>{
    if(file.mimetype=='image/jpeg' || file.mimetype=='image/png' || file.mimetype=='image/jpg'){
        cb(null,true);   //dosya türü jpeg,jpg,png ise kabul eder değilse etmez
    }else{
        cb(null,false);
    }
}

const uploadResim=multer({storage:mystorageAyarım, fileFilter:myFileFilterAyarı});


module.exports=uploadResim;