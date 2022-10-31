const fs = require("fs");
const glob = require("glob");
const JSZip = require("jszip");
const { hashElement } = require("folder-hash");

var dir = "./out";

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}
if (!fs.existsSync(dir + "/icons")) {
	fs.mkdirSync(dir + "/icons");
}

glob("**/app.json", async function (err, files) {
	if (err) {
		console.log(
			"cannot read the folder, something goes wrong with glob",
			err
		);
	}

	let apptotal = files.length;
	let apps = [];
	let promises = [];

	const options = {
		algho: "sha1",
		encoding: "hex",
	};

	for (const file of files) {
		//files.forEach(async function(file) {

		let folder = file.replace("/app.json", "");

		let hash = await hashElement(folder, options);
		let filedata = fs.readFileSync(file);

		let parsed = JSON.parse(filedata);
		parsed.sha = hash.hash;
		//console.log(parsed)
		apps.push(parsed);

		if (fs.existsSync(folder + "/" + parsed.icon)) {
			let imagedata = fs.readFileSync(folder + "/" + parsed.icon);
			fs.writeFileSync(dir + "/icons/" + parsed.icon, imagedata);
		} else {
			console.error("missing file: ".folder + "/" + parsed.icon);
		}

	}

	let json = {
		appcount: apptotal,
		apps: apps,
	};

	let data = JSON.stringify(json);

	fs.writeFileSync(dir + "/list.json", data);
});