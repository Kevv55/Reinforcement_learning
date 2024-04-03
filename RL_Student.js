///\/\/\\\/\\//\\//\\/\\///\\///\/\/\/\\\/\\//\\//\\/\\///\\///\
//
//  Assignment       COMP3200 - Assignment 5
//  Professor:       David Churchill
//  Year / Term:     2023-09
//  File Name:       RL_Student.js
// 
//  Student Name:    Kelvin Fumo
//  Student User:    kefumo
//  Student Email:   kefumo@mun.ca
//  Student ID:      202045506
//  Group Member(s): No group
//
///\/\/\\\/\\//\\//\\/\\///\\///\/\/\/\\\/\\//\\//\\/\\///\\///\

class RL {

    constructor(env, config) {
        this.config = config;
        this.env = env;

        this.Q = [];
        this.P = [];

        this.state = [0, 0];
        this.init();
    }

    init() {
        for (let x = 0; x < this.env.width; x++) {
            this.Q.push([]);
            for (let y = 0; y < this.env.height; y++) {
                this.Q[x].push([]);
                for (let a = 0; a < this.env.actions.length; a++) {
                    this.Q[x][y].push(0);
                }
            }
        }

        for (let x = 0; x < this.env.width; x++) {
            this.P.push([]);
            for (let y = 0; y < this.env.height; y++) {
                this.P[x].push([]);
                for (let a = 0; a < this.env.actions.length; a++) {
                    this.P[x][y].push(1.0 / this.env.actions.length);
                }
            }
        }
    }

    learningIteration() {
        while (this.env.isTerminal(this.state[0], this.state[1]) || this.env.isBlocked(this.state[0], this.state[1])) {
            this.state[0] = Math.floor(Math.random() * this.env.width);
            this.state[1] = Math.floor(Math.random() * this.env.height);
        }
        var action = this.selectActionFromPolicy([this.state[0], this.state[1]]);
        let next = this.env.getNextState(this.state[0], this.state[1], action);
        let reward = this.env.getReward(next[0], next[1]);
        this.updateValue(this.state, action, reward, next);
        this.updatePolicy(this.state);
        this.state = next;
    }


    selectActionFromPolicy(state) {
        let maxValueActionIndex = 0;
        let a = Math.random();
        let currMax = 0;
        let mAction = [];
        for (let i = 0; i < this.P[state[0]][state[1]].length; i++) {
            if (this.P[state[0]][state[1]][i] >= currMax) {
                currMax = this.P[state[0]][state[1]][i];
                mAction.push(i);
            }
        }

        if (a < this.config.epsilon) {
            maxValueActionIndex = Math.floor(Math.random() * this.env.actions.length);
        } else {
            maxValueActionIndex = mAction[Math.floor(Math.random() * mAction.length)];
        }
        return maxValueActionIndex;
    }

    updateValue(state, action, reward, nextState) {
        let curMax = -1000000;
        let maxIndex = 0;
        for (let i = 0; i < this.Q[nextState[0]][nextState[1]].length; i++) {
            if (this.Q[nextState[0]][nextState[1]][i] > curMax) {
                curMax = this.Q[nextState[0]][nextState[1]][i];
                maxIndex = i;
            }
        }
        this.Q[state[0]][state[1]][action] = this.Q[state[0]][state[1]][action] + (this.config.alpha * (reward + (this.config.gamma * this.Q[nextState[0]][nextState[1]][maxIndex]) - this.Q[state[0]][state[1]][action]))
    }


    updatePolicy(state) {
        let maxActions = [];
        let maxValue = -1000000;
        for (let i = 0; i < this.env.actions.length; i++) {
            if (this.Q[state[0]][state[1]][i] > maxValue) {
                maxValue = this.Q[state[0]][state[1]][i];
            }
        }


        for (let i = 0; i < this.env.actions.length; i++) {
            if (maxValue === this.Q[state[0]][state[1]][i]) {
                maxActions.push(i)
            }
        }

        for (let i = 0; i < this.env.actions.length; i++) {
            for (let j = 0; j < maxActions.length; j++) {
                if (maxActions[j] == i) {
                    this.P[state[0]][state[1]][i] = 1.0 / maxActions.length;
                    break;
                }
                else {
                    this.P[state[0]][state[1]][i] = 0;
                }
            }
        }
    }

    getMinQ() {
        let min = 10000000;
        for (let x = 0; x < this.env.width; x++) {
            for (let y = 0; y < this.env.height; y++) {
                for (let a = 0; a < this.env.actions.length; a++) {
                    if (this.env.getType(x, y) == 'C' && this.Q[x][y][a] < min) { min = this.Q[x][y][a]; }
                }
            }
        }
        return min;
    }

    getMaxQ() {
        let max = -10000000;
        for (let x = 0; x < this.env.width; x++) {
            for (let y = 0; y < this.env.height; y++) {
                for (let a = 0; a < this.env.actions.length; a++) {
                    if (this.env.getType(x, y) == 'C' && this.Q[x][y][a] > max) { max = this.Q[x][y][a]; }
                }
            }
        }
        return max;
    }
}

// Copyright (C) David Churchill - All Rights Reserved
// COMP3200 - 2023-09 - Assignment 5
// Written by David Churchill (dave.churchill@gmail.com)
// Unauthorized copying of these files are strictly prohibited
// Distributed only for course work at Memorial University
// If you see this file online please contact email above
