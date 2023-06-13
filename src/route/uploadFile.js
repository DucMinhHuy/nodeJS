import express from "express";
import uploadFileController from '../controller/uploadFileController';
import multer from "multer";
import path from 'path';
let appRoot = require('app-root-path');
let router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/");
    },

    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
let upload = multer({ storage: storage, fileFilter: imageFilter });
let uploads = multer({ storage: storage, fileFilter: imageFilter }).array('multiple_images', 3);
const uploadFile = (app) => {
    router.get('/upload', uploadFileController.file);
    router.post('/upload-profile-pic', upload.single('profile_pic'), uploadFileController.handleUploadFile);
    router.post('/upload-multiple-images', uploads, uploadFileController.handleUploadMultipleFiles);
    return app.use('/', router)
}
export default uploadFile;