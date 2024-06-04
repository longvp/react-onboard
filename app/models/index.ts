interface IDelivery {
  deliveryDate: string;
  deliveryTime: string;
  messageText: string;
}

interface IStore {
  storePickup: string;
  storage: string;
  pickupDate: string;
  pickupTime: string;
  messageText: string;
}

export interface IFormValues {
  widgetPosition: string[];
  //  widget appearance
  layout: string;
  calendarLanguage: string;
  date: string;
  titleColor: string;
  calendarLayout: string;
  alwaysOpenCalendar: boolean;
  firstDayOfCalendar: string;
  themeColor: string;
  messageTextColor: string;
  // widget text
  delivery?: IDelivery;
  store?: IStore;
}

export interface IOption {
  label: string;
  value: any;
}
