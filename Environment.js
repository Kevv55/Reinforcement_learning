///\/\/\\\/\\//\\//\\/\\///\\///\/\/\/\\\/\\//\\//\\/\\///\\///\
//
//  Assignment       COMP3200 - Assignment 5
//  Professor:       David Churchill
//  Year / Term:     2023-09
//  File Name:       Environment.js
// 
//  Student Name:    Kelvin Fumo
//  Student User:    kefumo
//  Student Email:   kefumo@mun.ca
//  Student ID:      202045506
//  Group Member(s): [enter student name(s)]
//
///\/\/\\\/\\//\\//\\/\\///\\///\/\/\/\\\/\\//\\//\\/\\///\\///\

// Reinforcement Learning GridWorld Environment

class Environment {

    constructor(array) {
        this.grid = array;
        this.height = this.grid.length;
        this.width = this.grid[0].length;
        this.actions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    }

    getType(x, y) {
        return this.grid[y][x][0];
    }

    getNextState(x, y, actionIndex) {
        let nx = x + this.actions[actionIndex][0];
        let ny = y + this.actions[actionIndex][1];
        return (this.isOOB(nx, ny) || this.isBlocked(nx, ny)) ? [x, y] : [nx, ny];
    }

    getReward(x, y) {
        return this.get(x, y)[1];
    }

    get(x, y) {
        if (this.isOOB(x, y)) { console.log("WARNING: Getting OOB Cell", x, y) }
        // maps are actually stored as transpose
        return this.grid[y][x];
    }

    setType(x, y, t) {
        if (this.isOOB(x, y)) { console.log("WARNING: Setting OOB Cell", x, y) }
        this.get(x, y)[0] = t;
    }

    setReward(x, y, r) {
        if (this.isOOB(x, y)) { console.log("WARNING: Setting OOB Cell", x, y) }
        this.get(x, y)[1] = r;
    }

    getActions() {
        return this.actions;
    }

    isOOB(x, y) {
        return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }

    isBlocked(x, y) {
        return !this.isOOB(x, y) && this.getType(x, y) == 'W';
    }

    isTerminal(x, y) {
        return !this.isOOB(x, y) && this.getType(x, y) == 'T';
    }
}

// Copyright (C) David Churchill - All Rights Reserved
// COMP3200 - 2023-09 - Assignment 5
// Written by David Churchill (dave.churchill@gmail.com)
// Unauthorized copying of these files are strictly prohibited
// Distributed only for course work at Memorial University
// If you see this file online please contact email above
