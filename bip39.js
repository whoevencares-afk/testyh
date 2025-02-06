const bip39 = (function () {
    let module = {};
    (function (exports) {
        exports.generateMnemonic = function () {
            return "example seed phrase that is valid"; // Här skulle bip39-genereringen ske
        };
        exports.validateMnemonic = function (mnemonic) {
            return mnemonic === "example seed phrase that is valid";
        };
    })(module);
    return module;
})();