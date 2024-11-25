import { AdopterEntity } from "../entities/AdopterEntity.js";
import { AdopterRepository } from "../repositories/AdopterRepository.js";
import { AddressEntity } from "../entities/AddressEntity.js";
export class AdopterController {
    constructor() {
        this.adopterRepository = new AdopterRepository();
    }
    async createAdopter(req, res) {
        const { address, cellphone, name, password, photo } = (req.body);
        const newAdopter = new AdopterEntity(name, password, cellphone, photo, address);
        this.adopterRepository.createAdopter(newAdopter);
        return res.status(200).json({ message: "OK", newAdopter });
    }
    async updateAddress(req, res) {
        const { city, state } = req.body;
        const { adopterId } = req.params;
        const newAddress = new AddressEntity(city, state);
        const adopter = await this.adopterRepository.findAdopterById(parseInt(adopterId));
        if (!adopter) {
            return res
                .status(404)
                .json({ status: 404, message: "Adopter not found!" });
        }
        adopter.address = newAddress;
        this.adopterRepository.createAdopter(adopter);
        return res.status(200).json({
            status: 200,
            message: `Adopter's address Updated: ${newAddress.city} - ${newAddress.state}`,
        });
    }
    async listAdopters(req, res) {
        return res.status(200).json({
            message: "Successful!",
            data: await this.adopterRepository.listAdopters(),
        });
    }
    async deleteAdopter(req, res) {
        const { adopterId } = req.params;
        const adopter = await this.adopterRepository.findAdopterById(parseInt(adopterId));
        if (!adopter) {
            return res
                .status(404)
                .json({ status: 404, message: "Adopter not found!" });
        }
        this.adopterRepository.deleteAdopter(adopter);
        return res.status(200).json({
            status: 200,
            message: "Adopter successfully deleted!",
            data: adopter,
        });
    }
}
