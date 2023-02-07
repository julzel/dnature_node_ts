import { Schema, model, Document } from 'mongoose';

interface IImageCollection {
  items: Array<{
    title: string;
    url: string;
  }>;
}

interface IIconosCollection {
  items: Array<{
    title: string;
    url: string;
  }>;
}

export interface IProduct extends Document {
  productName: string;
  description: string;
  category: string;
  medida: string;
  precio: number;
  ingredientes: string;
  nutritionalFacts: string;
  imageCollection: IImageCollection;
  iconosCollection: IIconosCollection;
}

const productSchema = new Schema<IProduct>({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  medida: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  ingredientes: {
    type: String,
    required: true,
  },
  nutritionalFacts: {
    type: String,
    required: true,
  },
  imageCollection: {
    type: Object,
    required: true,
  },
  iconosCollection: {
    type: Object,
    required: true,
  },
});

export const Product = model<IProduct>('Product', productSchema);
