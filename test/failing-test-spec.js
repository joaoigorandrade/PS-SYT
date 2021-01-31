'use strict'

const chai = require('chai')
const expect = chai.expect
const {testaQualHotel} = require("../src/main");

describe('A failing test',  ()=> {
  it("1 example should return Lakewood",()=>{
    const result = testaQualHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")
    expect(result).to.be.eq("Lakewood")
  })
  it("2 example should return Bridgewood",()=>{
    const result = testaQualHotel("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")
    expect(result).to.be.eq("Bridgewood")
  })
  it("3 example should return Ridgewood",()=>{
    const result = testaQualHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")
    expect(result).to.be.eq("Ridgewood")
  })
  it("4 example should return Lakewood",()=>{
    const result = testaQualHotel("Rewards: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")
    expect(result).to.be.eq("Lakewood")
  })
  it("5 example should return Ridgewood",()=>{
    const result = testaQualHotel("Rewards: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")
    expect(result).to.be.eq("Ridgewood")
  })
  it("6 example should return Lakewood",()=>{
    const result = testaQualHotel("Regular: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")
    expect(result).to.be.eq("Lakewood")
  })
  it("7 example should return Lakewood",()=>{
    const result = testaQualHotel("Regular: 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat)")
    expect(result).to.be.eq("Lakewood")
  })
  it("8 example should return Lakewood",()=>{
    const result = testaQualHotel("Regular: 23Mar2009(mon), 24Mar2009(tues), 25Mar2009(wed)")
    expect(result).to.be.eq("Lakewood")
  })
  it("9 example should return Ridgewood",()=>{
    const result = testaQualHotel("Rewards: 27Mar2009(sun), 28Mar2009(mon), 29Mar2009(tues)")
    expect(result).to.be.eq("Ridgewood")
  })
  it("10 example should return Bridgewood",()=>{
    const result = testaQualHotel("Regular: 1jan2021(fri), 2jan2021(sat), 3jan2021(sun)")
    expect(result).to.be.eq("Bridgewood")
  })
  it("11 example should return Lakewood",()=>{
    const result = testaQualHotel("Rewards: 20jan2021(wed), 21jan2021(thur), 22jan2021(fri)")
    expect(result).to.be.eq("Lakewood")
  })
  it("12 example should return Ridgewood",()=>{
    const result = testaQualHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")
    expect(result).to.be.eq("Ridgewood")
  })
})
