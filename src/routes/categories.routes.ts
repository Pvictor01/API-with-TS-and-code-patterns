import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, decription } = request.body;

  categories.push({
    name,
    decription,
  });

  return response.status(201).send();
});

export { categoriesRoutes };
