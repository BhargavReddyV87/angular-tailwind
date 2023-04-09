import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerDetails = [
    {
      data: [
        {
          name: 'Dashboard',
          routerLink: 'dashboard'
        },
        {
          name: 'Team',
          routerLink: 'team'
        },
        {
          name: 'Projects',
          routerLink: 'projects'
        },
        {
          name: 'Calendar',
          routerLink: 'calendar'
        }
      ],
      logo: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
    }
  ];
  header = 'Deactivate Account'
  description = 'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.'
  footerButton = ['Cancel', 'Deactivate']

  displayModal: boolean = false;

  footerAction(action: string) {
    if (action === 'Cancel') {
      console.log(action)
      this.displayModal = false;
    }
  }

  openModal(): void {
    this.displayModal = !this.displayModal;
  }

}
