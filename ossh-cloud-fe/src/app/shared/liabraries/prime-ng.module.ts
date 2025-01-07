import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { PanelMenuModule } from 'primeng/panelmenu';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SliderModule } from 'primeng/slider';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    SliderModule,
    MultiSelectModule,
    MenuModule,
    ChipsModule,
    InputSwitchModule,
    RadioButtonModule,
    SelectButtonModule,
    FileUploadModule,
    ToastModule,
    InputTextareaModule,
    TableModule,
    CardModule,
    BadgeModule,
    MenubarModule,
    PanelModule,
    DialogModule,
    PanelMenuModule,
    ButtonModule,
    TagModule,
    RatingModule,
    PaginatorModule,
    ChipModule,
    StepsModule,
    AutoCompleteModule,
    TimelineModule,
    TabViewModule,
    OverlayPanelModule,
    InputMaskModule,
    SidebarModule,
    OrderListModule,
    AccordionModule,
    ChartModule,
    ToggleButtonModule,
  ],
  exports: [
    TableModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    SliderModule,
    MultiSelectModule,
    MenuModule,
    ChipsModule,
    InputSwitchModule,
    RadioButtonModule,
    SelectButtonModule,
    FileUploadModule,
    ToastModule,
    InputTextareaModule,
    TableModule,
    CardModule,
    BadgeModule,
    MenubarModule,
    PanelModule,
    DialogModule,
    PanelMenuModule,
    ButtonModule,
    TagModule,
    RatingModule,
    PaginatorModule,
    ChipModule,
    StepsModule,
    AutoCompleteModule,
    TimelineModule,
    DividerModule,
    TabViewModule,
    OverlayPanelModule,
    InputMaskModule,
    SidebarModule,
    OrderListModule,
    AccordionModule,
    ChartModule,
    ToggleButtonModule,
  ],
  providers: [DialogService, DynamicDialogRef],
})
export class PrimeNgModule {}
