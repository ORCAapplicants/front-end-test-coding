import { Component, OnInit } from '@angular/core';
import {ApiBackEndService} from '../api-back-end.service';


@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
	user:string = "";
	infoUsers:any = [];
	alert:boolean = false;
	constructor(private api:ApiBackEndService) { }
	size :number= 10;
	userSelected :any = null;
	alertNoUsers :boolean = false;
	// you can change the size limit anytime you want
	ngOnInit() {
	}
	userLoad(){
		this.userSelected = null;
		if(this.user == "gcpglobal")
			this.alert = true;
		else 
			this.alert = false;

		if(this.user.length >= 4){
			this.api.loadDudes(this.user).subscribe(data=>{     
				if(data.items.length == 0 ){
					this.alertNoUsers = true;
				}else{


					this.infoUsers = data.items;
					this.infoUsers = this.infoUsers.slice(0,this.size);
					this.alertNoUsers = false;
				}

			});
		}
	}
	clean(){
		this.userSelected = null;
		this.infoUsers = null;
	}
	userInfoLoad(id){
		this.api.loadDude(id).then((result) => {
			
			this.userSelected = result;
		})
		.catch((error) => console.error(error));

		this.api.loadFollowersDude(id).subscribe(data=>{     
			this.userSelected.followers = data.length;
		});

	}

}
