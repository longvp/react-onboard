interface IWidgetAppearance {
  layout: string;
  language: string;
  date: string;
  color: string;
  calendarLayout: string;
  openCalendar: boolean;
  dayOfCalendar: string;
  themeColor: string;
  messageTextColor: string;
}

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
  wigetPosition?: string[];
  widgetAppearance?: IWidgetAppearance;
  delivery?: IDelivery;
  store?: IStore;
}

export interface IOption {
  label: string;
  value: any;
}
