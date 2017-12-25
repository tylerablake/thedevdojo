import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  softwareVersion: string;
  environmentName: string;
  portNumber: number;
  apiUrl: string;

  constructor() {
    this.softwareVersion = environment.softwareVersion;
    this.environmentName = environment.name;
    this.portNumber = environment.port;
    this.apiUrl = environment.apiUrl;
   }

  ngOnInit() {
  }

}
