export default class DntItemSheet extends ItemSheet{
    get template(){
        return `systems/3dnt/templates/sheets/${this.item.data.type.toLowerCase()}-sheet.html`;
        //return `systems/3dnt/templates/sheets/magia-sheet.html`;
    }
}