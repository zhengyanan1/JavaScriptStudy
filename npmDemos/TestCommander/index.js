#!/usr/bin/env node

const { program } = require('commander');
const pkg = require("./package.json");

program
    .command('version')
    .description('查看版本信息')
    .action((opt) => {
        console.log(`version: ${pkg.version}\n`);
    });


program.parse(process.argv);