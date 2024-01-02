const path = require('path');
const removeBackground = require('../services/removeBgApi');

const get_home_page = (req, res, next) => {
    res.render("home_page");
}

const post_upload = (req, res, next) => {
    

     const imagePath = path.resolve(__dirname,"../../public/images/uploads/"+req.session.fileName);
    const savePath = path.resolve(__dirname,"../../public/images/removeBg/"+req.session.fileName);
    removeBackground(imagePath, savePath)
        .then(message => {
            res.render("home_page",{"remove_bg":"/images/removeBg/"+req.session.fileName});
        }) 
          


}



module.exports = {
    get_home_page,
    post_upload
}