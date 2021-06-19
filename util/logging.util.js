const chalk = require('chalk');
const appConfig = require('../config/app.config');
const log = console.log;
var currentdate = new Date(); 
var datetime = "[" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()
                + "]";

exports.info = (msg) => {
    if(appConfig.debug) {
        log(chalk.gray(datetime), chalk.cyan.bold('[INFO]'), msg);
    }
};

exports.warning = (msg) => {
    if(appConfig.debug) {
        log(chalk.gray(datetime), chalk.yellow.bold('[WARN]'), msg);
    }
};

exports.error = (msg) => {
    log(chalk.gray(datetime), chalk.red.bold('[ERROR]'), msg)
};

exports.default = (msg) => {
    if(appConfig.debug) {
        log(chalk.gray(datetime), chalk.red.gray('[DEFAULT]'), msg);  
    }  
}

exports.func = (msg) => {
    if(appConfig.debug) {
        log(chalk.gray(datetime), chalk.magenta('[FUNC]'), msg);  
    }  
}

exports.title = (msg) => {
    if(appConfig.debug) {
        log(chalk.gray(datetime), chalk.green('[TITLE]'), msg);  
    }  
}