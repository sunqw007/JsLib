/**
 *  sunqingwei on 15/5/6.
 */
(function (w) {
    function Smart() {

    }

    /**
     *
     * @returns {*}
     */
    Smart.init = function () {
        return Smart.prototype.init();
    };

    if ((w.Smart instanceof Smart)) {
        w.Smart = Smart.init();
    }
})(this);