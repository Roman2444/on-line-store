import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "Принтер",
      },
      {
        id: 2,
        name: "Монитор",
      },
    ];
    this._brands = [
      {
        id: 1,
        name: "HP",
      },
      {
        id: 2,
        name: "Dell",
      },
    ];

    this._devices = [
      {
        id: 1,
        name: "Принтер",
        price: 100,
        rating: 5,
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
      {
        id: 2,
        name: "Монитор",
        price: 200,
        rating: 4,
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
