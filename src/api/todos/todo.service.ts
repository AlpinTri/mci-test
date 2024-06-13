import { Express } from 'express';
import { FilterDTO, TodoDTO } from './todo.interface';
import { readData, writeData } from '../../data';
import { shortUUIDGenerator } from '../../utils/ShortUUIDGenerator';
import { create } from './todo.validation';

export default class TodoService {
  constructor(
    private app: Express,
  ) {}

  create(dto: TodoDTO) {
    const data = {
      ...dto,
      deletedAt: null,
      id: shortUUIDGenerator()
    }

    const storedData = readData()
    storedData.push(data)

    writeData(storedData)
  }

  update(id: string, dto: TodoDTO) {
    const storedData = readData()
    const newData = storedData.map(value => {
      if (value.id === id) {
        value.task = dto.task
      }
      
      return value
    })

    writeData(newData)
  }

  get(id: string) {
    // implement
  }
  
  getAll(filter: FilterDTO) {
    const data = readData();
    // implement filter
    if (filter.active) {
      return data.filter(value => value.deletedAt === null)
    }

    return data;
  }

  hardDelete(id: string) {
    // implement

  }

  softDelete(id: string) {
    // implement
  }
}