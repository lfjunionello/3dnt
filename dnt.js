import DntItemSheet from "./module/sheets/DntItemSheet.js"

Hooks.once("init", function () {
    console.log("AAAAAAAA Inicializando o sistema de 3D&T");

    Items.unregisterSheet("Core", ItemSheet);
    Items.registerSheet("dnt", DntItemSheet, {makeDefault: true});

});