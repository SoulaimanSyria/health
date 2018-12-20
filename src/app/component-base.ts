import { MatDialog } from "@angular/material";
import { Input } from "@angular/core";

export class ComponentBase {
   
    constructor(public dialog:MatDialog){}


    OpenDialog(component: any, dataArray:any={}, disableClose :boolean=true):any{
        return this.dialog.open(component, {
            minWidth:'500px',
            data: dataArray,
            disableClose: disableClose,
          });
    }

}
