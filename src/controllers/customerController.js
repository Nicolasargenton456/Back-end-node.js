import {createCustomer, deleteCustomer, getAllCustomers, getCustomerById, updateCustomer} from '../services/customerService.js';


export const  getCustome = async(req, res) => {
    try{
        const customer = await getAllCustomers();
        res.json(customer)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao Buscar customer",
        });
    }
}
