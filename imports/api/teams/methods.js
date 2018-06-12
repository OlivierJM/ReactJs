import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Teams } from "./teams";

Meteor.methods({
  insertTeam(team, score, code) {
    check(team, String);
    check(score, Number);
    check(code, String);

    Teams.insert({
      team,
      score,
      code,
      date: new Date()
    });
  },
  increaseTeamPoints(id, score) {
    check(id, String);
    check(score, Number);

    Teams.update(id, { $inc: { score } });
  },
  reduceTeamPoints(id, score){
    check(id, String);
    check(score, Number);

    Teams.update(id, { $inc: { score: -score } });

  },
  removeTeam(id){
      check(id, String);
      Teams.remove(id);
  }
});
