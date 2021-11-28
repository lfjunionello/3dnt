import {dnt} from "./module/config.js";
import DntItemSheet from "./module/sheets/DntItemSheet.js";

Hooks.once("init", function () {
    console.log("AAAAAAAA Inicializando o sistema de 3D&T");

    CONFIG.dnt = dnt;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("dnt", DntItemSheet, {makeDefault: true});

});