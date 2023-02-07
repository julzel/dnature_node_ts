import { Request, Response } from 'express';
import { Endpoint } from '../../common/types';
import User from './userModel';

type UserEndpoint<T> = {
  [P in keyof T]-?: T[P];
};

const create = async (req: Request, res: Response) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastName: req.body.lastName,
    address: req.body.address,
    userType: req.body.userType,
    dogProfiles: req.body.dogProfiles,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

const readById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const readAll = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

const UserEndpoints: UserEndpoint<Endpoint> = {
  create,
  readById,
  readAll,
  update,
  destroy,
};

export default UserEndpoints;
