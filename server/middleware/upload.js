import multer from 'multer';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('filesss', file);
    cb(null, 'uploads/');
  },
});

export const upload = multer({ storage });