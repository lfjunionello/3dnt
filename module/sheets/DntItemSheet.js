export default class DntItemSheet extends ItemSheet{
    get template(){
        return `systems/3dnt/templates/sheets/${this.item.data.type}-sheet.html`;
        //return `systems/3dnt/templates/sheets/magia-sheet.html`;
    }

    getData(){
        const baseData = super.getData();
        
        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.dnt
        };

        return sheetData;
    }
}