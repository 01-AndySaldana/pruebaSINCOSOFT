'use strict'

import express from 'express';
import { parse } from 'path';
import { unlink } from 'fs/promises';
const router = express.Router();
import model from '../models/index.js';
import multer, { diskStorage } from "multer";
const maxSize = parseInt(10) * 1024 * 1024;
let storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        let nameFile = file.originalname;
        cb(null, nameFile);
    },
});

router.get('/in',  async (req, res, next) => { 
    const doc = model.docs
    const old_doc = await doc.findAll()
    return res.success(old_doc, 200)
});

router.post('/in',  async (req, res, next) => { 
    const doc = model.docs
    const registro = await doc.create({name_original: req.body.name_original, name_personalizado:req.body.name_personalizado, extension:req.body.extension, mimetype:req.body.mimetype})
    return res.success({message:registro}, 200)
});

router.put('/in/:id_doc',  async (req, res, next) => { 
    const doc = model.docs
    let params = {}
    if (req.body.name_original)
    params = {name_original: req.body.name_original, name_personalizado:req.body.name_personalizado, extension:req.body.extension, mimetype:req.body.mimetype}
    else params = {name_personalizado:req.body.name_personalizado}
    doc.update(params, 
        {
             where: {
              id: req.params.id_doc
            }
          })
    return res.success({message:"hey mundo"}, 200)
});

router.delete('/in/:id_doc',  async (req, res, next) => { 
    const doc = model.docs
    const reg = await doc.findOne({
        where: {
         id: req.params.id_doc
       }
     })
     const pathfile = `./uploads/${reg.name_original}`
     await unlink(pathfile)
    doc.destroy( 
        {
             where: {
              id: req.params.id_doc
            }
          })
    return res.success({message:true}, 200)
});

router.post('/upload', multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).single("file"),  async (req, res, next) => {
    console.log(req.file)  
    return res.success({name_original:req.file.originalname, mimetype: req.file.mimetype, extension: parse(req.file.originalname).ext
    }, 200)
});



export default router;