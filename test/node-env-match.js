"use strict"

var nodeEnvMatch = require('../');
var expect = require('chai').expect;

describe("[nodeEnvMatch] single value argument",function(){

  before(function(){
    process.env.NODE_ENV = "simple-test-env";
  });

  it("should return TRUE using a string that matches the ENV one ",function(){

    expect(nodeEnvMatch("simple-test-env")).to.be.true;

  });

  it("should return FALSE using a string that doesn't match the ENV one ",function(){

    expect(nodeEnvMatch("not-simple-test-env")).to.be.false;

  });

  it("should return TRUE using some RegExp that matches the ENV one ",function(){

    expect(nodeEnvMatch(/^simple-/)).to.be.true;
    expect(nodeEnvMatch(/env$/)).to.be.true;
    expect(nodeEnvMatch(/test-/)).to.be.true;

  });

  it("should return FALSE using some RegExp that matches the ENV one ",function(){

    expect(nodeEnvMatch(/^Asimple-/)).to.be.false;
    expect(nodeEnvMatch(/envE$/)).to.be.false;
    expect(nodeEnvMatch(/testO-/)).to.be.false;

  });

});

describe("[nodeEnvMatch] array value argument",function(){

  before(function(){
    process.env.NODE_ENV = "array-arguments-test-env";
  });

  it("should return TRUE using a string that matches the ENV one ",function(){

    expect(nodeEnvMatch(["not-valid","array-arguments-test-env"])).to.be.true;

  });

  it("should return FALSE using a string that doesn't match the ENV one ",function(){

    expect(nodeEnvMatch(["not-valid","not-simple-test-env"])).to.be.false;

  });

  it("should return TRUE using some RegExp that matches the ENV one ",function(){

    expect(nodeEnvMatch([/^Asimple-/,/^array-/])).to.be.true;
    expect(nodeEnvMatch([/^Asimple-/,/env$/])).to.be.true;
    expect(nodeEnvMatch([/^Asimple-/,/test-/])).to.be.true;

  });

  it("should return FALSE using some RegExp that matches the ENV one ",function(){

    expect(nodeEnvMatch([/^Asimple-/,/^NJNMKsimple-/])).to.be.false;
    expect(nodeEnvMatch([/envE$/,/smamh/g])).to.be.false;
    expect(nodeEnvMatch([/0te/,/test0/g])).to.be.false;

  });

});
