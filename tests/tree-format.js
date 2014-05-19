/*eslint-env mocha,node */
/*eslint strict:0 */

var assert = require("chai").assert;

var TreeFormat = require("../index");

describe(".stringify()", function() {

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify("a"), "a");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify(["a"]), "a");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify({
            "a": "b"
        }), "a[b]");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify({
            "a": ["b"]
        }), "a[b]");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify([{
            "a": ["b"]
        }]), "a[b]");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify([{
            "a": ["b"]
        }, "c"]), "a[b],c");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify({
            "a": [{
                "b": ["c"]
            }]
        }), "a[b[c]]");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify({
            "a": [{
                "b": ["c"]
            }, "d"]
        }), "a[b[c],d]");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify({
            "a": [{
                "b": ["c"],
                "e": "f"
            }, "d"]
        }), "a[b[c],e[f],d]");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify({
            "a": [{
                "b": ["c"],
                "e": "f"
            }, "d", {
                "g": "h"
            }]
        }), "a[b[c],e[f],d,g[h]]");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify({
            "a": null
        }), "a[]");
    });

    it("should be correct", function() {
        assert.equal(TreeFormat.stringify([{
            "1": 2
        }, {
            null: function() {}
        }]), "1[2],null[]");
    });

    // it("should be incorrect", function() {
    //     assert.throws(function() {
    //         TreeFormat.stringify({
    //             a: "b",
    //             c: "d"
    //         });
    //     }, "Object should have only one key");
    // });
});