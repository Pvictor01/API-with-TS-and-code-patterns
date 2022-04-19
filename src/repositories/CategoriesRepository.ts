import { Category } from '../model/category';

interface ICreateCategoryDTO { //DTO -> Data Transfer Object - I de interface
  name: string,
  description: string
}

class CategoriesRepository {
  private categories: Category[]; //private pq só quem vai ter acesso ao categories é o repositório
  constructor() {
    this.categories = [];
  };

  create({ name, description }: ICreateCategoryDTO):void { //void -> sem retorno
    const category = new Category()

    Object.assign(category, { 
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  };
};

export { CategoriesRepository };