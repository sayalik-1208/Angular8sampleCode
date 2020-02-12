import {Component } from '@angular/core'
@Component({
    selector:'app-switch',
    templateUrl:'./personList.component.html',
    styleUrls: ['./personList.component.css']
    
})
export class TheSwitchComponent
{
    people :any [];
    constructor()
    {
         this.people =[
            {
                code:'emp101',
                name:'Tom',
                gender:'male',
                annualSal:5500,
                dateofbirth:'26/6/1988',
                country:'UK'

            },
            {
                code:'emp102',
                name:'Alex',
                gender:'male',
                annualSal:5700.95,
                dateofbirth:'9/6/1982',
                country:'USA'

            },
            {
                code:'emp103',
                name:'Mike',
                gender:'male',
                annualSal:5900,
                dateofbirth:'12/8/1979',
                country:'HK'

            },
            {
                code:'emp104',
                name:'Mery',
                gender:'Female',
                annualSal:6500.826,
                dateofbirth:'14/10/1980',
                country:'India'

            }
        ]
    }

}

