const { Basket, BasketDevice, Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
  async addDevice(req, res) {
    const { basketId, deviceId } = req.body;

    // проверяем, есть ли корзина с заданным id
    const basket = await Basket.findOne({ where: { id: basketId } });
    if (!basket) {
      return next(ApiError.badRequest("Basket not found"));
    }

    // проверяем, есть ли устройство с заданным id
    const device = await Device.findOne({ where: { id: deviceId } });
    if (!device) {
      return next(ApiError.badRequest("Device not found"));
    }

    // добавляем запись об устройстве в таблицу basket_device
    await BasketDevice.create({ basketId, deviceId });

    return res.json({ message: "Device added to basket" });
  }

  async removeDevice(req, res) {
    const { basketId, deviceId } = req.body;

    // удаляем запись об устройстве из таблицы basket_device
    await BasketDevice.destroy({ where: { basketId, deviceId } });

    return res.json({ message: "Device removed from basket" });
  }

  async getDevices(req, res) {
    const { basketId } = req.params;
    console.log(basketId);

    // получаем все устройства из корзины с заданным id
    const devices = await BasketDevice.findAll({
      where: { basketId },
      include: Device,
    });

    return res.json(devices);
  }
}

module.exports = new BasketController();
