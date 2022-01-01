"use strict";

const home = (req,res) => {
    res.render('home/index');
}

const portpolio = (req,res) => {
    res.render('home/portpolio');
}

const login = (req,res) => {
    res.render('home/login');
}

module.exports = {
    home,
    portpolio,
    login,
};