import { EPlayerPosition, type IPlayer } from "../../types/player";

const players: IPlayer[] = [
  {
    id: "618a37616aad2d341a13038c",
    name: "Bohdan Pastushenko",
    position: EPlayerPosition.PF,
    age: 26,
    number: 23,
    gp: 2,
    gs: 0,
    mp: 28.25,
    pts: 3.5,
    oreb: 4,
    dreb: 6,
    reb: 5,
    ast: 0.5,
    blk: 1.0,
    stl: 2,
    fta: 1,
    ftm: 0.5,
    two_pa: 27.5,
    two_pm: 1.5,
    three_pa: 1.5,
    three_pm: 0,
    tov: 3.5,
    fouls: 3,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "",
    plus_minus: 0,
  },
  {
    id: "60ebe0ce9dddded387726759",
    name: "Max Zahorskyi",
    position: EPlayerPosition.SF,
    age: 24,
    number: 2,
    gp: 0,
    gs: 0,
    mp: 0,
    pts: 0,
    oreb: 0,
    dreb: 0,
    reb: 0,
    ast: 0,
    blk: 0,
    stl: 0,
    fta: 0,
    ftm: 0,
    two_pa: 0,
    two_pm: 0,
    three_pa: 0,
    three_pm: 0,
    tov: 0,
    fouls: 0,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "1997-05-12",
    plus_minus: 0,
  },
  {
    id: "60ebe18b9dddded38772675c",
    name: "Vladimir Furman",
    position: EPlayerPosition.C,
    age: 28,
    number: 10,
    gp: 2,
    gs: 0,
    mp: 36.25,
    pts: 22,
    oreb: 5,
    dreb: 15,
    reb: 10,
    ast: 3.5,
    blk: 0,
    stl: 1.5,
    fta: 0.5,
    ftm: 0,
    two_pa: 167,
    two_pm: 7.5,
    three_pa: 9,
    three_pm: 3,
    tov: 4.5,
    fouls: 0,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "",
    plus_minus: 0,
  },
  {
    id: "60ebe1169dddded38772675a",
    name: "Andrei Chapovskyi",
    position: EPlayerPosition.PG,
    age: 33,
    number: 3,
    gp: 2,
    gs: 0,
    mp: 17,
    pts: 3.5,
    oreb: 1,
    dreb: 2,
    reb: 1.5,
    ast: 1.0,
    blk: 0,
    stl: 2,
    fta: 1,
    ftm: 0.5,
    two_pa: 25.5,
    two_pm: 1.5,
    three_pa: 0.5,
    three_pm: 0,
    tov: 3.5,
    fouls: 2,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "",
    plus_minus: 0,
  },
  {
    id: "618a36726aad2d341a13038a",
    name: "Sergei Gomon",
    position: EPlayerPosition.PG,
    age: 27,
    number: 11,
    gp: 2,
    gs: 0,
    mp: 22.75,
    pts: 14.5,
    oreb: 1,
    dreb: 5,
    reb: 3,
    ast: 3.5,
    blk: 0,
    stl: 4,
    fta: 1,
    ftm: 1,
    two_pa: 8,
    two_pm: 3,
    three_pa: 8,
    three_pm: 2.5,
    tov: 2.0,
    fouls: 1.5,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "",
    plus_minus: 0,
  },
  {
    id: "60ebdf339dddded387726758",
    name: "Deniz Gunger",
    position: EPlayerPosition.PG,
    age: 23,
    number: 0,
    gp: 2,
    gs: 0,
    mp: 4.5,
    pts: 1,
    oreb: 1,
    dreb: 1,
    reb: 1,
    ast: 0.5,
    blk: 0.5,
    stl: 0,
    fta: 0,
    ftm: 0,
    two_pa: 1.5,
    two_pm: 0.5,
    three_pa: 0,
    three_pm: 0,
    tov: 1.5,
    fouls: 1,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "1997-05-08",
    plus_minus: 0,
  },
  {
    id: "60ebe1679dddded38772675b",
    name: "Evgenii Joker",
    position: EPlayerPosition.PF,
    age: 27,
    number: 9,
    gp: 1,
    gs: 0,
    mp: 23.5,
    pts: 4.0,
    oreb: 1,
    dreb: 5,
    reb: 6,
    ast: 1.0,
    blk: 0,
    stl: 1.0,
    fta: 0,
    ftm: 0,
    two_pa: 49,
    two_pm: 2.0,
    three_pa: 1.0,
    three_pm: 0,
    tov: 3.0,
    fouls: 2.0,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "",
    plus_minus: 0,
  },
  {
    id: "618a378e6aad2d341a13038d",
    name: "Yurii Shevchuk",
    position: EPlayerPosition.PF,
    age: 26,
    number: 33,
    gp: 2,
    gs: 0,
    mp: 36,
    pts: 11.5,
    oreb: 2,
    dreb: 15,
    reb: 8.5,
    ast: 1.0,
    blk: 0,
    stl: 1.0,
    fta: 2,
    ftm: 0.5,
    two_pa: 75.5,
    two_pm: 3.5,
    three_pa: 6,
    three_pm: 1,
    tov: 1.5,
    fouls: 1.0,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "",
    plus_minus: 0,
  },
  {
    id: "618a44977bdeeee79949d7a4",
    name: "Vadim Yunash",
    position: EPlayerPosition.PG,
    age: 23,
    number: 7,
    gp: 1,
    gs: 0,
    mp: 31.5,
    pts: 13.0,
    oreb: 0,
    dreb: 4,
    reb: 4,
    ast: 7.0,
    blk: 0,
    stl: 1.0,
    fta: 4.0,
    ftm: 3.0,
    two_pa: 81,
    two_pm: 5.0,
    three_pa: 1.0,
    three_pm: 0,
    tov: 2.0,
    fouls: 1.0,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "",
    plus_minus: 0,
  },
  {
    id: "618a37326aad2d341a13038b",
    name: "Ihor Saliuk",
    position: EPlayerPosition.SG,
    age: 27,
    number: 15,
    gp: 2,
    gs: 0,
    mp: 20,
    pts: 2,
    oreb: 1,
    dreb: 6,
    reb: 3.5,
    ast: 3,
    blk: 0,
    stl: 0,
    fta: 0.5,
    ftm: 0,
    two_pa: 6,
    two_pm: 1,
    three_pa: 1.5,
    three_pm: 0,
    tov: 4.5,
    fouls: 1.5,
    bestInAst: false,
    bestInBlk: false,
    bestInPts: false,
    bestInReb: false,
    bestInStl: false,
    image_thumb: "",
    birthDate: "",
    plus_minus: 0,
  },
];

export { players };
