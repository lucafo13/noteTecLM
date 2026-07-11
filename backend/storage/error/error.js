import multer from "multer";


export const errorCheck = (err, req, res, next) => {

if (err instanceof multer.MulterError) {
      return res
        .status(500)
        .send({ code: err.code, message: err.message, field: err.field });
    } else if (err) {
      return res.status(500).send({ message: err.message });
    }

    next()

}