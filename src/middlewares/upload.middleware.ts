import multer, {Multer, StorageEngine} from 'multer'

const storage: StorageEngine = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    }, 
    filename: function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now())
    }
})

const upload: Multer = multer({storage: storage})

export default upload