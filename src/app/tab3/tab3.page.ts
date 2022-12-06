import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private pickerCtrl: PickerController) {}
  async openPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'frequency',
          options: [
            {
              text: 'every',
              value: '1',
            },
            {
              text: 'every 2',
              value: '2',
            },
            {
              text: 'every 3',
              value: '3',
            },
            {
              text: 'every 4',
              value: '4',
            },
            {
              text: 'every 5',
              value: '5',
            },
            {
              text: 'every 6',
              value: '6',
            },
            {
              text: 'every 7',
              value: '7',
            },
            {
              text: 'every 8',
              value: '8',
            },
            {
              text: 'every 9',
              value: '9',
            },
            {
              text: 'every 10',
              value: '10',
            },
            {
              text: 'every 11',
              value: '11',
            },
            {
              text: 'every 12',
              value: '12',
            },
            {
              text: 'every 13',
              value: '13',
            },
            {
              text: 'every 14',
              value: '14',
            },
            {
              text: 'every 15',
              value: '15',
            },
            {
              text: 'every 16',
              value: '16',
            },
          ],
        },
        {
          name: 'duration',
          options: [
            {
              text: 'day(s)',
              value: 'days',
            },
            {
              text: 'week(s)',
              value: 'weeks',
            },
            {
              text: 'month(s)',
              value: 'months',
            },
            {
              text: 'year(s)',
              value: 'years',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            window.alert(`This event will repeat ${value.frequency.text} ${value.duration.text}.`);
          },
        },
      ],
    });

    await picker.present();
  }

  async openReminder() {
    const reminder = await this.pickerCtrl.create({
      columns: [
        {
          name: 'frequency',
          options: [
            {
              text: '1',
              value: '1',
            },
            {
              text: '2',
              value: '2',
            },
            {
              text: '3',
              value: '3',
            },
            {
              text: '4',
              value: '4',
            },
            {
              text: '5',
              value: '5',
            },
            {
              text: '6',
              value: '6',
            },
            {
              text: '7',
              value: '7',
            },
            {
              text: '8',
              value: '8',
            },
            {
              text: '9',
              value: '9',
            },
            {
              text: '10',
              value: '10',
            },
            {
              text: '11',
              value: '11',
            },
            {
              text: '12',
              value: '12',
            },
            {
              text: '13',
              value: '13',
            },
            {
              text: '14',
              value: '14',
            },
            {
              text: '15',
              value: '15',
            },
            {
              text: '16',
              value: '16',
            },
          ],
        },
        {
          name: 'duration',
          options: [
            {
              text: 'minute(s) before',
              value: 'minutes',
            },
            {
              text: 'hour(s) before',
              value: 'hours',
            },
            {
              text: 'day(s) before',
              value: 'days',
            },
            {
              text: 'week(s) before',
              value: 'weeks',
            },
            {
              text: 'month(s) before',
              value: 'months',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            window.alert(`You will be notified ${value.frequency.text} ${value.duration.text} this scheduled event.`);
          },
        },
      ],
    });

    await reminder.present();
  }
}
