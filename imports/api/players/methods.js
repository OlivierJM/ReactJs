import { Meteor } from "meteor/meteor";
import { Check } from "meteor/check";
import { Teams } from "./teams";

Meteor.methods({
  insertPlayers(team, score, code) {
    Check(team, String);
    Check(score, String);
    Check(teamCode, String);

    Teams.insert({
      team,
      score,
      code,
      date: new Date()
    });
  }
});
