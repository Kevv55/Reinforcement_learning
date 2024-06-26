///\/\/\\\/\\//\\//\\/\\///\\///\/\/\/\\\/\\//\\//\\/\\///\\///\
//
//  Assignment       COMP3200 - Assignment 5
//  Professor:       David Churchill
//  Year / Term:     2023-09
//  File Name:       Maps.js
// 
//  Student Name:    Kelvin Fumo
//  Student User:    kefumo
//  Student Email:   kefumo@mun.ca
//  Student ID:      202045506
//  Group Member(s): [enter student name(s)]
//
///\/\/\\\/\\//\\//\\/\\///\\///\/\/\/\\\/\\//\\//\\/\\///\\///\



let miniMap = [
    [['C', -1], ['C', -1], ['C', -1]],
    [['C', -1], ['T', 0], ['C', -1]],
    [['C', -1], ['C', -1], ['C', -1]]
]
                                  
let tinyMap = [
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['C', -1], ['W', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['T',  0], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['C', -1], ['W', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]]
]

let defaultMap = [
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['W', -1], ['W', -1], ['W', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['T',  0], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['W', -1], ['W', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['W', -1], ['T',  0], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]]
];
                                  
let largeMap = [
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['T',  0], ['C', -1]],
    [ ['C', -1], ['W', -1], ['W', -1], ['W', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['T',  0], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['W', -1], ['W', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['W', -1], ['W', -1], ['W', -1], ['W', -1], ['W', -1], ['W', -1], ['C', -1], ['W', -1], ['W', -1], ['W', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['T',  0], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['W', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]],
    [ ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1], ['C', -1]]
];

// Copyright (C) David Churchill - All Rights Reserved
// COMP3200 - 2023-09 - Assignment 5
// Written by David Churchill (dave.churchill@gmail.com)
// Unauthorized copying of these files are strictly prohibited
// Distributed only for course work at Memorial University
// If you see this file online please contact email above
