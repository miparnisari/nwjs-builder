
const { dirname, join } = require('path');

const NWB = require('../');

// Because `npm test` is run from `../`, we depend on absolute path instead of `process.cwd()`.
const DIR_TEST = dirname(module.filename);

describe('module', function() {

    describe('nwbuild', function() {

        this.timeout(15000);

        it('should build in "./build/"', function(done) {

            NWB.commands.nwbuild(join(DIR_TEST, './nwb-test/'), {
                // Here we fake a command object.
                //run: true,
                version: '0.14.4-sdk',
                platforms: 'win32,osx64',
                outputDir: join(DIR_TEST, './build/'),
                withFfmpeg: true,
                sideBySide: true,
                production: true,
                //winIco: './nwb-test.ico',
                //macIcns: './nwb-test.icns',
            }, (err) => {

                if(err) throw err;

                done();

            });

        });

    });

});
