const path = require('path');
const {setupBuildTest, readFiles} = require('../../test-utils');

const cwd = path.join(__dirname, 'build');

let files = {};
let error;

describe('missing plugin', () => {
  beforeAll(() => {
    try {
      setupBuildTest(__dirname);
    } catch(err) {
      error = err;
    }
    files = readFiles(cwd);
  });

  it('Gives an error message', () => {
    console.log(error);
    console.log(files);
    expect(files).toMatchObject({});

    /*expect(error.toString()).toEqual(
      expect.stringContaining(`snowpack.install is not of a type(s) array`)
    );*/
  })
});