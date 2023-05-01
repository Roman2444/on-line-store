import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "Принтеры",
      },
      {
        id: 2,
        name: "Мониторы",
      },
      {
        id: 3,
        name: "Телефоны",
      },
      {
        id: 4,
        name: "Холодильник",
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
      {
        id: 3,
        name: "Lenovo",
      },
      {
        id: 4,
        name: "Samsung",
      },
    ];

    this._devices = [
      {
        id: 1,
        name: "Принтер",
        price: 100,
        rating: 5,
        img: "https://static.onlinetrade.ru/img/items/m/1117638_1.jpg",
      },
      {
        id: 2,
        name: "Монитор",
        price: 200,
        rating: 4,
        img: "https://static.ru-mi.com/upload/resize_cache/iblock/3d4/440_440_1/3d4aa400db5dbf577a2b00234bcc245e.jpeg",
      },
      {
        id: 3,
        name: "Холодильник",
        price: 100,
        rating: 5,
        img: "https://img.mvideo.ru/Big/20070445bb.jpg",
      },
      {
        id: 4,
        name: "Мобильный телефон",
        price: 200,
        rating: 4,
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b7afd317842837.562bff331a8bc.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
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

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
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
