import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId:number = 4;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

}