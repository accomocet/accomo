const bcrypt = require("bcrypt");
const path = require("path");
const Hostels = require("../models/hostelModel");

const getAllhostels = async (req, res, next) => {
    try {
        const hostels = await Hostels.find({}); 
        return res.json(hostels); 
    } catch (error) {
        next(error);
    }
}

const addHostel = async (req, res, next) => {
    try {
        const { h_name, h_location, vacancies, contact, h_images } = req.body;
        const hostel = await Hostels.findOne({ h_name });
        if (hostel) {
            return res.json({ msg: "This hostel already exists", status: false });
        }
        const newHostel = await Hostels.create({
            h_name,
            h_location,
            vacancies,
            contact,
            h_images,
        });
        console.log("Hostel successfully added"); 
        return res.json({ status: true, newHostel });

    } catch (error) { 
        next(error);
    }
}

const deleteHostel = async (req, res, next) => { 
    try {
        if (!req.params.id) return res.json({ msg: "Hostel id is required " });
        await Hostels.findByIdAndDelete(req.params.id);
        console.log("one hostel is deleted");
        return res.status(200).send();
    } catch (error) {
        next(error);
    }
};

const addHostelPage = (req, res) => {
    res.render(path.join(__dirname, "../views/addhostel.pug"));
};

module.exports = { getAllhostels, addHostel, deleteHostel, addHostelPage };
