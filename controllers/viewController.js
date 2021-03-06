const path = require("path");
const User = require("../models/userModel");

exports.getOverview = async (req, res, next) => {
  console.log(res.locals.user);
  res.status(200).render("overview", {});
};

exports.getLoginForm = async (req, res, next) => {
  res.status(200).render("login", { user: res.locals.user });
};

exports.getSignupForm = async (req, res, next) => {
  res.status(200).render("signup", { user: res.locals.user });
};

exports.getUserHome = async (req, res, next) => {
  res.status(200).render("workle", { user: res.locals.user });
};

exports.getAdvice = async (req, res, next) => {
  res.status(200).render("advice.pug", { user: res.locals.user });
};
