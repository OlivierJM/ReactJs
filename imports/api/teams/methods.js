import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Teams } from "./teams";

Meteor.methods({
  insertTeam(team, score, code) {
    check(team, String);
    check(score, String);
    check(code, String);

    Teams.insert({
      team,
      score,
      code,
      date: new Date()
    });
  }
});
