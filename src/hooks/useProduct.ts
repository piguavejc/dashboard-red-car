import { useState } from 'react';
import { ProductDto, ProductModel } from '@/mvc/models';
import { ServiceProduct } from '@/mvc/services';
import { Search, resposeApi } from '@/types';
import { AxiosResponse } from 'axios';

const service: ServiceProduct = ServiceProduct.getService();

const useProduct = () => {
 const [existError, setExistError] = useState<boolean>(false);
 /* create */
 const create = async (values: ProductModel): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.create(values);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };
 /* edit */
 const edit = async (values: ProductModel): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.edit(values);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };

 /* enable */
 const enable = async (
  idProduct: number,
  product: string,
 ): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.enable(idProduct, product);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };
 /* disable */
 const disable = async (
  idProduct: number,
  product: string,
 ): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.disable(idProduct, product);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };
 /* search all */
 const search = async (
  search: Search,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.search(search);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };

 const find = async (
  id: number,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto;
    }>
  | undefined
 > => {
  try {
   return await service.find(id);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };

 /* show all disable */
 const listEnableds = async (): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showEnable();
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };
 /* show all enable */
 const listDisableds = async (): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showDisable();
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };
 /* show all categories */
 const listCategories = async (
  category: string,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showCategory(category);
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };
 /* show all laboratories */
 const listLaboratories = async (
  category: string,
  laboratory: string,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showLaboratory(category, laboratory);
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };
 /* search all categories */
 const searchCategory = async (
  product: string,
  category: string,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.searchCategory(product, category);
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };

 /* search all categories */
 const searchLaboratory = async (
  category: string,
  laboratory: string,
  search: Search,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.searchLaboratory(category, laboratory, search);
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };
 return {
  edit,
  find,
  create,
  enable,
  search,
  disable,
  listEnableds,
  listDisableds,
  searchCategory,
  listCategories,
  searchLaboratory,
  listLaboratories,
  existError,
 };
};
export { useProduct };
