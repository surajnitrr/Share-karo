// yha middleware banaenge with the help of multer
import multer from "multer";

const upload = multer({dest: 'uploads'});


export default upload;