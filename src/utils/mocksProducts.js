import { faker } from '@faker-js/faker'

export const generateProducts = () => {
    return {
        title: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        code: `${faker.number.int({ min: 10, max: 100 })}${faker.string.alpha({ length: 5, casing: 'upper' })}`,
        price: parseFloat(faker.commerce.price()),
        status: faker.datatype.boolean(),
        stock: faker.number.int({ min: 10, max: 100 }),
        category: faker.commerce.department(),
        thumbnail: faker.image.url(),
    }
}