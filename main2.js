"use strict"

var graph = [[0, 1],
            [0, 4],
            [0, 7],
            [1, 0],
            [1, 2],
            [1, 3], 
            [1, 6],
            [1, 7],
            [2, 1],
            [2, 3],
            [2, 6],
            [3, 1],
            [3, 2],
            [3, 4],
            [4, 0],
            [4, 3],
            [4, 5],
            [4, 7],
            [5, 4],
            [6, 1],
            [6, 2],
            [6, 7],
            [7, 0],
            [7, 1],
            [7, 4],
            [7, 6]];

var nodes = [0, 1, 2, 3, 4, 5, 6, 7]

function inArray(path, dest) {
    for (var i = 0; i < path.length; i++) {
        for (var j = 0; j < path[i].length; j++) {
            if (path[i][j] === dest) {
                return true;
            }
        }
    }
    return false;
}

function flood(graph, src, path) {
    for (var i = 0; i < graph.length; i++) {
        if (graph[i][0] === src) {
            var new_link = [src, graph[i][1]];
            if (!path.includes(new_link)) {
                path.push(new_link);
            }
        } else if (graph[i][1] === src) {
            var new_link = [src, graph[i][0]];
            if (!path.includes(new_link)) {
                path.push(new_link);
            }
        }
    }
    return path
}

