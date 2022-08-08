import * as mongoose from 'mongoose';
import { CustomerSchema } from '../models/customers';
import { Request, Response } from 'express';
const url = require('url');
const querystring = require('querystring');

const Customer = mongoose.model('Customer', CustomerSchema);

export class CustomerController {
    public addNewCustomer (req: Request, res: Response) {
        let newCustomer = new Customer(req.body);

        newCustomer.save((err, customer) => {
            if(err){
                res.send(err);
            }
            res.json(customer);
        });
    }

    public getCustomers (req: Request, res: Response) {
        let parseQuery = querystring.parse(url.parse(req.url).query);
        Customer.find(parseQuery, (err, customer) => {
            if(err){
                res.send(err);
            }
            res.json(customer);
        });
    }

    public getCustomerWithID (req: Request, res: Response) {
        Customer.findById(req.params.customerId, (err, customer) => {
            if(err){
                res.send(err);
            }
            res.json(customer);
        });
    }

    public updateCustomer (req: Request, res: Response) {
        Customer.findOneAndUpdate({ _id: req.params.customerId }, req.body, { new: true }, (err, customer) => {
            if(err){
                res.send(err);
            }
            res.json(customer);
        });
    }

    public deleteCustomer (req: Request, res: Response) {
        Customer.remove({ _id: req.params.customerId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted customer!'});
        });
    }
} 

