import { Meteor } from "meteor/meteor";
import { check, Match } from "meteor/check";
import { Teams } from "./teams";

Meteor.methods({
  insertTeam(team, score, code, color) {
    check(team, String);
    check(score, Number);
    check(code, String);
    check(color, Match.OneOf(String, null, undefined));
    
    Teams.insert({
      team,
      score,
      code,
      color,
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
