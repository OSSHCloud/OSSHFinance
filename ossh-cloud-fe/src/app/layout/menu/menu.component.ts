import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { FE_URLS } from 'src/app/shared/utils/Constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {}
  ngOnInit() {
    this.getAndSetMenu();
  }
  getAndSetMenu() {
    this.items = [
      {
        label: 'UMS',
        icon: 'pi pi-fw pi-user-edit',
        items: [
          {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            command: () => this.navigateTo(FE_URLS.USERS),
            // items: [
            //   {
            //     label: 'Bookmark',
            //     icon: 'pi pi-fw pi-bookmark',
            //   },
            //   {
            //     label: 'Video',
            //     icon: 'pi pi-fw pi-video',
            //   },
            // ],
          },
          {
            label: 'Organization',
            icon: 'pi pi-fw pi-sitemap',
            command: () => this.navigateTo(FE_URLS.ORGANIZATION),
          },
          {
            label: 'Applications',
            icon: 'pi pi-fw pi-qrcode',
            command: () => this.navigateTo(FE_URLS.APPLICATIONS),
          },
          {
            label: 'Application Roles',
            icon: 'pi pi-fw pi-sitemap',
            command: () => this.navigateTo(FE_URLS.APPLICATION_ROLES),
          },
          {
            label: 'Business Roles',
            icon: 'pi pi-fw pi-sitemap',
            command: () => this.navigateTo(FE_URLS.BUSINESS_ROLES),
          },
          {
            label: 'Packages',
            icon: 'pi pi-fw pi-wallet',
          },
        ],
      },
      {
        label: 'Finance',
        icon: 'pi pi-fw pi-user-edit',
        items: [
          {
            label: 'Banks',
            icon: 'pi pi-fw pi-user',
            command: () => this.navigateTo(FE_URLS.BANKS),
            // items: [
            //   {
            //     label: 'Bookmark',
            //     icon: 'pi pi-fw pi-bookmark',
            //   },
            //   {
            //     label: 'Video',
            //     icon: 'pi pi-fw pi-video',
            //   },
            // ],
          },
          {
            label: 'Accounts',
            icon: 'pi pi-fw pi-sitemap',
            command: () => this.navigateTo(FE_URLS.ACCOUNTS),
          },
          {
            label: 'Transactions',
            icon: 'pi pi-fw pi-qrcode',
            command: () => this.navigateTo(FE_URLS.TRANSACTIONS),
          },
          // {
          //   label: 'Application Roles',
          //   icon: 'pi pi-fw pi-sitemap',
          //   command: () => this.navigateTo(FE_URLS.APPLICATION_ROLES),
          // },
          // {
          //   label: 'Business Roles',
          //   icon: 'pi pi-fw pi-sitemap',
          //   command: () => this.navigateTo(FE_URLS.BUSINESS_ROLES),
          // },
          // {
          //   label: 'Packages',
          //   icon: 'pi pi-fw pi-wallet',
          // },
        ],
      },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     {
      //       label: 'Left',
      //       icon: 'pi pi-fw pi-align-left',
      //     },
      //     {
      //       label: 'Right',
      //       icon: 'pi pi-fw pi-align-right',
      //     },
      //     {
      //       label: 'Center',
      //       icon: 'pi pi-fw pi-align-center',
      //     },
      //     {
      //       label: 'Justify',
      //       icon: 'pi pi-fw pi-align-justify',
      //     },
      //   ],
      // },
      // {
      //   label: 'Users',
      //   icon: 'pi pi-fw pi-user',
      //   items: [
      //     {
      //       label: 'New',
      //       icon: 'pi pi-fw pi-user-plus',
      //     },
      //     {
      //       label: 'Delete',
      //       icon: 'pi pi-fw pi-user-minus',
      //     },
      //     {
      //       label: 'Search',
      //       icon: 'pi pi-fw pi-users',
      //       items: [
      //         {
      //           label: 'Filter',
      //           icon: 'pi pi-fw pi-filter',
      //           items: [
      //             {
      //               label: 'Print',
      //               icon: 'pi pi-fw pi-print',
      //             },
      //           ],
      //         },
      //         {
      //           icon: 'pi pi-fw pi-bars',
      //           label: 'List',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   label: 'Events',
      //   icon: 'pi pi-fw pi-calendar',
      //   items: [
      //     {
      //       label: 'Edit',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         {
      //           label: 'Save',
      //           icon: 'pi pi-fw pi-calendar-plus',
      //         },
      //         {
      //           label: 'Delete',
      //           icon: 'pi pi-fw pi-calendar-minus',
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Archieve',
      //       icon: 'pi pi-fw pi-calendar-times',
      //       items: [
      //         {
      //           label: 'Remove',
      //           icon: 'pi pi-fw pi-calendar-minus',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ];
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
