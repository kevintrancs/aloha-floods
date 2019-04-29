"use strict"

let graph = [
    []
]

let graph_edges = [[0, 1, 1],
                   [0, 3, 2],
                   [1, 0, 1],
                   [1, 2, 3],
                   [1, 4, 6],
                   [2, 1, 3],
                   [2, 3, 3],
                   [2, 4, 2],
                   [3, 0, 2],
                   [3, 2, 3],
                   [4, 1, 6],
                   [4, 2, 2]]

var other_graph =  [[0, 1, 1],
                    [0, 3, 2],
                    [1, 0, 1],
                    [1, 2, 3],
                    [1, 4, 6],
                    [2, 1, 3],
                    [2, 3, 3],
                    [2, 4, 2],
                    [3, 0, 2],
                    [3, 2, 3],
                    [3, 4, 5],
                    [3, 7, 7],
                    [4, 1, 6],
                    [4, 2, 2],
                    [4, 3, 5],
                    [4, 5, 4],
                    [4, 6, 1],
                    [5, 4, 4],
                    [5, 6, 2],
                    [6, 4, 1],
                    [6, 5, 2],
                    [6, 8, 3],
                    [7, 3, 7],
                    [7, 8, 1],
                    [8, 6, 3],
                    [8, 7, 1]]

function flood(src, dest, graph, path, count, found) {
    if (path.includes(dest)) {
        return path;
    }
    else {
        // loop thru edges
        for(var i=0; i<graph.length; i++) {

            console.log("New Call: ", graph[i][0])

            // check if first index in edge is source
            if (graph[i][0] === src) {
                console.log("current src: ", graph[i][0])
                if (graph[i][1] === dest) {
                    console.log("found dest")
                    count.value++;
                    path.push(graph[i][0]);
                    //flood(graph[i][0], dest, graph, path, count, found);
                    path.push(dest);
                    found.destFound = true;
                    return path;
                }
                // if first index of edge is source, check
                // if connection is already in path
                if (!path.includes(graph[i][1]) && !path.includes(dest)) {
                    console.log("current path: ", path)
                    count.value++;
                    path.push(src);
                    flood(graph[i][1], dest, graph, path, count, found);
                }
            }
            else if (graph[i][1] === src) {
                console.log("current src: ", graph[i][1])
                if (graph[i][0] === dest) {
                    console.log("found dest")
                    count.value++;
                    path.push(graph[i][1]);
                    //flood(graph[i][0], dest, graph, path, count, found);
                    path.push(dest);
                    found.destFound = true;
                    return path;
                }
                // if first index of edge is source, check
                // if connection is already in path
                if (!path.includes(graph[i][0]) && !path.includes(dest)) {
                    console.log("current path: ", path)
                    count.value++;
                    path.push(src);
                    flood(graph[i][0], dest, graph, path, count, found);
                }
            }
        }
    }
    return path;
}

function main() {
    var path = [];
    var count = {
        value: 0
    };
    var found = {
        destFound: false
    };
    var path = flood(1, 5, other_graph, path, count, found);
    console.log("final path: ", path);
}