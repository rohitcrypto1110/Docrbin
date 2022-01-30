import express from 'express';
import mongoose from 'mongoose';

import Url from '../models/url.js';
import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getShortUrl = async (req, res) => { 
    try {
		console.log("hello");
    	let {id, userId, expiresIn} = req.body;
    	if(!expiresIn)
    		expiresIn=-1;
    	const newUrl = new Url({ fileId: id, creator: userId, expiresIn: expiresIn})
        await newUrl.save();

        res.status(200).json("www.shortUrl.com/"+newUrl._id);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const getUrlData = async (req, res) => { 
    try{
    	const {id} = req.body;
    	const url = await Url.findById(id);
    	if(!url)
    		throw "URL not found"
		const post = await PostMessage.findById(url.fileId);
        
	    let d1 = url.createdAt;   
		let d2 = new Date();

		let diff = d2.getTime() - d1.getTime();   
		let mindiff = diff / (1000 * 60);
		if(url.expiresIn>0&&mindiff>url.expiresIn)
		{
			await Url.findByIdAndRemove(id);
			throw "URL not found"
		}
		else
			res.status(200).json(post);
    }
    catch(error){
    	res.status(409).json({ message: error });	
    }
}
