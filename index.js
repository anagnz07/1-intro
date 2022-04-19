const moment = require("moment");
const { program, Option } = require("commander");

// Formato de fecha y hora: 'dd-mm-aaaa hh:mm:ss'

program
    .addOption(
        new Option("-f, --format <hour_format>", "hour format <12|24>").choices(
            ["12", "24"]
        )
    )
    .option("-p, --print <print_format>", "hour format <oneline|extended>");

program.parse(process.argv);

const options = program.opts();

let hourFormat = "";

if (options.format === "12") {
    hourFormat = "hh";
} else if (options.format === "24") {
    hourFormat = "HH";
}

if (options.print === "oneline") {
    console.log(moment(new Date()).format(`DD-MM-YYYY ${hourFormat}:mm:ss`));
} else {
    console.log(`Date: ${moment(new Date()).format(`DD-MM-YYYY`)}`);
    console.log(`Time: ${moment(new Date()).format(`${hourFormat}:mm:ss`)}`);
}
