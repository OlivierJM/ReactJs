import {mongo} from 'meteor/mongo';

export const Teams = new Mongo.Collection('teams');
export const Players = new Mongo.Collection('players');
