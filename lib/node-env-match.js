"use strict";

function node_env_match(pattern) {

    if (pattern instanceof Array)
        return pattern.reduce(function (prev, current) {
            return prev || single_match(current);
        }, false);

    return single_match(pattern);

}

function single_match(pattern) {
    var env = process.env.NODE_ENV;

    if (!pattern)
        return false;

    if (typeof pattern === "string")
        return env === pattern;

    if (pattern instanceof RegExp)
        return pattern.test(env);

    return false;
}


module.exports = node_env_match;
